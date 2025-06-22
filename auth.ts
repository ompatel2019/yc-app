import { getServerSession } from "next-auth/next";
import GitHub from "next-auth/providers/github";
import { client } from "@/sanity/lib/client";
import { writeClient } from "@/sanity/lib/write-client";
import { AUTHOR_BY_GITHUB_ID_QUERY } from "@/sanity/lib/queries";

export const authOptions = {
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, profile }: any) {
      const { name, email, image } = user;
      const { id, login, bio } = profile;

      const existingUser = await client
        .withConfig({ useCdn: false })
        .fetch(AUTHOR_BY_GITHUB_ID_QUERY, { id });

      if (!existingUser) {
        await writeClient.create({
          _type: "author",
          id,
          name,
          username: login,
          email,
          image,
          bio: bio || "",
        });
      }

      return true;
    },
    async jwt({ token, profile }: any) {
      if (profile?.id) {
        const user = await client
          .withConfig({ useCdn: false })
          .fetch(AUTHOR_BY_GITHUB_ID_QUERY, { id: profile.id });

        token.id = user?._id;
      }

      return token;
    },
    async session({ session, token }: any) {
      return {
        ...session,
        id: token.id,
        user: {
          ...session.user,
        },
      };
    },
  },
};

export function auth() {
  return getServerSession(authOptions);
}

import { workSans } from "@/lib/fonts";
import AuthProvider from "@/app/providers/SessionProvider";
import "./globals.css";
import { SanityLive } from "@/sanity/lib/live";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={workSans.variable}>
      <body>
        <AuthProvider>{children}</AuthProvider>
        <SanityLive/>
      </body>
    </html>
  );
}

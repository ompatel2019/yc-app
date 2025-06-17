import type { Metadata } from "next";
import { workSans } from "@/lib/fonts";
import AuthProvider from "@/app/providers/SessionProvider";
import "@/app/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={workSans.variable}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}

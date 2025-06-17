import type { Metadata } from "next";
import "@/app/globals.css";
import Navbar from "@/app/components/navbar";

export const metadata: Metadata = {
  title: "Your App Title",
  description: "Page description here",
};

export default function GroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

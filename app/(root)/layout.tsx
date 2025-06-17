import type { Metadata } from "next";
import Navbar from "@/app/components/navbar";
import "../globals.css";

export const metadata: Metadata = {
  title: "YC App",
  description: "Pitch, Vote and Grow",
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
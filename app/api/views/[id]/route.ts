import { writeClient } from "@/sanity/lib/write-client";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    await writeClient.patch(id).inc({ views: 1 }).commit();

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to update views:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

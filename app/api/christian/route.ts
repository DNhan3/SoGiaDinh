import { NextResponse } from "next/server";
import { getChristianData } from "@/lib/christianData";


export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const ccode = parseInt(searchParams.get("ccode") || "0");
  const data = getChristianData(ccode);
  return NextResponse.json(data);
}
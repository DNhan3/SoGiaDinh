import { NextResponse } from "next/server";
import { getChristianMarriagesData } from "@/lib/christianMarriageData";


export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const ccode = parseInt(searchParams.get("ccode") || "0");
  const data = getChristianMarriagesData(ccode);
  if (!data[0]) {
    return NextResponse.json({ error: "Data not found" }, { status: 404 });
  }
  return NextResponse.json(data);
}
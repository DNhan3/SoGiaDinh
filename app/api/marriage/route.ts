import { NextResponse } from "next/server";
import { getMarriageData } from "@/lib/familyMarriageData";


export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const mcode = searchParams.get("mcode") || "0";
  const data = getMarriageData(parseInt(mcode));
  if (!data) {
    return NextResponse.json({ error: "Marriage data not found" }, { status: 404 });
  }
  return NextResponse.json(data);   
}
import { NextResponse } from "next/server";
import { getFamilyData } from "@/lib/familyData";


export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const fcode = (searchParams.get("fcode") ?? "00-000.htm")
    .replace(/\.htm$/, "");
  
  const data = getFamilyData(fcode);
  return NextResponse.json(data);
}
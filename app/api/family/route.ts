import { NextResponse } from "next/server";
import { getFamilyData } from "@/lib/familyData";


export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const fcode = (searchParams.get("fcode") ?? "01-004PR.htm")
    .replace(/\.htm$/, "")
    .replace(/^(\d{2}-\d{3})([A-Z]{2})$/, "$1/$2");
  
  const data = getFamilyData(fcode);
  return NextResponse.json(data);
}
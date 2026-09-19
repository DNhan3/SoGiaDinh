import { NextResponse } from "next/server";
import { getChristianIdsInFamily } from "@/lib/familyMemberData";


export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const fncode = parseInt(searchParams.get("fncode") || "0");
  const data = getChristianIdsInFamily(fncode);
  return NextResponse.json(data);
}
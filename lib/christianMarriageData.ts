// lib/familyMember.ts
import { ChristianMarriageData } from "@/types/jsFamily";
import fs from "fs";
import path from "path";


// Read JSON ONCE when this module is initialized
const filePath = path.join(process.cwd(), "data", "GiaoDanHonPhoi.json");

const familyMemberMarriageData: ChristianMarriageData[] = JSON.parse(
  fs.readFileSync(filePath, "utf-8")
);

export function getChristianMarriagesData(
    MaGiaoDan: number,
): ChristianMarriageData[] {
    
    return familyMemberMarriageData.filter((member) => member.MaGiaoDan === MaGiaoDan)
}

// lib/familyMember.ts
import { FamilyMemberData } from "@/types/jsFamily";
import fs from "fs";
import path from "path";


// Read JSON ONCE when this module is initialized
const filePath = path.join(process.cwd(), "data", "ThanhVienGiaDinh.json");

const familyMemberData: FamilyMemberData[] = JSON.parse(
  fs.readFileSync(filePath, "utf-8")
);

export function getChristianIdsInFamily(
	MaGiaDinh: number,
): FamilyMemberData[] {
	return familyMemberData.filter((member) => member.MaGiaDinh === MaGiaDinh)
}

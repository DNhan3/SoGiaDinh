// lib/familyMarriageData.ts

import fs from "fs";
import path from "path";
import { FamilyMarriageData } from "@/types/jsFamily";

// Read JSON ONCE when this module is initialized
const filePath = path.join(process.cwd(), "data", "HonPhoi.json");

const familyMarriageData: FamilyMarriageData[] = JSON.parse(
  fs.readFileSync(filePath, "utf-8")
);

export function getMarriageData(
  mcode: number
): FamilyMarriageData[] {
  return familyMarriageData.filter((marriage) => marriage.MaHonPhoi === mcode);
}
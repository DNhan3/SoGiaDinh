// lib/familyData.ts

import { FamilyData } from "@/types/jsFamily";
import fs from "fs";
import path from "path";


// Read JSON ONCE when this module is initialized
const filePath = path.join(process.cwd(), "data", "GiaDinh.json");

const familyData: FamilyData[] = JSON.parse(
  fs.readFileSync(filePath, "utf-8")
);

// This function no longer reads the file
export function getFamilyData(maGiaDinh: string) {
  return familyData.filter(
    (family) => family.MaGiaDinhRieng === maGiaDinh
  );
}
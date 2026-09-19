// lib/familyData.ts

import { FamilyData } from "@/types/jsFamily";
import fs from "fs";
import path from "path";


// Read JSON ONCE when this module is initialized
const filePath = path.join(process.cwd(), "data", "GiaDinh.json");

const familyData: FamilyData[] = JSON.parse(
  fs.readFileSync(filePath, "utf-8")
);

function normalizeMaGiaDinh(maGiaDinh: string): string {
  // Normalize the family code to match the format in the JSON data
  //01->PR, 02->GA, 03->ANT, 04->GS, 05->GS, 06->MATT
  maGiaDinh =maGiaDinh.replace(/\.htm$/, "").replace(/^(\d{2}-\d{3})([A-Z]{2})$/, "$1/$2");
  switch (maGiaDinh[1]) {
    case "1":
      maGiaDinh += "/PR";
      break;
    case "2":
      maGiaDinh += "/GA";
      break;
    case "3":
      maGiaDinh += "/ANT";
      break;
    case "4":
      maGiaDinh += "/GS";
      break;
    case "5":
      maGiaDinh += "/GS";
      break;
    case "6":
      maGiaDinh += "/MATT";
      break;
    default:
      break;
  }
  return maGiaDinh;
}



// This function no longer reads the file
export function getFamilyData(maGiaDinh: string) {
  const normalizedMaGiaDinh = normalizeMaGiaDinh(maGiaDinh);

  return familyData.filter(
    (family) => family.MaGiaDinhRieng === normalizedMaGiaDinh
  );
}
// lib/christianData.ts
import { ChristianData } from "@/types/jsFamily";
import fs from "fs";
import path from "path";

// Read JSON ONCE when this module is initialized
const filePath = path.join(process.cwd(), "data", "GiaoDan.json");

const christianData: ChristianData[] = JSON.parse(
  fs.readFileSync(filePath, "utf-8")
);

// This function no longer reads the file
export function getChristianData(MaGiaoDan: number) {
  return christianData.filter(
    (christian) => christian.MaGiaoDan === MaGiaoDan
  );
}
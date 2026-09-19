import FamilyRecord from "@/components/FamilyRecord";
import familyData from "@/data/family.json";

export default function Home() {
  return <FamilyRecord data={familyData} />;
}
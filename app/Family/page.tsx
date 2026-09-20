import FamilyRecord from "@/components/FamilyRecord";
import { getPageData } from "@/services/familyService";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Sổ Gia Đình",
  icons: {
    icon: "/logo.png",
  },
  description: "Sổ Gia Đình Công Giáo",
};
type PageProps = {
  searchParams: Promise<{
    file?: string;
  }>;
};


export default async function Family({ searchParams }: PageProps) {
  const params = await searchParams;

  if (!params.file) {
    notFound();
  }

  const fData = await getPageData(params.file);
  if (!fData) {
    notFound();
  }

  return <FamilyRecord data={fData} />;
}
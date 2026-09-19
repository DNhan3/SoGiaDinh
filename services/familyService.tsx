import { FamilyData, ChristianData, FamilyMemberData, FamilyMarriageData, ChristianMarriageData, NormalizedFamilyMember } from "@/types/jsFamily";
import { createFamilyData } from "./jsPageDataService";
import { normalizeFamilyMember } from "./familyMemberService";

async function getFData(fcode: string): Promise<FamilyData[]> {
  const fResponse = await fetch(
    `${process.env.API_BASE_URL}/api/family?fcode=${fcode}`,
  );

  if (!fResponse.ok) {
    throw new Error("Failed to fetch data");
  }

  return fResponse.json();
}

async function getFMemData(fncode: number): Promise<FamilyMemberData[]> {
  const fMemResponse = await fetch(
    `${process.env.API_BASE_URL}/api/familyMembers?fncode=${fncode}`,
  );

  if (!fMemResponse.ok) {
    throw new Error("Failed to fetch data");
  }

  return fMemResponse.json();
}

async function getCData(ccode: number): Promise<ChristianData[]> {
  const cResponse = await fetch(
    `${process.env.API_BASE_URL}/api/christian?ccode=${ccode}`,
  );

  if (!cResponse.ok) {
    throw new Error("Failed to fetch data");
  }

  return cResponse.json();
}

async function getChristianMarriagesData(ccode: number): Promise<ChristianMarriageData[]> {
  const cResponse = await fetch(
    `${process.env.API_BASE_URL}/api/christianMarriage?ccode=${ccode}`,
  );

  if (!cResponse.ok) {
    throw new Error("Failed to fetch data");
  }

  return cResponse.json();
}

async function getMarriageData(mcode: number): Promise<FamilyMarriageData[]> {
  const mResponse = await fetch(
    `${process.env.API_BASE_URL}/api/marriage?mcode=${mcode}`,
  );

  if (!mResponse.ok) {
    throw new Error("Failed to fetch data");
  }

  return mResponse.json();
}


function translateMaGiaoHo(maGiaoHo: number): string {
  switch (maGiaoHo) {
    case 1:
      return "THÁNH PHÊRÔ";
    default:
      return "Unknown Parish";
  }
}

export async function getPageData(fcode: string) {
  const fData = await getFData(fcode);
  if (fData.length === 0) {
    return null;
  }

  const maGiaDinh = fData[0]?.MaGiaDinh;
  const fMemData: FamilyMemberData[] = await getFMemData(maGiaDinh);
  const cData: ChristianData[] = [];
  for (const member of fMemData) {
    cData.push(...(await getCData(member.MaGiaoDan)));
  }


  // console.log("fData:", fData);
  // console.log("fMemData:", fMemData);
  // console.log("cData:", cData);
  // console.log("marriageData:", marriageData);

  let husband: ChristianData | null = null;
  let wife: ChristianData | null = null;


  for (const member of fMemData) {
    if (member.VaiTro === 0) {
      husband = cData.find((c) => c.MaGiaoDan === member.MaGiaoDan) || null;
    }
    if (member.VaiTro === 1) {
      wife =  cData.find((c) => c.MaGiaoDan === member.MaGiaoDan) || null;
    }
  }

  if (!husband || !wife) {
    throw new Error("Husband or wife not found in family members");
  }

  const husbandName = husband?.HoTen || "";
  const wifeName = wife?.HoTen || "";
  const husbandParents = "Con Ông " + (husband?.HoTenCha || "") + " và Bà " + (husband?.HoTenMe || "");
  const wifeParents = "Con Ông " + (wife?.HoTenCha || "") + " và Bà " + (wife?.HoTenMe || "");

  console.log("Husband:", husbandParents);
  console.log("Wife:", wifeParents);

  const christianMarriage = await getChristianMarriagesData(husband.MaGiaoDan);

  const marriage = await getMarriageData(christianMarriage[0]?.MaHonPhoi || 0);

  const members: NormalizedFamilyMember[] = fMemData.map((member) => {
    const christianData = cData.find((c) => c.MaGiaoDan === member.MaGiaoDan);
    if (!christianData) {
      throw new Error(`Christian data not found for member ${member.MaGiaoDan}`);
    }

    return {
      ...normalizeFamilyMember(christianData, member.VaiTro === 0 ? "Chồng" : member.VaiTro === 1 ? "Vợ" : "Con"),
    };
  });

  return createFamilyData(
    fData[0]?.MaGiaDinhRieng, //familyCode
    fData[0]?.TenGiaDinh, //grandparentsName
    translateMaGiaoHo(fData[0]?.MaGiaoHo), //christianCommunity

    husbandName,
    husbandParents,

    wifeName,
    wifeParents,

    marriage[0].LinhMucChung, //marriagePriest
    marriage[0].NoiHonPhoi, //marriageDate
    marriage[0].NguoiChung1, //witness1
    marriage[0].NguoiChung2, //witness2

    fData[0]?.DiaChi, //familyAddress
    fData[0]?.DienThoai, //familyPhone
    husband?.NgheNghiep + ", " + wife?.NgheNghiep, //occupation

    members.sort((a, b) => a.code - b.code) //sortedMembers
  );
}
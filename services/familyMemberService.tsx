import { ChristianData } from "@/types/jsFamily";

import { ChristianMarriageData, NormalizedFamilyMember } from "@/types/jsFamily";






const text = (record: ChristianData, key: keyof ChristianData): string => {
	const value = record[key];
	return value == null ? "" : String(value).trim();
};

const event = (
	date: string,
	place: string,
): { date: string; place?: string } | undefined => {
	if (!date && !place) return undefined;
	return place ? { date, place } : { date };
};

/** Normalize a record returned by the parish API into a family-member model. */
export function normalizeFamilyMember(
	record: ChristianData,
	relationship?: string,
): NormalizedFamilyMember {
	const baptism = event(text(record, "NgayRuaToi"), text(record, "NoiRuaToi"));
	const firstCommunion = event(
		text(record, "NgayRuocLe"),
		text(record, "NoiRuocLe"),
	);
	const marriage = event(
		text(record, "NgayGLHN1") || text(record, "NgayGLHN2"),
		text(record, "NoiGLHN"),
	);
	const memberRelationship = relationship;

	return {
		code: Number(record.MaGiaoDan ?? 0),
		christianName: text(record, "TenThanh"),
		fullName: text(record, "HoTen"),
		birthDate: text(record, "NgaySinh"),
		birthPlace: text(record, "NoiSinh"),
		...(baptism ? { baptism } : {}),
		...(firstCommunion ? { firstCommunion } : {}),
		...(marriage ? { marriage } : {}),
		...(memberRelationship ? { relationship: memberRelationship } : {}),
	};
}

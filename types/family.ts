export interface SacramentRecord {
  date?: string;
  place?: string;
}

export interface FamilyMember {
  code: number;
  christianName: string;
  fullName: string;
  birthDate?: string;
  birthPlace?: string;

  baptism?: SacramentRecord;
  firstCommunion?: SacramentRecord;
  confirmation?: SacramentRecord;
  communion?: SacramentRecord;
  marriage?: SacramentRecord;
  death?: SacramentRecord;

  baptismPriest?: string;
  confirmationBishop?: string;

  baptismGodparent?: string;
  confirmationGodparent?: string;

  relationship?: string;
}

export interface FamilyRecordData {
  parish: {
    name: string;
    deanery: string;
    diocese: string;
    address: string;
    phone?: string;
    website?: string;
    email?: string;
  };

  family: {
    code: string;
    grandparentsName?: string;
    christianCommunity?: string;

    husband?: {
      name: string;
      parents?: string;
    };

    wife?: {
      name: string;
      parents?: string;
    };

    marriage?: {
      priest?: string;
      church?: string;
      witness1?: string;
      witness2?: string;
    };

    address?: string;
    phone?: string;
    occupation?: string;
  };

  members: FamilyMember[];

  footer: {
    memberCount?: number;
    date?: string;
    parishPriest?: string;
  };
}

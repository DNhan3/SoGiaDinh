export function createFamilyData(
  familyCode: string,
  grandparentsName: string,
  christianCommunity: string,

  husbandName: string,
  husbandParents: string,

  wifeName: string,
  wifeParents: string,

  marriagePriest: string,
  marriageChurch: string,
  witness1: string,
  witness2: string,

  familyAddress: string,
  familyPhone: string,
  occupation: string,

  members: any[],
) {
  return {
    parish: {
        name: "GIÁO XỨ ĐỒNG TIẾN",
        deanery: "Giáo Hạt Hàm Tân",
        diocese: "Giáo Phận Phan Thiết",
        address: "587 Thống Nhất - Kp.4 - P.Tân An - Tx.Lagi - Bình Thuận",
        phone: "02523706787",
        website: "giaoxudongtien.com",
        email: "petnguyenvanquang@gmail.com"
    },

    family: {
      code: familyCode,
      grandparentsName: grandparentsName,
      christianCommunity: christianCommunity,

      husband: {
        name: husbandName,
        parents: husbandParents,
      },

      wife: {
        name: wifeName,
        parents: wifeParents,
      },

      marriage: {
        priest: marriagePriest,
        church: marriageChurch,
        witness1: witness1,
        witness2: witness2,
      },

      address: familyAddress,
      phone: familyPhone,
      occupation: occupation,
    },

    members: members,

    footer: {
      memberCount: members.length,
      parishPriest: "Phêrô NGUYỄN VĂN QUANG",
    },
  };
}
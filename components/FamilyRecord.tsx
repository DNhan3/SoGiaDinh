import { FamilyRecordData, FamilyMember } from "@/types/family";

interface Props {
  data: FamilyRecordData;
}

function SacramentCell({
  info1: date,
  info2: place
}: {
  info1?: string;
  info2?: string;
}) {
  if (!date && !place) {
    return <td className="empty-cell"></td>;
  }

  return (
    <td>
      {(date && <div>{date}</div>) || <br></br>}
      {(place && <div>{place}</div>) || <br></br>}
    </td>
  );
}

export default function FamilyRecord({ data }: Props) {
  const { parish, family, members, footer } = data;

  return (
    <main className="page">
      {/* HEADER */}
      <header className="parish-header">
        <div className="parish-name">
          {parish.name}
        </div>

        <div>
          {parish.deanery} – {parish.diocese}
        </div>

        <div>{parish.address}</div>

        <div className="contact">
          ĐT: {parish.phone}
          {"; "}
          Web: {parish.website}
          {"; "}
          Email: {parish.email}
        </div>
      </header>

      <h1>PHIẾU GIA ĐÌNH CÔNG GIÁO</h1>

      {/* FAMILY INFORMATION */}
      <section className="family-info">

        <div className="family-line">
          <span>
            <strong>MSGĐ:</strong>{" "}{family.code}
          </span>

          <span>
            <strong>ÔNG BÀ:</strong>{" "}
            {family.grandparentsName}
          </span>

          <span>
            <strong>{family.christianCommunity}</strong>
          </span>
        </div>

        <div className="parents-row">

          <div>
            <strong>Chồng:</strong>{" "}
            {family.husband?.parents}
          </div>

          <div>
            <strong>Vợ:</strong>{" "}
            {family.wife?.parents}
          </div>

        </div>

        <div className="marriage-info">

          <span>
            <strong>Linh Mục Chứng Hôn:</strong>{" "}
            {family.marriage?.priest}
          </span>

          <span>
            <strong>Tại Nhà Thờ:</strong>{" "}
            {family.marriage?.church}
          </span>

        </div>

        <div className="witness-row">

          <span>
            <strong>Người Chứng 1:</strong>{" "}
            {family.marriage?.witness1}
          </span>

          <span>
            <strong>Người Chứng 2:</strong>{" "}
            {family.marriage?.witness2}
          </span>

        </div>

        <div className="contact-info">

          <span>
            <strong>Địa chỉ:</strong>{" "}
            {family.address}
          </span>

          <span>
            <strong>Điện thoại:</strong>{" "}
            {family.phone}
          </span>

          <span>
            <strong>Nghề nghiệp:</strong>{" "}
            {family.occupation}
          </span>

        </div>

      </section>

      {/* MEMBER TABLE */}
      <section className="member-table-wrapper">

        <table className="member-table center">

          <thead>
            <tr>

              <th className="extra-narrow">
                MÃ<br />GD
              </th>

              <th className="extra-wide">
                TÊN THÁNH<br />
                HỌ VÀ TÊN
              </th>

              <th className="narrow">
                NĂM SINH
                <br />
                TẠI
              </th>

              <th className="narrow">
                RỬA TỘI
                <br />
                TẠI
              </th>

              <th className="narrow">
                RLLĐ
                <br />
                TẠI
              </th>

              <th className="narrow">
                THÊM SỨC
                <br />
                TẠI
              </th>

              <th className="narrow">
                RLBĐ
                <br />
                TẠI
              </th>

              <th className="narrow">
                HÔN PHỐI
                <br />
                TẠI
              </th>

              <th className="narrow">
                QUA ĐỜI
                <br />
                TẠI
              </th>

              <th>
                LM RỬA TỘI
                <br />
                ĐGM THÊM SỨC
              </th>

              <th>
                ĐỠ ĐẦU RỬA TỘI
                <br />
                ĐỠ ĐẦU THÊM SỨC
              </th>

              <th className="narrow">
                LIÊN HỆ
              </th>

            </tr>
          </thead>

          <tbody>

            {members.map((member: FamilyMember) => (

              <tr key={member.code}>

                <td className="center">
                  {member.code}
                </td>

                <td className="name-cell">
                  <div>
                    {member.christianName}
                  </div>

                  <strong>
                    {member.fullName}
                  </strong>
                </td>

                <td>
                  <div>{member.birthDate}</div>
                  <div>{member.birthPlace}</div>
                </td>

                <SacramentCell
                  info1={member.baptism?.date}
                  info2={member.baptism?.place}
                />

                <SacramentCell
                  info1={member.firstCommunion?.date}
                  info2={member.firstCommunion?.place}
                />

                <SacramentCell
                  info1={member.confirmation?.date}
                  info2={member.confirmation?.place}
                />

                <SacramentCell
                  info1={member.communion?.date}
                  info2={member.communion?.place}
                />

                <SacramentCell
                  info1={member.marriage?.date}
                  info2={member.marriage?.place}
                />

                <SacramentCell
                  info1={member.death?.date}
                  info2={member.death?.place}
                />


                <SacramentCell
                  info1={member.baptismPriest}
                  info2={member.confirmationBishop}
                />


                <SacramentCell
                  info1={member.baptismGodparent}
                  info2={member.confirmationGodparent}
                />

                <td className="center">
                  {member.relationship}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </section>

      {/* FOOTER */}
      <footer className="record-footer">

        <div>
          (Gia đình gồm: {footer.memberCount} nhân khẩu)
        </div>
        

        <div className="priest-signature">
          <div>Linh mục Chánh Xứ</div>

          <strong>
            {footer.parishPriest}
          </strong>
        </div>

      </footer>

    </main>
  );
}
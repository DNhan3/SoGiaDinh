export interface FamilyData{
    MaGiaDinh: number;
    MaGiaoHo: number;
    TenGiaDinh: string;
    GhiChu: string | null;
    DienThoai: string;
    DiaChi: string;
    DaXoa: boolean;
    UpdateDate: string | null;
    DaChuyenXu: boolean;
    NgayChuyen: string | null;
    NoiChuyen: string | null;
    GiaDinhAo: boolean;
    MaNhanDang: string;
    MaGiaDinhRieng: string;
    AnhDaiDien: string | null;
    SoHoKhau: string | null;
    DienGiaDinh: string | null;
}

export interface ChristianData{
    MaGiaoDan: number;
    MaGiaDinh: number;
    MaGiaoHo: number;
    HoTen: string;
    Phai: string;
    TenThanh: string;
    NgaySinh?: string;
    NoiSinh?: string;
    SoRuaToi?: string;
    NgayRuaToi?: string;
    NoiRuaToi?: string;
    ChaRuaToi?: string;
    NguoiDoDauRuaToi?: string;
    NgayRuocLe?: string;
    NoiRuocLe?: string;
    ChaRuocLe?: string;
    SoThemSuc?: string;
    NgayThemSuc?: string;
    NoiThemSuc?: string;
    ChaThemSuc?: string;
    NguoiDoDauThemSuc?: string;
    TrinhDoVanHoa?: string;
    NgheNghiep?: string;
    ConHoc?: boolean;
    QuaDoi?: boolean;
    NgayQuaDoi?: string | null;
    DienThoai?: string;
    Email?: string;
    DaXoa: boolean;
    GhiChu?: string;
    UpdateDate?: string;
    SoRuocLe?: string;
    HoTenCha?: string;
    HoTenMe?: string;
    DaCoGiaDinh: boolean;
    GiaoDanAo: boolean;
    TanTong: boolean;
    MaNhanDang?: string,
    ThuocGiaoXu?: string,
    ThuocGiaoPhan?: string,
    DiaChi?: string,
    DanToc?: string,
    NoiQuaDoi?: string,
    SoAnTang?: string,
    NoiAnTang?: string,
    AnhDaiDien: string | null,
    CMND?: string,
    TrinhDoChuyenMon?: string,
    BietNgoaiNgu?: string,
    NgayXucDau?: string,
    NguoiXucDau?: string,
    TinhTrangXucDau?: string,
    GhiChuXucDau?: string,
    NgayBD1?: string,
    NoiBD1?: string,
    NgayBD2?: string,
    NoiBD2?: string,
    NgayTHVaoDoi?: string,
    NoiTHVaoDoi?: string,
    NgayGLHN1?: string,
    NgayGLHN2?: string,
    NoiGLHN?: string | null,
    NguoiChungNhanGLHN?: string,
    XepLoaiGLHN?: string | null
}

export interface FamilyMemberData{
    MaGiaDinh: number;
    MaGiaoDan: number;
    VaiTro: number;
    ChuHo: boolean;
}

export interface FamilyMarriageData{
    MaHonPhoi: number;
    TenHonPhoi: string;
    SoHonPhoi: number;
    NoiHonPhoi: string;
    NgayHonPhoi: string;
    LinhMucChung: string;
    NguoiChung1: string;
    NguoiChung2: string;
    CachThucHonPhoi: string;
    GhiChu: string;
    MaNhanDang: string;
    UpdateDate: string;
} 

export interface ChristianMarriageData{
    MaGiaoDan: number,
    MaHonPhoi: number,
    SoThuTu: number,
}

export interface NormalizedFamilyMember {
	code: number;
	christianName: string;
	fullName: string;
	birthDate: string;
	birthPlace: string;
	baptism?: { date: string; place?: string };
	firstCommunion?: { date: string; place?: string };
	marriage?: { date: string; place?: string };
	relationship?: string;
};

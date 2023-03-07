//TongQuan
import ThongKe from '~/page/TongQuan/ThongKe';
import DanhSachNhanVien from '~/page/TongQuan/DanhSachNhanVien';
import DanhSachTaiKhoan from '~/page/TongQuan/DanhSachTaiKhoan';


// DanhSach
import PhongBan from '~/page/DanhSach/PhongBan';
import ChucVu from '~/page/DanhSach/ChucVu';
import TrinhDo from '~/page/DanhSach/TrinhDo';
import ChuyenMon from '~/page/DanhSach/ChuyenMon';
import HopDong from '~/page/DanhSach/HopDong';
import BangCap from '~/page/DanhSach/BangCap';
import LoaiNhanVien from '~/page/DanhSach/LoaiNhanVien';
// ChamCong
import DanhSachChamCong from '~/page/ChamCong/DanhSachChamCong';
// BangLuong
import BangLuong from '~/page/BangLuong/BangLuong';

// HeThong
import ThietLap from '~/page/HeThong/ThietLap';
import CaiDatGioCong from '~/page/HeThong/CaiDatGioCong';

//Login
import Login from '~/page/Login';








// Public thường dùng trước khi đăng nhập
const publicRoutes = [
    // Tong Quan
    { path: '/', component: ThongKe },
    { path: '/danhsachnhanvien', component: DanhSachNhanVien },
    { path: '/danhsachtaikhoan', component: DanhSachTaiKhoan },

    // DanhSach
    { path: '/phongban', component: PhongBan },
    { path: '/chucvu', component: ChucVu },
    { path: '/trinhdo', component: TrinhDo },
    { path: '/chuyenmon', component: ChuyenMon },
    { path: '/bangcap', component: BangCap },
    { path: '/hopdong', component: HopDong },
    { path: '/loainhanvien', component: LoaiNhanVien },

    // Cham Cong
    { path: '/danhsachchamcong', component: DanhSachChamCong },

    // BangLuong
    { path: '/bangluong', component: BangLuong },

    { path: '/thietlaphethongnhansu', component: ThietLap },
    { path: '/caidatgiocong', component: CaiDatGioCong },

];

const privateRoutes = [
];

export { publicRoutes, privateRoutes };

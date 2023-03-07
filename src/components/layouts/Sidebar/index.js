import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
                <li className="nav-item nav-category">Tổng quan</li>
                <li className="nav-item">
                    <a
                        className="nav-link"
                        data-bs-toggle="collapse"
                        href="#tables1"
                        aria-expanded="false"
                        aria-controls="tables1"
                    >
                        <i className="mdi mdi-grid-large menu-icon" />
                        <span className="menu-title">Tổng quan</span>
                        <i className="menu-arrow" />
                    </a>
                    <div className="collapse" id="tables1">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    Thống kê
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/danhsachnhanvien">
                                    Danh sách Nhân viên
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/danhsachtaikhoan">
                                    Danh sách Tài khoản
                                </Link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="nav-item nav-category">Nhân viên</li>
                <li className="nav-item">
                    <a
                        className="nav-link"
                        data-bs-toggle="collapse"
                        href="#tables"
                        aria-expanded="false"
                        aria-controls="tables"
                    >
                        <i className="menu-icon mdi mdi-table" />
                        <span className="menu-title">Danh sách</span>
                        <i className="menu-arrow" />
                    </a>
                    <div className="collapse" id="tables">
                        <ul className="nav flex-column sub-menu">
                        <li className="nav-item">
                                <Link className="nav-link" to="/phongban">
                                    Phòng ban
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/chucvu">
                                    Chức vụ
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/trinhdo">
                                    Trình độ
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/bangcap">
                                    Bằng cấp
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/chuyenmon">
                                    Chuyên môn
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/hopdong">
                                    Hợp đồng
                                </Link>
                            </li>
                            
                        </ul>
                    </div>
                </li>

                <li className="nav-item nav-category">Chấm công</li>
                <li className="nav-item">
                    <a
                        className="nav-link"
                        data-bs-toggle="collapse"
                        href="#form-elements1"
                        aria-expanded="true"
                        aria-controls="form-elements1"
                    >
                        <i className="menu-icon mdi mdi-card-text-outline" />
                        <span className="menu-title">Quản lý Chấm công</span>
                        <i className="menu-arrow" />
                    </a>
                    <div className="collapse show" id="form-elements1">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item">
                                <Link className="nav-link" to="/danhsachchamcong">
                                    Danh sách Chấm công
                                </Link>
                            </li>
                        </ul>
                    </div>
                </li>

                <li className="nav-item nav-category">Bảng lương</li>
                <li className="nav-item">
                    <a
                        className="nav-link"
                        data-bs-toggle="collapse"
                        href="#form-elements"
                        aria-expanded="true"
                        aria-controls="form-elements"
                    >
                        <i className="menu-icon mdi mdi-card-text-outline" />
                        <span className="menu-title">Quản lý lương</span>
                        <i className="menu-arrow" />
                    </a>
                    <div className="collapse show" id="form-elements">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item">
                                <Link className="nav-link" to='/bangluong'>
                                    Bảng lương
                                </Link>
                            </li>
                        </ul>
                    </div>
                </li>

                <li className="nav-item nav-category">Hệ Thống</li>
                <li className="nav-item">
                    <a
                        className="nav-link"
                        data-bs-toggle="collapse"
                        href="#charts"
                        aria-expanded="false"
                        aria-controls="charts"
                    >
                        <i className="menu-icon mdi mdi-chart-line" />
                        <span className="menu-title">Hệ thống</span>
                        <i className="menu-arrow" />
                    </a>
                    <div className="collapse" id="charts">
                        <ul className="nav flex-column sub-menu">
                        <li className="nav-item">
                                <Link className="nav-link" to="/caidatgiocong">
                                    Cài đặt giờ công
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/thietlaphethongnhansu">
                                    Thiết lập hệ thống nhân sự
                                </Link>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default Sidebar;
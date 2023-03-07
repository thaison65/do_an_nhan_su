import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
//import { useDispatch, useSelector } from 'react-redux';
import Table from '~/components/layouts/Table';
import DialogAddNV from '~/components/layouts/DialogTableEmployee/DialogAddNV';
//import { nhanViensSelector } from '~/redux/selectors';



function DanhSachNhanVien() {


    const listTitles = {
        id: 'Mã nhân viên',
        name: 'Tên nhân viên',
        trangthai: 'Trạng thái',
        email: 'Email',
        cccd: 'CCCD',
        date: 'Ngày sinh',
        sdt: 'Số điện thoại',
        ngaykyhopdong: 'Ngày ký hợp đồng',
        tk: 'Số tài khoản',
        phongban: 'Phòng ban',
        chucvu: 'Chức vụ',
        img: 'Hình ảnh',
    };

    const [modalShow, setModalShow] = useState(false);
    const [rdoTrangThai, setRdoTrangThai] = useState('Tất cả');
    const [rdoTimKiem, setRdoTimKiem] = useState('Mã nhân viên');

    const [posts, setPosts] = useState([]);

    const baseURL = 'http://localhost:8080/api/auth/nhanviens';

    useEffect(() => {
        const getPost = async () => {
            const { data: res } = await axios.get(baseURL)
            setPosts(res);
        };
        getPost();
    }, []);

    if (!posts) return null;



    const handleTrangThai = () => {
        if (rdoTrangThai === 'Đang làm việc') {
            console.log('Đang làm nè')
            const dataT = getAlldata();
            let listdata = [];
            dataT.map((data) => {
                if(data.trangthai === true) {
                    listdata.push(data);
                }
            })
            return listdata;
        }
        else if(rdoTrangThai === 'Nghỉ'){
            console.log('Nghỉ')
            const dataT = getAlldata();
            let listdata = [];
            dataT.map((data) => {
                if(data.trangthai === false) {
                    listdata.push(data);
                }
            })
        }
        else{
            return getAlldata();
        }
    }

    const getAlldata = () => {
        let datas = [];
        posts.map((value) => {
            const data = {
                id: value.maNV,
                name: value.tenNhanSu,
                trangthai: value.trangThai,
                email: value.email,
                cccd: value.cccd,
                ngaysinh: value.ngaySinh,
                sdt: value.sdt,
                ngaykyhopdong: value.ngayKyHopDong,
                tk: value.soTK,
                phongban: value.phongBan.tenPB ? value.phongBan.tenPB : null,
                chucvu: value.chucVu.tenCV ? value.chucVu.tenCV : null,
                img: value.hinhAnh,
                qrcode: value.qrCode
            };
            datas = [...datas, data];
        });
        return datas;
    }

    let listdata = handleTrangThai();
    

    return (
        <section className="content-wrapper">
            <div className="row">
                <div className="mb-2 row">
                    <Form className="col-sm-6 my-2">
                        <Form.Group controlId="controlIDTrangThai">
                            <div className="row align-items-center">
                                <Form.Label className="col-sm-3 p-0 h5">Trạng thái</Form.Label>
                                {['Tất cả', 'Đang làm việc', 'Nghỉ'].map((key, index) => {
                                    return (
                                        <div key={index} className="form-check col-sm-3">
                                            <label className="form-check-label m-0">
                                                <input
                                                    type="radio"
                                                    className="form-check-input"
                                                    name="trangthai"
                                                    id={'trangthai' + index}
                                                    value={key}
                                                    checked={rdoTrangThai === key}
                                                    onChange={(e) => setRdoTrangThai(e.target.value)}
                                                />
                                                {key}
                                                <i className="input-helper" />
                                            </label>
                                        </div>
                                    );
                                })}
                            </div>
                        </Form.Group>
                    </Form>
                    <Form className="col-sm-12 row my-2">
                        <Form.Group controlId="controlIDTimKiem" className="col-sm-6">
                            <div className="row align-items-center">
                                <Form.Label className="col-sm-3 p-0 h5">Tìm kiếm</Form.Label>
                                {['Mã nhân viên', 'Tên nhân viên', 'Phòng ban'].map((key, index) => {
                                    return (
                                        <div key={index} className="form-check col-sm-3">
                                            <label className="form-check-label m-0">
                                                <input
                                                    type="radio"
                                                    className="form-check-input"
                                                    name="timkiem"
                                                    id={'timkiem' + index}
                                                    value={key}
                                                    checked={rdoTimKiem === key}
                                                    onChange={e => setRdoTimKiem(e.currentTarget.value)}
                                                />
                                                {key}
                                                <i className="input-helper" />
                                            </label>
                                        </div>
                                    );
                                })}
                            </div>
                        </Form.Group>
                        <Form.Group className="col-sm-5">
                            <div className="input-group">
                                <Form.Control type="text" placeholder={rdoTimKiem} aria-label="Recipient's username" />
                                <div className="input-group-append">
                                    <Button
                                        variant="outline-primary btn-sm"
                                        className="ms-2"
                                    >
                                        Tìm kiếm
                                    </Button>
                                </div>
                            </div>
                        </Form.Group>
                    </Form>
                    <div className="col-sm-12">
                        <Button
                            variant="outline-primary"
                            className="ms-auto col-sm-2 float-end m-2"
                            onClick={() => setModalShow(true)}
                        >
                            Thêm nhân viên
                        </Button>
                        <Button type="button" variant="outline-danger" className="btn-icon-text m-2 float-end">
                            Xuất/In
                            <i className="ti-printer btn-icon-append" />
                        </Button>
                    </div>
                    <DialogAddNV show={modalShow} onHide={() => setModalShow(false)} />
                </div>
                <Table title="Danh Sách nhân viên" listTitles={listTitles} listdata={listdata} del='http://localhost:8080/api/auth/deleteNhanVien' hideButton />
            </div>
        </section>
    );
}

export default DanhSachNhanVien;

import React from 'react';
import { useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';
import { Button, Form, InputGroup } from 'react-bootstrap';
import Table from '~/components/layouts/Table';




const listTitles = {
    id: 'Mã nhân viên',
    name: 'Tên nhân viên',
    manv: 'Mã nhân viên',
    trangthai: 'Trạng thái',
    date: 'Ngày',
    giovao: 'Giờ vào',
    giora: 'Giờ ra',
    maloaicong: 'Loại công',
    phongban: 'Phòng ban',
    chucvu: 'Chức vụ'
};

function DanhSachChamCong() {
    const [rdoTimKiem, setRdoTimKiem] = useState('Mã nhân viên');

    const [posts, setPosts] = useState([]);


    const baseURL = 'http://localhost:8080/api/auth/bangCongs';

    useEffect(() => {
        const getPost = async () => {
            const { data: res } = await axios.get(baseURL)
            setPosts(res);
        };
        getPost();
    }, []);

    if (!posts) return null;

    const getAlldata = () => {
        let datas = [];
        posts.map((value) => {
            value.ngay = moment().format('DD-MM-YYYY')
            const data = {
                id: value.maBC,
                name: value.nv[0].tenNhanSu,
                manv: value.nv[0].maNV,
                trangthai: value.nv[0].trangThai,
                date: value.ngay,
                giovao: value.gioVao,
                giora: value.gioRa,
                maloaicong: value.maLoaiCong,
                phongban: value.nv[0].phongBan.tenPB,
                chucvu: value.nv[0].chucVu.tenCV
            };
            datas = [...datas, data];
        });
        return datas;
    }

    let listdata = getAlldata();

    return (
        <section className="content-wrapper">
            <div className="row">
                <div className="mb-2">
                    <Form className="row">
                        <h5 className="h5 col-sm-3">Tìm kiếm theo ngày</h5>
                        <Form.Group controlId="dateTimeID1" className="col-sm-3">
                            <InputGroup id="datepicker-popup" className="align-items-center">
                                <Form.Label>Từ ngày</Form.Label>
                                <Form.Control type="date" className="ms-2" />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group controlId="dateTimeID2" className="col-sm-3">
                            <InputGroup id="datepicker-popup" className="align-items-center">
                                <Form.Label>Đến ngày</Form.Label>
                                <Form.Control type="date" className="ms-2" />
                            </InputGroup>
                        </Form.Group>
                    </Form>
                    <Form className="col-sm-12 row my-2">
                        <h5 className="col-sm-3 h5">Tìm kiếm</h5>
                        <Form.Group controlId="controlIDTimKiem" className="col-sm-6">
                            <div className="row align-items-center">
                                {['Mã nhân viên', 'Tên nhân viên'].map((key, index) => {
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
                                                    onChange={(e) => setRdoTimKiem(e.currentTarget.value)}
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
                                    <Button variant="outline-primary btn-sm" className="ms-2">
                                        Tìm kiếm
                                    </Button>
                                </div>
                            </div>
                        </Form.Group>
                    </Form>
                </div>
                <Table title="Bảng danh sách chấm công" listTitles={listTitles} listdata={listdata} hideButton />
            </div>
        </section>
    );
}

export default DanhSachChamCong;

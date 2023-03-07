import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Table from '~/components/layouts/Table';
import DialogAdd from '~/components/layouts/DialogTableEmployee/DialogAddNV';

const listdata = [
    {
        id: 'HD01',
        title: 'Hợp đồng lao động',
        name: 'CEO',
        name2: 'Đặng Thái Sơn',
        date: '20/7/2023',
    },
    {
        id: 'HD02',
        title: 'Hợp đồng lao động',
        name: 'CEO',
        name2: 'Huỳnh Thanh Vỉ',
        date: '20/7/2023',
    },
    {
        id: 'HD03',
        title: 'Hợp đồng lao động',
        name: 'CEO',
        name2: 'Đặng Thái Sơn',
        date: '20/7/2023',
    },
];

const listTitles = {
    id: 'Mã số hợp đồng',
    title: 'Tên hợp đồng',
    name: 'Người đại diện bên A (Cty)',
    name2: 'Người đại diện bên B (Người thực hiện)',
    noidung: 'Nội dung',
    date: 'Ngày ký',
};
function DanhSachHopDong() {
    const [modalShow, setModalShow] = useState(false);
    const [rdoTimKiem, setRdoTimKiem] = useState('Mã số hợp đồng');


    function handleAddnv() {
        console.log('Hello world');
    }

    return (
        <section className="content-wrapper">
            <div className="row">
                <Form className="col-sm-12 row my-2">
                    <Form.Group controlId="controlIDTimKiem" className="col-sm-6">
                        <div className="row align-items-center">
                            <Form.Label className="col-sm-3 p-0 h5">Tìm kiếm</Form.Label>
                            {['Mã số hợp đồng', 'Ngày ký', 'Bên A', 'Bên B'].map((key, index) => {
                                return (
                                    <div key={index} className="form-check col-sm-4">
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
                <div className="col-sm-12">
                    <Button
                        variant="outline-primary"
                        className="ms-auto col-sm-2 float-end m-2"
                        onClick={() => setModalShow(true)}
                    >
                        Thêm hợp đồng
                    </Button>
                    <Button type="button" variant="outline-danger" className="btn-icon-text m-2 float-end">
                        Xuất/In
                        <i className="ti-printer btn-icon-append" />
                    </Button>
                </div>
                <DialogAdd show={modalShow} onHide={() => setModalShow(false)} onClick={() => handleAddnv()} />
                <Table title="Danh Sách các bảng Hợp đồng" listTitles={listTitles} listdata={listdata} hideButton />
            </div>
        </section>
    );
}

export default DanhSachHopDong;

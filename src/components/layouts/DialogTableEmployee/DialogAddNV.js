import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Modal, Button, Form, InputGroup } from 'react-bootstrap';


function DialogAddUser(props) {
    const { onHide } = props;

    const [manv, setManv] = useState('NV1');
    const [tennv, setTennv] = useState('');
    const [sdt, setSDT] = useState('');
    const [email, setEmail] = useState('');
    const [birth, setBirth] = useState('');
    const [cccd, setCccd] = useState('');
    const [ngayky, setNgayKy] = useState('');
    const [qt, setQt] = useState('');
    const [dt, setDt] = useState('');
    const [stk, setStk] = useState('');
    const [img, setImg] = useState('');
    const [base64Data, setBase64Data] = useState('');
    const [pb, setPb] = useState('');
    const [cv, setCV] = useState('');

    const [pbPost, setPbPost] = useState([]);
    const [cvPost, setCVPost] = useState([]);



    const pbbaseURL = 'http://localhost:8080/PBs';
    const cvbaseURL = 'http://localhost:8080/CVs';

    useEffect(() => {
        axios.get(pbbaseURL)
            .then((response) => {
                setPbPost(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

        axios.get(cvbaseURL)
            .then((response) => {
                setCVPost(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    if (!pbPost || !cvPost) return null;

    const handleAddnv = async (e) => {
        console.log(base64Data);

        console.log(cv);
        e.preventDefault();
        const nhanvien = {
            tenNhanSu: tennv,
            cccd: cccd,
            email: email,
            ngaySinh: birth,
            hinhAnh: base64Data,
            danToc: dt,
            quocTich: qt,
            ngayKyHopDong: ngayky,
            soTK: stk,
            sdt: sdt,
            phongban_id: pb,
            chucvu_id: cv
        };
        await axios.post('http://localhost:8080/api/auth/addNhanVien', nhanvien)
            .then((res) => {
                console.log(res);
                onHide();
            })
            .catch((err) => console.log(err))
    }

    const handleImage = (e) => {
        let file = e.target.files[0];
        getbase64(file);
    }

    const onLoad = (fileString) => {
        setBase64Data(fileString);
    }

    const getbase64 = (file) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = async () => {
            onLoad(reader.result);
        }
    }

    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter">
            <Form action="" onSubmit={handleAddnv}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Th??m th??ng tin nh??n vi??n</Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <p className='h6'>Nh???ng ?? nh???p c?? d???u <span className='text-danger h5'>*</span> l?? b???t bu???c ph???i nh???p</p>
                    <InputGroup className="row">
                        <Form.Group className="mb-3 col-sm-3" controlId="ControlInputManv">
                            <Form.Label>M?? nh??n vi??n</Form.Label>
                            <Form.Control
                                type="text"
                                value={manv}
                                placeholder="M?? nh??n vi??n"
                                autoFocus
                                onChange={(e) => setManv(e.target.value)}
                                disabled
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 col-sm-6" controlId="ControlInputTenNV">
                            <Form.Label>T??n nh??n vi??n  <span className='text-danger h5'>*</span></Form.Label>
                            <Form.Control
                                type="text"
                                value={tennv}
                                placeholder="T??n nh??n vi??n"
                                autoFocus
                                onChange={(e) => setTennv(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 col-sm-3" controlId="ControlInputSDT">
                            <Form.Label>S??? ??i???n tho???i  <span className='text-danger h5'>*</span></Form.Label>
                            <Form.Control
                                type="text"
                                value={sdt}
                                placeholder="S??? ??i???n tho???i"
                                autoFocus
                                onChange={(e) => setSDT(e.target.value)}
                                required
                            />
                        </Form.Group>
                    </InputGroup>
                    <InputGroup className="row">
                        <Form.Group className="mb-3 col-sm-8" controlId="ControlInputCccd">
                            <Form.Label>S??? gi???y t??? t??y th??n  <span className='text-danger h5'>*</span></Form.Label>
                            <Form.Control
                                type="text"
                                value={cccd}
                                placeholder="Nh???p s??? gi???y t??? t??y th??n"
                                autoFocus
                                onChange={(e) => setCccd(e.target.value)}
                                required
                            />
                        </Form.Group>
                    </InputGroup>
                    <InputGroup className="row">
                        <Form.Group className="mb-3 col-sm-5" controlId="ControlInputImg">
                            <Form.Label>H??nh ???nh  <span className='text-danger h5'>*</span></Form.Label>
                            <Form.Control
                                type="file"
                                placeholder="H??nh ???nh"
                                autoFocus
                                onChange={handleImage}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 col-sm-3" controlId="ControlInputQt">
                            <Form.Label>Qu???c t???ch <span className='text-danger h5'>*</span></Form.Label>
                            <Form.Control
                                type="text"
                                value={qt}
                                placeholder="Qu???c t???ch"
                                autoFocus
                                onChange={(e) => setQt(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 col-sm-3" controlId="ControlInputDT">
                            <Form.Label>D??n t???c</Form.Label>
                            <Form.Control
                                type="text"
                                value={dt}
                                placeholder="D??n t???c"
                                autoFocus
                                onChange={(e) => setDt(e.target.value)}
                            />
                        </Form.Group>
                    </InputGroup>
                    <InputGroup className="row">
                        <Form.Group className="mb-3 col-sm-6" controlId="ControlInputEmail">
                            <Form.Label>T??i kho???n Email  <span className='text-danger h5'>*</span></Form.Label>
                            <Form.Control
                                type="email"
                                value={email}
                                placeholder="Email"
                                autoFocus
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 col-sm-6" controlId="ControlInputBirth">
                            <Form.Label>Ng??y sinh</Form.Label>
                            <Form.Control
                                type="date"
                                value={birth}
                                placeholder="Ng??y sinh"
                                autoFocus
                                onChange={(e) => setBirth(e.target.value)}
                            />
                        </Form.Group>
                    </InputGroup>

                    <InputGroup className="row">
                        <Form.Group className="mb-3 col-sm-4" controlId="ControlInputEmail">
                            <Form.Label>S??? t??i kho???n  <span className='text-danger h5'>*</span></Form.Label>
                            <Form.Control
                                type="number"
                                value={stk}
                                placeholder="S??? t??i kho???n"
                                autoFocus
                                onChange={(e) => setStk(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 col-sm-5" controlId="ControlInputBirth">
                            <Form.Label>Ng??y k?? h???p ?????ng</Form.Label>
                            <Form.Control
                                type="date"
                                value={ngayky}
                                placeholder="Ng??y k?? h???p ?????ng"
                                autoFocus
                                onChange={(e) => setNgayKy(e.target.value)}
                            />
                        </Form.Group>
                    </InputGroup>
                    <InputGroup className='row'>
                        <Form.Group className="mb-3 col-sm-4" controlId="ControlInputPB">
                            <Form.Label>Ph??ng ban  <span className='text-danger h5'>*</span></Form.Label>
                            <Form.Select onChange={(e) => setPb(e.target.value)} value={pb}>
                                {pbPost.map((p) => {
                                    return (
                                        <option key={p.maPB} value={p.maPB}>{p.tenPB}</option>
                                    )
                                })}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3 col-sm-4" controlId="ControlInputPB">
                            <Form.Label>Ch???c v???  <span className='text-danger h5'>*</span></Form.Label>
                            <Form.Select onChange={(e) => setCV(e.target.value)} value={cv}>
                                {cvPost.map((p) => {
                                    return (
                                        <option key={p.maCV} value={p.maCV}>{p.tenCV}</option>
                                    )
                                })}
                            </Form.Select>
                        </Form.Group>
                    </InputGroup>
                    <Form.Group className="mb-3 col-sm-4" controlId="ControlInputCV">
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={onHide}>
                        ????ng
                    </Button>
                    <Button type="submit" variant="primary">
                        Th??m nh??n vi??n
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}

export default DialogAddUser;
import React from 'react'
import Table from '~/components/layouts/Table'

const listdata = [{}]

const listTitles = {
  id: 'Mã số lương',
  name: 'Tên nhân viên',
  idnv: 'Mã nhân viên',
  luongcb: 'Lương cơ bản',
  dayNhan: 'Ngày nhận lương',
  giolam: 'Số giờ làm',
  tangca: 'Số giờ tăng ca',
  phucap: 'Số tiền phụ cấp',
  khenthuong: 'Khen thưởng',
  kyluat: 'Kỹ luật',
  ungluong: 'Ứng lương',
  luongnhan: 'Lương nhận'
}

function DanhSachBangLuong() {
  return (
    <section className="content-wrapper">
      <div className="row">
        <div className="col-sm-12">
          <Table title="Phòng ban" listTitles={listTitles} listdata={listdata} />
        </div>
      </div>
    </section>
  )
}

export default DanhSachBangLuong

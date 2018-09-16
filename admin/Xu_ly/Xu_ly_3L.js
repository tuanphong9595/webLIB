var Dia_chi_Dich_vu = "https://book-data.herokuapp.com/"
var Dia_chi_Media = "https://book-media.herokuapp.com/"
//************** Xử lý Lưu trữ ***********

function Tao_The_hien_Sach(Sach, Th_Cha) {
    var the_hien = document.createElement("div");
    the_hien.setAttribute("data", JSON.stringify(Sach));
    Th_Cha.appendChild(the_hien)
    var Chuoi_HTML = `<div class="col-md-3 product-men">
    <div class="info-book">
	<div class="men-pro-item simpleCart_shelfItem">
		<div class="men-thumb-item">
			<img src="https://book-media.herokuapp.com/${Sach.Ma_so}.png" alt="" class="pro-image-front img-full">
			<img src="https://book-media.herokuapp.com/${Sach.Ma_so}.png" alt="" class="pro-image-back img-full">
		
			<span class="product-new-top">Sách</span>
		</div>
		<div class="item-info-product ">
        <h5 class="book-title">${Sach.Ten}</h5>
			<h4 class="info-product-price">
				<span class="item_price">${Tao_Chuoi_The_hien_So_nguyen_duong(Sach.Don_gia_Ban)} đ</span>
            </h4>
		</div>
    </div>
    </div>
</div>`
    the_hien.innerHTML = Chuoi_HTML;
    return the_hien
}

function Xuat_Danh_Sach_Tong(Danh_sach_Sach, Th_thong_bao) {
    Th_Cha.innerHTML = ""
    Danh_sach_Sach.forEach(Sach => {
        var The_hien = Tao_The_hien_Sach(Sach, Th_Cha)
        The_hien.onclick = () => {
            The_hien.childNodes[0].classList.toggle("CHON");
        }
    });
    Th_Thong_bao.innerHTML = `<h4 class="text-center">Danh sách Sách (${Danh_sach_Sach.length}) </h4>`
}


// Đọc danh sách
function Doc_Danh_sach_Sach() {
    var Du_lieu = {}
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=Doc_Danh_sach_Sach`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    Xu_ly_HTTP.send("")
    var Chuoi_JSON = Xu_ly_HTTP.responseText
    if (Chuoi_JSON != "")
        Du_lieu = JSON.parse(Chuoi_JSON)
    return Du_lieu
}

function Doc_Danh_sach_The_loai() {
    var Du_lieu = {}
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=Doc_Danh_sach_The_loai`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    Xu_ly_HTTP.send("")
    var Chuoi_JSON = Xu_ly_HTTP.responseText
    if (Chuoi_JSON != "")
        Du_lieu = JSON.parse(Chuoi_JSON)
    return Du_lieu
}

function Doc_Danh_sach_Tac_gia() {
    var Du_lieu = {}
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=Doc_Danh_sach_Tac_gia`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    Xu_ly_HTTP.send("")
    var Chuoi_JSON = Xu_ly_HTTP.responseText
    if (Chuoi_JSON != "")
        Du_lieu = JSON.parse(Chuoi_JSON)
    return Du_lieu
}

function Doc_Danh_sach_Nha_phat_hanh() {
    var Du_lieu = {}
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=Doc_Danh_sach_Nha_phat_hanh`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    Xu_ly_HTTP.send("")
    var Chuoi_JSON = Xu_ly_HTTP.responseText
    if (Chuoi_JSON != "")
        Du_lieu = JSON.parse(Chuoi_JSON)
    return Du_lieu
}
//Đọc danh sách đã xóa
function Doc_Danh_sach_Xoa_Sach() {
    var Du_lieu = {}
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=Doc_Danh_sach_Xoa_Sach`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    Xu_ly_HTTP.send("")
    var Chuoi_JSON = Xu_ly_HTTP.responseText
    if (Chuoi_JSON != "")
        Du_lieu = JSON.parse(Chuoi_JSON)
    return Du_lieu
}

function Doc_Danh_sach_Xoa_Tac_gia() {
    var Du_lieu = {}
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=Doc_Danh_sach_Xoa_Tac_gia`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    Xu_ly_HTTP.send("")
    var Chuoi_JSON = Xu_ly_HTTP.responseText
    if (Chuoi_JSON != "")
        Du_lieu = JSON.parse(Chuoi_JSON)
    return Du_lieu
}

function Doc_Danh_sach_Xoa_The_loai() {
    var Du_lieu = {}
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=Doc_Danh_sach_Xoa_The_loai`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    Xu_ly_HTTP.send("")
    var Chuoi_JSON = Xu_ly_HTTP.responseText
    if (Chuoi_JSON != "")
        Du_lieu = JSON.parse(Chuoi_JSON)
    return Du_lieu
}

function Doc_Danh_sach_Xoa_Nha_phat_hanh() {
    var Du_lieu = {}
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=Doc_Danh_sach_Xoa_Nha_phat_hanh`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    Xu_ly_HTTP.send("")
    var Chuoi_JSON = Xu_ly_HTTP.responseText
    if (Chuoi_JSON != "")
        Du_lieu = JSON.parse(Chuoi_JSON)
    return Du_lieu
}
//Ghi media.
function Ghi_Media(Hinh) {

    var Xu_ly_HTTP = new XMLHttpRequest()
    var Dia_chi_Xu_ly = `${Dia_chi_Media}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    var Chuoi_Goi = JSON.stringify(Hinh)
    Xu_ly_HTTP.send(Chuoi_Goi)
    var Chuoi_KQ = Xu_ly_HTTP.responseText
    return Chuoi_KQ
}
//Ghi mới
function Ghi_Sach_Moi(Sach) {
    var Du_lieu = {}
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=Ghi_Sach_Moi`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    var Chuoi_Goi = JSON.stringify(Sach)
    Xu_ly_HTTP.send(Chuoi_Goi)
    var Chuoi_JSON = Xu_ly_HTTP.responseText
    if (Chuoi_JSON != "")
        Du_lieu = JSON.parse(Chuoi_JSON)
    return Du_lieu
}

function Ghi_The_loai_Moi(The_loai) {
    var Du_lieu = {}
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=Ghi_The_loai_Moi`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    var Chuoi_Goi = JSON.stringify(The_loai)
    Xu_ly_HTTP.send(Chuoi_Goi)
    var Chuoi_JSON = Xu_ly_HTTP.responseText
    if (Chuoi_JSON != "")
        Du_lieu = JSON.parse(Chuoi_JSON)
    return Du_lieu
}

function Ghi_Tac_gia_Moi(Tac_gia) {
    var Du_lieu = {}
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=Ghi_Tac_gia_Moi`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    var Chuoi_Goi = JSON.stringify(Tac_gia)
    Xu_ly_HTTP.send(Chuoi_Goi)
    var Chuoi_JSON = Xu_ly_HTTP.responseText
    if (Chuoi_JSON != "")
        Du_lieu = JSON.parse(Chuoi_JSON)
    return Du_lieu
}

function Ghi_Nha_phat_hanh_Moi(Nha_phat_hanh) {
    var Du_lieu = {}
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=Ghi_Nha_phat_hanh_Moi`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    var Chuoi_Goi = JSON.stringify(Nha_phat_hanh)
    Xu_ly_HTTP.send(Chuoi_Goi)
    var Chuoi_JSON = Xu_ly_HTTP.responseText
    if (Chuoi_JSON != "")
        Du_lieu = JSON.parse(Chuoi_JSON)
    return Du_lieu
}
//Ghi cập nhật
function Ghi_Cap_nhap_Sach(Danh_sach) {
    var Kq = ""
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=Cap_nhat_Sach`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    var Chuoi_Goi = JSON.stringify(Danh_sach)
    Xu_ly_HTTP.send(Chuoi_Goi)
    Kq = Xu_ly_HTTP.responseText
    return Kq
}

function Ghi_Cap_nhap_The_loai(Danh_sach) {
    var Kq = ""
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=Cap_nhat_The_loai`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    var Chuoi_Goi = JSON.stringify(Danh_sach)
    Xu_ly_HTTP.send(Chuoi_Goi)
    Kq = Xu_ly_HTTP.responseText
    return Kq
}

function Ghi_Cap_nhap_Tac_gia(Danh_sach) {
    var Kq = ""
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=Cap_nhat_Tac_gia`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    var Chuoi_Goi = JSON.stringify(Danh_sach)
    Xu_ly_HTTP.send(Chuoi_Goi)
    Kq = Xu_ly_HTTP.responseText
    return Kq
}

function Ghi_Cap_nhap_Nha_phat_hanh(Danh_sach) {
    var Kq = ""
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=Cap_nhat_Nha_phat_hanh`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    var Chuoi_Goi = JSON.stringify(Danh_sach)
    Xu_ly_HTTP.send(Chuoi_Goi)
    Kq = Xu_ly_HTTP.responseText
    return Kq
}
//Ghi xóa
function Ghi_Xoa_Sach(Danh_sach) {
    var Kq = ""
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=Xoa_Sach`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    var Chuoi_Goi = JSON.stringify(Danh_sach)
    Xu_ly_HTTP.send(Chuoi_Goi)
    Kq = Xu_ly_HTTP.responseText
    return Kq
}

function Ghi_Xoa_The_loai(Danh_sach) {
    var Kq = ""
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=Xoa_The_loai`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    var Chuoi_Goi = JSON.stringify(Danh_sach)
    Xu_ly_HTTP.send(Chuoi_Goi)
    Kq = Xu_ly_HTTP.responseText
    return Kq
}

function Ghi_Xoa_Tac_gia(Danh_sach) {
    var Kq = ""
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=Xoa_Tac_gia`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    var Chuoi_Goi = JSON.stringify(Danh_sach)
    Xu_ly_HTTP.send(Chuoi_Goi)
    Kq = Xu_ly_HTTP.responseText
    return Kq
}

function Ghi_Xoa_Nha_phat_hanh(Danh_sach) {
    var Kq = ""
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=Xoa_Nha_phat_hanh`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    var Chuoi_Goi = JSON.stringify(Danh_sach)
    Xu_ly_HTTP.send(Chuoi_Goi)
    Kq = Xu_ly_HTTP.responseText
    return Kq
}
//Ghi phục hồi
function Ghi_Phuc_hoi_Sach(Danh_sach) {
    var Kq = ""
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=Phuc_hoi_Sach`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    var Chuoi_Goi = JSON.stringify(Danh_sach)
    Xu_ly_HTTP.send(Chuoi_Goi)
    Kq = Xu_ly_HTTP.responseText
    return Kq
}

function Ghi_Phuc_hoi_The_loai(Danh_sach) {
    var Kq = ""
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=Phuc_hoi_The_loai`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    var Chuoi_Goi = JSON.stringify(Danh_sach)
    Xu_ly_HTTP.send(Chuoi_Goi)
    Kq = Xu_ly_HTTP.responseText
    return Kq
}

function Ghi_Phuc_hoi_Tac_gia(Danh_sach) {
    var Kq = ""
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=Phuc_hoi_Tac_gia`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    var Chuoi_Goi = JSON.stringify(Danh_sach)
    Xu_ly_HTTP.send(Chuoi_Goi)
    Kq = Xu_ly_HTTP.responseText
    return Kq
}

function Ghi_Phuc_hoi_Nha_phat_hanh(Danh_sach) {
    var Kq = ""
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=Phuc_hoi_Nha_phat_hanh`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    var Chuoi_Goi = JSON.stringify(Danh_sach)
    Xu_ly_HTTP.send(Chuoi_Goi)
    Kq = Xu_ly_HTTP.responseText
    return Kq
}

//========================================

function Dang_nhap_He_thong(Thong_tin) {
    var Du_lieu = {}
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=Dang_nhap`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    var Chuoi_Thong_tin = JSON.stringify(Thong_tin)
    Xu_ly_HTTP.send(Chuoi_Thong_tin)
    var Chuoi_JSON = Xu_ly_HTTP.responseText
    if (Chuoi_JSON != "")
        Du_lieu = JSON.parse(Chuoi_JSON)
    return Du_lieu
}

//==============================================

//Tạo các thể hiện
//Tạo thể hiện thêm Sách
function Tao_The_hien_Them_Sach(Th_Cha) {

    var Chuoi_HTML =
        `<div class="form m-3 p-3">
    
    
    <div class="form-group">
    <label for="Th_Ten">Tên Sách</label>
    <input type="text" class="form-control" id="Th_Ten" placeholder="Nhập Tên Sách" name="tensach">
    </div>
    <div class="form-group">
        <label style="display:none" for="Th_Nhom_Sach"></label>
        <select style="display:none" id="Th_Nhom_Sach" onchange="Lay_Ma_so_cuoi_Sach()">
        <option value="Sach">Sach</option>
        </select>
        </div>
    <div class="form-group">
                    <label for="Th_Ma_so">Mã số Sách</label>
                    <input  type="text" class="form-control" id="Th_Ma_so" readonly name="masosach">
                </div>
                <div class="form-group">
                    <label for="Th_Don_gia_Ban">Đơn giá Bán</label>
                    <input type="number" class="form-control" id="Th_Don_gia_Ban" placeholder="Nhập Đơn giá Bán" name="dongiaban">
                </div>
                <div class="form-group">
                    <label for="Th_Mo_ta">Mô tả</label>
                    <textarea style="min-height:120px;resize:none" class="form-control" id="Th_Mo_ta" placeholder="Nhập mô tả" name="mota"></textarea>
                </div>
        
        <div class="form-group">
            <label for="Th_Nhom_The_loai">Thể loại:</label>
            <select id="Th_Nhom_The_loai" class="btn btn-danger" name="theloai">
            </select>
            </div>
        <div class="form-group">
            <label for="Th_Nhom_Tac_gia" >Tác giả:</label>
            <select id="Th_Nhom_Tac_gia" class="btn btn-warning" name="tacgia">
        
            </select>
            </div>
            <div class="form-group">
                <label for="Th_Nhom_Nha_phat_hanh" >Nhà phát hành:</label>
                <select id="Th_Nhom_Nha_phat_hanh" class="btn btn-primary" name="nhaphathanh">
                </select>
                </div>
                <div class="form-group">
                    <label for="Th_file">Chọn hình:</label>
                    <input id="Th_file" type="file" onchange="Xem_truoc_Media()" accept="image/png" class="btn btn-success" name="chonhinh"/>
                    <img id="Th_Hinh_Xem_truoc" style="width:10rem" />
                </div>
            
                </div>
                `

    Th_Cha.innerHTML = Chuoi_HTML

}

function Tao_The_hien_List_The_loai(Th_Nhom_The_loai, Danh_sach_Cap_nhat) {
    var noi_dung_HTML = ``
    Danh_sach_Cap_nhat.forEach(The_loai => {
        noi_dung_HTML += `<option value="${The_loai.Ten_the_loai}">${The_loai.Ten_the_loai}</option>`
    })
    Th_Nhom_The_loai.innerHTML = noi_dung_HTML
}

function Tao_The_hien_List_Tac_gia(Th_Nhom_Tac_gia, Danh_sach_Cap_nhat) {
    var noi_dung_HTML = ``
    Danh_sach_Cap_nhat.forEach(Tac_gia => {
        noi_dung_HTML += `<option value="${Tac_gia.Tac_gia}">${Tac_gia.Tac_gia}</option>`
    })
    Th_Nhom_Tac_gia.innerHTML = noi_dung_HTML
}

function Tao_The_hien_List_Nha_phat_hanh(Th_Nhom_Nha_phat_hanh, Danh_sach_Cap_nhat) {
    var noi_dung_HTML = ``
    Danh_sach_Cap_nhat.forEach(Nha_phat_hanh => {
        noi_dung_HTML += `<option value="${Nha_phat_hanh.Nha_phat_hanh}">${Nha_phat_hanh.Nha_phat_hanh}</option>`
    })
    Th_Nhom_Nha_phat_hanh.innerHTML = noi_dung_HTML
}
//Tạo thể hiện thêm nhà phát hành
function Tao_The_hien_Them_Nha_phat_hanh(Th_Cha) {
    var Chuoi_HTML = `
        <div class="form m-3 p-3">
        
        <div class="form-group">
            <label style="display:none" for="Th_Nhom_Nha_phat_hanh">Nhóm Điện thoại</label>
            <select style="display:none" id="Th_Nhom_Nha_phat_hanh" onchange="Lay_Ma_so_cuoi_Nha_phat_hanh()">
                <option value="Nha_phat_hanh">Nha_phat_hanh</option>
                
            </select>
        </div>
        
        <div class="form-group">
            <label for="Th_Ma_so">Mã số:</label>
            <input type="text" class="form-control" id="Th_Ma_so" readonly>
        </div>
        <div class="form-group">
            <label for="Th_Ten">Tên nhà phát hành</label>
            <input type="text" class="form-control" id="Th_Ten" placeholder="Nhập Tên nhà phát hành">
        </div>
        <div class="form-group">
            <label for="Th_Mo_ta_nha_phat_hanh">Mô tả</label>
            <textarea style="min-height:120px;resize:none" rows="4" class="form-control" placeholder="Mô tả nhà phát hành" cols="50" id="Th_Mo_ta_nha_phat_hanh" form="usrform"></textarea>
        </div>
        
    </div>
    `
    Th_Cha.innerHTML = Chuoi_HTML
}
//Tạo thể hiện thêm thể loại
function Tao_The_hien_Them_The_loai(Th_Cha) {
    var Chuoi_HTML = `
        <div class="form m-3 p-3">
        <div class="form-group" style="display:none">
            <select id="Th_Nhom_The_loai" onchange="Lay_Ma_so_cuoi_The_loai()">
                <option value="The_loai">Thể loại</option>
            </select>
        </div>
        <div class="form-group">
            <label for="Th_Ma_so">Mã số Thể loại</label>
            <input type="text" class="form-control" id="Th_Ma_so" readonly>
        </div>
        <div class="form-group">
            <label for="Th_Ten_the_loai">Tên thể loại</label>
            <input type="text" class="form-control" id="Th_Ten_the_loai" placeholder="Nhập tên thể loại">
        </div>
        <div class="form-group">
            <label for="Th_Mo_ta_the_loai">Mô tả thể loại</label>
            <textarea style="min-height:120px;resize:none" rows="4" class="form-control" placeholder="Mô tả  thể loại" cols="50" id="Th_Mo_ta_the_loai" form="usrform"></textarea>
            </div>
    </div>
    `
    Th_Cha.innerHTML = Chuoi_HTML
}
//Tạo thể hiện thêm tác giả
function Tao_The_hien_Them_Tac_gia(Th_Cha) {
    var Chuoi_HTML = `
        <div class="form m-3 p-3">
        <div class="form-group" style="display:none">
            <select id="Th_Nhom_Tac_gia" onchange="Lay_Ma_so_cuoi_Tac_gia()">
                <option value="Tac_gia">Tác giả</option>
            </select>
        </div>
        <div class="form-group">
            <label for="Th_Ma_so">Mã số Tác giả</label>
            <input type="text" class="form-control" id="Th_Ma_so" readonly>
        </div>
        <div class="form-group">
            <label for="Th_Tac_gia">Tên Tác giả</label>
            <input type="text" class="form-control" id="Th_Tac_gia" placeholder="Nhập tên Tác giả">
        </div>
        <div class="form-group">
            <label for="Th_Mo_ta_tac_gia">Mô tả Tác giả</label>
            <textarea style="min-height:120px;resize:none" rows="4" class="form-control" placeholder="Nhập mô tả Tác giả" cols="50" id="Th_Mo_ta_tac_gia" form="usrform"></textarea>
        </div>
    </div>
    `
    Th_Cha.innerHTML = Chuoi_HTML
}

//Tạo thể hiện cập nhật Sách
function Tao_The_hien_Cap_nhat_Sach(Th_Cha, Danh_sach_Cap_nhat) {
    var noi_dung_HTML = ``
    Danh_sach_Cap_nhat.forEach(Sach => {
        var Nhom = Sach.Nhom_Sach
        noi_dung_HTML = `
    <div class="form col-md-12 CAP_NHAP" Ma_so="${Sach.Ma_so}">
    <div class="form-group">
    <label for="Th_Ten">Tên Sách</label>
    <input type="text" class="form-control" id="Th_Ten" value="${Sach.Ten}" placeholder="Nhập Tên Sách">
    </div>
    <div class="form-group">
                    <label for="Th_Ma_so">Mã số Sách</label>
                    <input  type="text" class="form-control" id="Th_Ma_so" value="${Sach.Ma_so}" readonly>
                </div>
                <div class="form-group">
                    <label for="Th_Don_gia_Ban">Đơn giá Bán</label>
                    <input type="number" class="form-control" id="Th_Don_gia_Ban" value="${Sach.Don_gia_Ban}" placeholder="Nhập Đơn giá Bán">
                </div>
                <div class="form-group">
                    <label for="Th_Mo_ta">Mô tả</label>
                    <textarea style="min-height:120px;resize:none" class="form-control" id="Th_Mo_ta" placeholder="Nhập mô tả">${Sach.Mo_ta}</textarea>
                </div>
    
        <div class="form-group">
            <label for="Th_Nhom_The_loai">Thể loại</label>
            <input type="text" class="form-control" id="Th_The_loai" value="${Nhom.Ten_the_loai}" readonly>
            <select id="Th_Nhom_The_loai" class="btn btn-danger" onchange="Lay_Ma_so_cuoi_The_loai()">
                
            </select>
            </div>
        <div class="form-group">
            <label for="Th_Nhom_Tac_gia">Tác giả</label>
            <input type="text" class="form-control" id="Th_Tac_gia" value="${Nhom.Tac_gia}" readonly>
            <select id="Th_Nhom_Tac_gia" class="btn btn-warning" onchange="Lay_Ma_so_cuoi_Tac_gia()">
        
            </select>
            </div>
            <div class="form-group">
                <label for="Th_Nhom_Nha_phat_hanh">Nhà phát hành</label>
                <input type="text" class="form-control" id="Th_Nha_phat_hanh" value="${Nhom.Nha_phat_hanh}" readonly>
                <select id="Th_Nhom_Nha_phat_hanh" class="btn btn-primary" onchange="Lay_Ma_so_cuoi_Nha_phat_hanh()">
                </select>
                </div>`
    })

    Th_Cha.innerHTML = noi_dung_HTML
}

function Tao_The_hien_List_Cap_nhat_The_loai(Th_Nhom_The_loai, Danh_sach_The_loai, Danh_sach_Sach) {
    var noi_dung_HTML = ``
    Danh_sach_Sach.forEach(Sach => {
        noi_dung_HTML = `<option value="${Sach.Nhom_Sach.Ten_the_loai}">Chọn thể loại mới</option>`
    })
    Danh_sach_The_loai.forEach(The_loai => {
        noi_dung_HTML += `<option value="${The_loai.Ten_the_loai}">${The_loai.Ten_the_loai}</option>`
    })
    Th_Nhom_The_loai.innerHTML = noi_dung_HTML
}

function Tao_The_hien_List_Cap_nhat_Tac_gia(Th_Nhom_Tac_gia, Danh_sach_Tac_gia, Danh_sach_Sach) {
    var noi_dung_HTML = ``
    Danh_sach_Sach.forEach(Sach => {
        noi_dung_HTML = `<option value="${Sach.Nhom_Sach.Tac_gia}">Chọn tác giả mới</option>`
    })
    Danh_sach_Tac_gia.forEach(Tac_gia => {
        noi_dung_HTML += `<option value="${Tac_gia.Tac_gia}">${Tac_gia.Tac_gia}</option>`

    })
    Th_Nhom_Tac_gia.innerHTML = noi_dung_HTML
}

function Tao_The_hien_List_Cap_nhat_Nha_phat_hanh(Th_Nhom_Nha_phat_hanh, Danh_sach_Nha_phat_hanh, Danh_sach_Sach) {
    var noi_dung_HTML = ``
    Danh_sach_Sach.forEach(Sach => {
        noi_dung_HTML = `<option value="${Sach.Nhom_Sach.Nha_phat_hanh}">Chọn nhà phát hành mới</option>`
    })
    Danh_sach_Nha_phat_hanh.forEach(Nha_phat_hanh => {

        noi_dung_HTML += `<option value="${Nha_phat_hanh.Nha_phat_hanh}">${Nha_phat_hanh.Nha_phat_hanh}</option>`
    })
    Th_Nhom_Nha_phat_hanh.innerHTML = noi_dung_HTML
}
//Tạo thể hiện cập nhật nhà phát hành
function Tao_The_hien_Cap_nhat_Nha_phat_hanh(Th_Cha, Danh_sach_Cap_nhat) {
    var noi_dung_HTML = `
    <table class="table">
                <thead>
                    <tr>
                        <th>Mã số</th>
                        <th>Tên</th>
                        <th>Mô tả</th>
                    </tr>
                </thead>
                <tbody>`
    Danh_sach_Cap_nhat.forEach(Nha_phat_hanh => {
        noi_dung_HTML += `
        <tr Ma_so="${Nha_phat_hanh.Ma_so}" class="CAP_NHAP">
            <td scope="row"><input type="text" value="${Nha_phat_hanh.Ma_so}" readonly/></td>
            <td><input type="text" value="${Nha_phat_hanh.Nha_phat_hanh}"  /></td>
            <td><textarea class="form-control" placeholder="Nhập mô tả">${Nha_phat_hanh.Mo_ta_nha_phat_hanh}</textarea></td>
        </tr>
        `

    })

    noi_dung_HTML += `
                </tbody>
            </table>
    `
    Th_Cha.innerHTML = noi_dung_HTML
}
//Tạo thể hiện cập nhật thể loại
function Tao_The_hien_Cap_nhat_The_loai(Th_Cha, Danh_sach_Cap_nhat) {
    var noi_dung_HTML = `
    <table class="table">
                <thead>
                    <tr>
                        <th>Mã số</th>
                        <th>Tên</th>
                        <th>Mô tả</th>
                    </tr>
                </thead>
                <tbody>`
    Danh_sach_Cap_nhat.forEach(The_loai => {
        noi_dung_HTML += `
        <tr Ma_so="${The_loai.Ma_so}" class="CAP_NHAP">
            <td scope="row"><input type="text" value="${The_loai.Ma_so}" readonly/></td>
            <td><input type="text" value="${The_loai.Ten_the_loai}" /></td>
            <td><textarea class="form-control" placeholder="Nhập mô tả">${The_loai.Mo_ta_the_loai}</textarea>
            </td>
        </tr>
        `
    })
    noi_dung_HTML += `
                </tbody>
            </table>
    `
    Th_Cha.innerHTML = noi_dung_HTML
}
//Tạo thể hiện cập nhật tác giả
function Tao_The_hien_Cap_nhat_Tac_gia(Th_Cha, Danh_sach_Cap_nhat) {
    var noi_dung_HTML = `
    <table class="table">
                <thead>
                    <tr>
                        <th>Mã số</th>
                        <th>Tên</th>
                        <th>Mô tả</th>
                    </tr>
                </thead>
                <tbody>`
    Danh_sach_Cap_nhat.forEach(Tac_gia => {
        noi_dung_HTML += `
        <tr Ma_so="${Tac_gia.Ma_so}" class="CAP_NHAP">
            <td scope="row"><input type="text" value="${Tac_gia.Ma_so}" readonly/></td>
            <td><input type="text" value="${Tac_gia.Tac_gia}"  /></td>
            <td><textarea class="form-control" placeholder="Nhập mô tả">${Tac_gia.Mo_ta_tac_gia}</textarea>
            </td>
        </tr>
        `
    })
    noi_dung_HTML += `
                </tbody>
            </table>
    `
    Th_Cha.innerHTML = noi_dung_HTML
}

//Tạo thể hiện xóa sách
function Tao_The_hien_Xoa_Sach(Th_Cha, Danh_sach_Cap_nhat) {
    var noi_dung_HTML = `
    <table class="table">
                <thead>
                    <tr>
                        <th>Tên</th>
                        <th>Mã số</th>
                        <th>Đơn giá Bán</th>
                        <th>Mô tả</th> 
                        <th>Thể loại</th>
                        <th>Tác giả</th>
                        <th>Nhà phát hành</th>
                    </tr>
                </thead>
                <tbody>`
    Danh_sach_Cap_nhat.forEach(Sach => {
        var Nhom = Sach.Nhom_Sach
        noi_dung_HTML += `
        <tr Ma_so="${Sach.Ma_so}" class="CAP_NHAP">
            <td scope="row">${Sach.Ten}</td>
            <td>${Sach.Ma_so}</td>
            <td>${Tao_Chuoi_The_hien_So_nguyen_duong(Sach.Don_gia_Ban)}đ</td>
            <td>${Sach.Mo_ta}</td>
            <td>${Nhom.Ten_the_loai}</td>
            <td>${Nhom.Tac_gia}</td>
            <td>${Nhom.Nha_phat_hanh}</td>
            
        </tr>
        `

    })

    noi_dung_HTML += `
                </tbody>
            </table>
    `
    Th_Cha.innerHTML = noi_dung_HTML
}
//Tạo thể hiện xóa nhà phát hành 
function Tao_The_hien_Xoa_Nha_phat_hanh(Th_Cha, Danh_sach_Cap_nhat) {
    var noi_dung_HTML = `
    <table class="table">
                <thead>
                    <tr>
                        <th>Mã số</th>
                        <th>Tên</th>
                        <th>Mô tả</th>
                    </tr>
                </thead>
                <tbody>`
    Danh_sach_Cap_nhat.forEach(Nha_phat_hanh => {
        noi_dung_HTML += `
        <tr Ma_so="${Nha_phat_hanh.Ma_so}" class="CAP_NHAP">
            <td scope="row">${Nha_phat_hanh.Ma_so}</td>
            <td>${Nha_phat_hanh.Nha_phat_hanh}</td>
            <td>${Nha_phat_hanh.Mo_ta_nha_phat_hanh}</td>
        </tr>
        `

    })

    noi_dung_HTML += `
                </tbody>
            </table>
    `
    Th_Cha.innerHTML = noi_dung_HTML
}
//Tạo thể hiện xóa thể loại
function Tao_The_hien_Xoa_The_loai(Th_Cha, Danh_sach_Cap_nhat) {
    var noi_dung_HTML = `
    <table class="table">
                <thead>
                    <tr>
                        <th>Mã số</th>
                        <th>Tên</th>
                        <th>Mô tả</th>
                    </tr>
                </thead>
                <tbody>`
    Danh_sach_Cap_nhat.forEach(The_loai => {
        noi_dung_HTML += `
        <tr Ma_so="${The_loai.Ma_so}" class="CAP_NHAP">
            <td scope="row">${The_loai.Ma_so}</td>
            <td>${The_loai.Ten_the_loai}</td>
            <td>${The_loai.Mo_ta_the_loai}</td>
        </tr>
        `

    })

    noi_dung_HTML += `
                </tbody>
            </table>
    `
    Th_Cha.innerHTML = noi_dung_HTML
}
//Tạo thể hiện xóa tác giả
function Tao_The_hien_Xoa_Tac_gia(Th_Cha, Danh_sach_Cap_nhat) {
    var noi_dung_HTML = `
    <table class="table">
                <thead>
                    <tr>
                        <th>Mã số</th>
                        <th>Tên</th>
                        <th>Mô tả</th>
                    </tr>
                </thead>
                <tbody>`
    Danh_sach_Cap_nhat.forEach(Tac_gia => {
        noi_dung_HTML += `
        <tr Ma_so="${Tac_gia.Ma_so}" class="CAP_NHAP">
            <td scope="row">${Tac_gia.Ma_so}</td>
            <td>${Tac_gia.Tac_gia}</td>
            <td>${Tac_gia.Mo_ta_tac_gia}</td>
        </tr>
        `

    })

    noi_dung_HTML += `
                </tbody>
            </table>
    `
    Th_Cha.innerHTML = noi_dung_HTML
}

//Tạo thể hiện phục hồi Sách
function Tao_The_hien_Phuc_hoi_Sach(Th_Cha, Danh_sach_Phuc_hoi) {
    var noi_dung_HTML = `
    <table class="table">
                <thead>
                    <tr>
                    <th>Tên</th>
                    <th>Mã số</th>
                    <th>Đơn giá Bán</th>
                    <th >Mô tả</th> 
                    <th>Thể loại</th>
                    <th>Tác giả</th>
                    <th>Nhà phát hành</th>
                    </tr>
                </thead>
                <tbody>`
    Danh_sach_Phuc_hoi.forEach(Sach => {
        var Nhom = Sach.Nhom_Sach
        noi_dung_HTML += `
        <tr>
            <td scope="row">${Sach.Ten}</td>
            <td>${Sach.Ma_so}</td>
            <td>${Tao_Chuoi_The_hien_So_nguyen_duong(Sach.Don_gia_Ban)}đ</td>
            <td >${Sach.Mo_ta}</td>
            <td>${Nhom.Ten_the_loai}</td>
            <td>${Nhom.Tac_gia}</td>
            <td>${Nhom.Nha_phat_hanh}</td>
            <td><input type="checkbox" Ma_so="${Sach.Ma_so}" class="PHUC_HOI" /></td>
        </tr>
        `

    })

    noi_dung_HTML += `
                </tbody>
            </table>
    `
    Th_Cha.innerHTML = noi_dung_HTML
}
//Tạo thể hiện phục hồi nhà phát hành
function Tao_The_hien_Phuc_hoi_Nha_phat_hanh(Th_Cha, Danh_sach_Phuc_hoi) {
    var noi_dung_HTML = `
    <table class="table">
                <thead>
                    <tr>
                        <th>Mã số</th>
                        <th>Tên</th>
                        <th>Mô tả</th>
                    </tr>
                </thead>
                <tbody>`
    Danh_sach_Phuc_hoi.forEach(Nha_phat_hanh => {
        noi_dung_HTML += `
        <tr>
            <td scope="row">${Nha_phat_hanh.Ma_so}</td>
            <td>${Nha_phat_hanh.Nha_phat_hanh}</td>
            <td>${Nha_phat_hanh.Mo_ta_nha_phat_hanh}</td>
            <td><input type="checkbox" Ma_so="${Nha_phat_hanh.Ma_so}" class="PHUC_HOI" /></td>
        </tr>
        `

    })

    noi_dung_HTML += `
                </tbody>
            </table>
    `
    Th_Cha.innerHTML = noi_dung_HTML
}

//Tạo thể hiện phục hồi tác giả
function Tao_The_hien_Phuc_hoi_Tac_gia(Th_Cha, Danh_sach_Phuc_hoi) {
    var noi_dung_HTML = `
    <table class="table">
                <thead>
                    <tr>
                        <th>Mã số</th>
                        <th>Tên</th>
                        <th>Mô tả</th>
                    </tr>
                </thead>
                <tbody>`
    Danh_sach_Phuc_hoi.forEach(Tac_gia => {
        noi_dung_HTML += `
        <tr>
            <td scope="row">${Tac_gia.Ma_so}</td>
            <td>${Tac_gia.Tac_gia}</td>
            <td>${Tac_gia.Mo_ta_tac_gia}</td>
            <td><input type="checkbox" Ma_so="${Tac_gia.Ma_so}" class="PHUC_HOI" /></td>
        </tr>
        `

    })

    noi_dung_HTML += `
                </tbody>
            </table>
    `
    Th_Cha.innerHTML = noi_dung_HTML
}
//Tạo thể hiện phục hồi thể loại
function Tao_The_hien_Phuc_hoi_The_loai(Th_Cha, Danh_sach_Phuc_hoi) {
    var noi_dung_HTML = `
    <table class="table">
                <thead>
                    <tr>
                        <th>Mã số</th>
                        <th>Tên</th>
                        <th>Mô tả</th>
                    </tr>
                </thead>
                <tbody>`
    Danh_sach_Phuc_hoi.forEach(The_loai => {
        noi_dung_HTML += `
        <tr>
            <td scope="row">${The_loai.Ma_so}</td>
            <td>${The_loai.Ten_the_loai}</td>
            <td>${The_loai.Mo_ta_the_loai}</td>
            <td><input type="checkbox" Ma_so="${The_loai.Ma_so}" class="PHUC_HOI" /></td>
        </tr>
        `

    })

    noi_dung_HTML += `
                </tbody>
            </table>
    `
    Th_Cha.innerHTML = noi_dung_HTML
}




//Tạo thể hiện danh sách nhà phát hành
function Tao_The_hien_Nha_phat_hanh(Nha_phat_hanh, Th_Cha) {
    var the_hien = document.createElement("div")
    the_hien.setAttribute("data", JSON.stringify(Nha_phat_hanh))
    Th_Cha.appendChild(the_hien)
    var Chuoi_HTML = `<div class="col-md-4">
    <div class="contact-box">
        <div class="col-sm-12">
            <div class="m-t-xs font-bold">${Nha_phat_hanh.Ma_so}</div>
            <h3 style="color:red; font-weight:bold">${Nha_phat_hanh.Nha_phat_hanh}</h3>
            <h4>${Nha_phat_hanh.Mo_ta_nha_phat_hanh}</h4>
        </div>
        <div class="clearfix"></div>
    </div>
</div>


`
    the_hien.innerHTML = Chuoi_HTML;
    return the_hien
}
//Tạo thể hiện danh sách thể loại
function Tao_The_hien_The_loai(The_loai, Th_Cha) {
    var the_hien = document.createElement("div")
    the_hien.setAttribute("data", JSON.stringify(The_loai))
    Th_Cha.appendChild(the_hien)
    var Chuoi_HTML = `<div class="col-md-4">
    <div class="contact-box">
        
        <div class="col-sm-8">
        <div class="m-t-xs font-bold">${The_loai.Ma_so}</div>
            <h3 style="color:red; font-weight:bold">${The_loai.Ten_the_loai}</h3>
            <h4>${The_loai.Mo_ta_the_loai}</h4>
        </div>
        <div class="clearfix"></div>
    </div>
</div>`
    the_hien.innerHTML = Chuoi_HTML;
    return the_hien
}
//Tạo thể hiện danh sách tác giả
function Tao_The_hien_Tac_gia(Tac_gia, Th_Cha) {
    var the_hien = document.createElement("div")
    the_hien.setAttribute("data", JSON.stringify(Tac_gia))
    Th_Cha.appendChild(the_hien)
    var Chuoi_HTML = `<div class="col-md-4">
    <div class="contact-box">
        <div class="col-sm-8">
            <div class="m-t-xs font-bold">${Tac_gia.Ma_so}</div>
            <h3 style="color:red; font-weight:bold">${Tac_gia.Tac_gia}</h3>
            <h4>${Tac_gia.Mo_ta_tac_gia}</h4>
        </div>
        <div class="clearfix"></div> 
    </div>
</div>`
    the_hien.innerHTML = Chuoi_HTML;
    return the_hien
}




//Thể hiện đăng nhập
function Tao_The_hien_Dang_nhap(Th_Cha) {
    var noi_dung_HTML = `
    
  <div class="col-md-6">
  <div class="ibox-content">
      <form class="m-t" name="myForm" onsubmit="return(validate());">
          <div class="form-group">
            <label for="Th_Ten_Dang_nhap">Tên đăng nhập</label>
              <input type="email" class="form-control" id="Th_Ten_Dang_nhap" placeholder="Nhập tên đăng nhập" name="name">
          </div>
          <div class="form-group">
          <label for="Th_Mat_khau">Mật khẩu</label>
              <input type="password" class="form-control" id="Th_Mat_khau" placeholder="Nhập mật khẩu" name="password">
          </div>
          <button type="button" class="btn btn-primary block full-width m-b" id="Th_Dang_nhap">Đăng nhập</button>
      </form>
  </div>
</div>

  
  `
    Th_Cha.innerHTML = noi_dung_HTML
}

//==============================================================================
// Xử lý biến Số nguyên
function Nhap_So_nguyen_duong(Th_So_nguyen) {
    var Kq = {}
    Kq.So_nguyen = parseInt(Th_So_nguyen.value.trim())
    Kq.Hop_le = !isNaN(Kq.So_nguyen) && Kq.So_nguyen > 0
    return Kq
}

function Tao_Chuoi_The_hien_So_nguyen_duong(So_nguyen) {
    var Chuoi_The_hien = ""
    var Chuoi_So_nguyen = So_nguyen.toString()
    var So_Ky_so = Chuoi_So_nguyen.length
    if (So_Ky_so % 3 == 0) {
        for (var Chi_so = 0; Chi_so < Chuoi_So_nguyen.length; Chi_so++) {
            Chuoi_The_hien += Chuoi_So_nguyen[Chi_so]
            if (Chi_so % 3 == 2 && Chi_so < Chuoi_So_nguyen.length - 1)
                Chuoi_The_hien += "."
        }
    } else if (So_Ky_so % 3 == 1) {
        Chuoi_The_hien = Chuoi_So_nguyen[0]
        if (So_Ky_so > 1)
            Chuoi_The_hien += "."
        Chuoi_So_nguyen = Chuoi_So_nguyen.slice(1)
        for (var Chi_so = 0; Chi_so < Chuoi_So_nguyen.length; Chi_so++) {
            Chuoi_The_hien += Chuoi_So_nguyen[Chi_so]
            if (Chi_so % 3 == 2 && Chi_so < Chuoi_So_nguyen.length - 1)
                Chuoi_The_hien += "."

        }
    } else if (So_Ky_so % 3 == 2) {
        Chuoi_The_hien = Chuoi_So_nguyen[0] + Chuoi_So_nguyen[1]
        if (So_Ky_so > 2)
            Chuoi_The_hien += "."
        Chuoi_So_nguyen = Chuoi_So_nguyen.slice(2)
        for (var Chi_so = 0; Chi_so < Chuoi_So_nguyen.length; Chi_so++) {
            Chuoi_The_hien += Chuoi_So_nguyen[Chi_so]
            if (Chi_so % 3 == 2 && Chi_so < Chuoi_So_nguyen.length - 1)
                Chuoi_The_hien += "."
        }
    }
    return Chuoi_The_hien
}


// Xử lý Biến Số thực
function Nhap_So_thuc_duong(Th_So_thuc) {
    var Kq = {}
    Kq.So_thuc = parseInt(Th_So_thuc.value.trim())
    Kq.Hop_le = !isNaN(Kq.So_thuc) && Kq.So_thuc > 0
    return Kq
}

function Tao_Chuoi_The_hien_So_thuc_duong(So_thuc, So_so_le) {
    So_thuc = parseFloat(So_thuc)
    var Chuoi_The_hien = ""
    if (!So_so_le)
        So_so_le = 2
    var Thanh_phan_con = So_thuc
        .toFixed(So_so_le)
        .split(".")
    Chuoi_The_hien = Tao_Chuoi_The_hien_So_nguyen_duong(Thanh_phan_con[0])
    if (Thanh_phan_con.length == 2 && parseInt(Thanh_phan_con[1]) != 0 && So_so_le > 0)
        Chuoi_The_hien += "," + Tao_Chuoi_The_hien_So_nguyen_duong(Thanh_phan_con[1])
    return Chuoi_The_hien
}

function Tao_Chuoi_The_hien_Tien(So_tien, n) {
    if (!n)
        n = 0

    var Chuoi_The_hien = Tao_Chuoi_The_hien_So_thuc_duong(So_tien, n)

    return Chuoi_The_hien
}

// Xử lý với Biến Ngày
function La_Ngay_Hien_hanh(Ngay) {
    var Ngay_Hien_hanh = new Date()
    Ngay = new Date(Ngay)
    var Kq = Ngay_Hien_hanh.getDate() == Ngay.getDate() &&
        Ngay_Hien_hanh.getMonth() == Ngay.getMonth() &&
        Ngay_Hien_hanh.getFullYear() == Ngay.getFullYear()

    return Kq
}

function Tao_Chuoi_The_hien_Ngay(Ngay) {
    var Chuoi_The_hien = ""
    if (!Ngay)
        Ngay = new Date()
    Chuoi_The_hien = Ngay.getDate() + "/" + (Ngay.getMonth() + 1) + "/" + Ngay.getFullYear()
    return Chuoi_The_hien
}

function Tao_Chuoi_The_hien_Gio(Ngay) {
    var Chuoi_The_hien = ""
    if (!Ngay)
        Ngay = new Date()
    Chuoi_The_hien = Ngay.getHours() + ":" + Ngay.getMinutes() + ":" + Ngay.getMinutes()
    return Chuoi_The_hien
}

function Tao_Chuoi_The_hien_Ngay_Gio(Ngay) {
    var Chuoi_The_hien = Tao_Chuoi_The_hien_Ngay(Ngay) + " " + Tao_Chuoi_The_hien_Gio(Ngay)
    return Chuoi_The_hien
}

function Kiem_tra_Ngay(Chuoi_ngay) {
    var Thanh_phan_con = Chuoi_ngay.split("/")
    var Hop_le = Thanh_phan_con.length == 3 && !isNaN(Thanh_phan_con[0]) && !isNaN(Thanh_phan_con[1]) && !isNaN(Thanh_phan_con[2])
    if (Hop_le) {
        var Ng = parseInt(Thanh_phan_con[0])
        var Th = parseInt(Thanh_phan_con[1])
        var Nm = parseInt(Thanh_phan_con[2])
        var So_ngay_cua_Th = new Date(Nm, Th, 0).getDate()
        // var So_ngay_cua_Th = new Date(Nm, Th+1 , 0).getDate()
        Hop_le = Ng >= 1 && Ng <= So_ngay_cua_Th && Th >= 1 && Th <= 12 && Nm > 0
    }
    return Hop_le
}

function Nhap_Ngay(Th_Ngay) {
    var Kq = {}
    var Chuoi_Ngay = Th_Ngay
        .value
        .trim()
    Kq.Hop_le = Kiem_tra_Ngay(Chuoi_Ngay)
    if (Kq.Hop_le) {
        var Thanh_phan_con = Chuoi_ngay.split("/")
        Kq.Ngay = new Date(Thanh_phan_con[1] + "-" + Thanh_phan_con[0] + "-" + Thanh_phan_con[2])
    }

    return Kq
}
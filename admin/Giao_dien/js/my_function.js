var limit = 8;

var Du_lieu = Doc_Danh_sach_Sach();
var Danh_sach_Sach = Du_lieu.Danh_sach_Sach;
if (Danh_sach_Sach.length > 0) {
    Xuat_Danh_sach_Phan_trang(Danh_sach_Sach, Th_Thong_bao, 0, limit);
    Th_Thong_bao.innerHTML = `<h4 class="book-alert">Danh sách hiện có <span style="color:red;font-size:17px;">${Danh_sach_Sach.length}</span> cuốn sách</h4>`
    Tao_The_Hien_Phan_trang(Danh_sach_Sach, limit, Th_Phan_trang)

} else {
    Th_Thong_bao.innerHTML = "Lỗi đọc dữ liệu"
}

function Xuat_Danh_sach_Phan_trang(Danh_sach_Sach, Th_Thong_bao, vt, limit) {
    Th_Cha.innerHTML = "";
    var dem = 0;
    Danh_sach_Sach.forEach((Sach, index) => {
        var The_hien = Tao_The_hien_Sach(Sach, Th_Cha)
        if (index >= vt && dem < limit) {
            The_hien.onclick = () => {
                The_hien.childNodes[0].classList.toggle("CHON");
            }
            dem++;
        } else {
            The_hien.style.cssText = "display:none"
        }
    });
}


function Tao_The_Hien_Phan_trang(Danh_sach, So_san_pham_cho_mot_trang, Th_Cha) {
    var Tong_so_san_pham = Danh_sach.length
    var Tong_trang = (Tong_so_san_pham % So_san_pham_cho_mot_trang == 0) ? Tong_so_san_pham / So_san_pham_cho_mot_trang : parseInt(Tong_so_san_pham / So_san_pham_cho_mot_trang) + 1
    var noi_dung_HTML = `<nav aria-label="Page navigation example">`
    noi_dung_HTML += `
    <ul class="pagination justify-content-center">
    `
    for (var i = 1; i <= Tong_trang; i++) {
        var vt = (i - 1) * So_san_pham_cho_mot_trang
        noi_dung_HTML += `<li class="page-item"><a class="page-link" href="javaScript:void(0)" onclick="Xuat_Danh_sach_Phan_trang(Danh_sach_Sach, Th_Thong_bao,${vt} ,${limit})" >${i}</a></li>`
    }
    noi_dung_HTML += `
    </ul>
    </nav>
    `
    Th_Cha.innerHTML = noi_dung_HTML
}

Th_Tim.onclick = () => {
    var gtTim = Th_Gia_tri_Tim.value;
    Danh_sach_Sach = Du_lieu.Danh_sach_Sach.filter(x => x.Ten.toLowerCase().includes(gtTim.toLowerCase()));
    Xuat_Danh_sach_Phan_trang(Danh_sach_Sach, Th_Thong_bao, 0, limit);
    Th_Thong_bao.innerHTML = `<h4 class="book-alert">Tìm thấy <span style="color:red;font-size:17px;">${Danh_sach_Sach.length}</span> cuốn sách với từ khoá <span style="color:red;font-size:17px;">${gtTim}</span></h4>`
    if (Danh_sach_Sach.length > limit) {
        Tao_The_Hien_Phan_trang(Danh_sach_Sach, limit, Th_Phan_trang)
    } else {
        Th_Phan_trang.innerHTML = "";
    }
}


function KeyCode(event) {
    if (event.keyCode == 13) {
        var gtTim = Th_Gia_tri_Tim.value;
        Danh_sach_Sach = Du_lieu.Danh_sach_Sach.filter(x => x.Ten.toLowerCase().includes(gtTim.toLowerCase()));
        Xuat_Danh_sach_Phan_trang(Danh_sach_Sach, Th_Thong_bao, 0, limit);
        Th_Thong_bao.innerHTML = `<h4 class="book-alert">Tìm thấy <span style="color:red;font-size:17px;">${Danh_sach_Sach.length}</span> cuốn sách với từ khoá <span style="color:red;font-size:17px;">${gtTim}</span></h4>`
        if (Danh_sach_Sach.length > limit) {
            Tao_The_Hien_Phan_trang(Danh_sach_Sach, limit, Th_Phan_trang)
        } else {
            Th_Phan_trang.innerHTML = "";
        }
    }
}

function Sap_Tang() {
    Danh_sach_Sach.sort((a, b) => a.Ten.localeCompare(b.Ten))
    Xuat_Danh_sach_Phan_trang(Danh_sach_Sach, Th_Thong_bao, 0, limit);
    Tao_The_Hien_Phan_trang(Danh_sach_Sach, limit, Th_Phan_trang)
}

function Sap_Giam() {
    Danh_sach_Sach.sort((a, b) => b.Ten.localeCompare(a.Ten))
    Xuat_Danh_sach_Phan_trang(Danh_sach_Sach, Th_Thong_bao, 0, limit);
    Tao_The_Hien_Phan_trang(Danh_sach_Sach, limit, Th_Phan_trang)
}

function Xuat_Sach_theo_Don_gia(chuoi_dieu_kien) {
    var Thanh_phan_con = chuoi_dieu_kien.split('-')
    if (Thanh_phan_con.length > 0) {
        Danh_sach_Sach = Du_lieu.Danh_sach_Sach.filter(x => x.Don_gia_Ban >=
            Thanh_phan_con[0] && x.Don_gia_Ban <= Thanh_phan_con[1])
        Xuat_Danh_sach_Phan_trang(Danh_sach_Sach, Th_Thong_bao, 0, limit);
        Th_Thong_bao.innerHTML = `<h4 class="book-alert">Danh sách hiện có <span style="color:red;font-size:17px;">${Danh_sach_Sach.length}</span> cuốn sách </h4>`
        if (Danh_sach_Sach.length > limit) {
            Tao_The_Hien_Phan_trang(Danh_sach_Sach, limit, Th_Phan_trang)
        } else {
            Th_Phan_trang.innerHTML = "";
        }

    }
}
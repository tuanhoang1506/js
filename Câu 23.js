function tinhLuong() {
    let luong = parseFloat(document.getElementById("luong").value);
    let heSo = parseFloat(document.getElementById("heSo").value);

    if (isNaN(luong) || isNaN(heSo)) {
        alert("Vui lòng nhập đầy đủ Lương và Hệ số lương!");
        return;
    }

    let tongLuong = luong * heSo;
    document.getElementById("luongThang").value = tongLuong;
}

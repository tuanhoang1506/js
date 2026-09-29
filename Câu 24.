function xuatThu() {
    let d = parseInt(document.getElementById("ngay").value);
    let m = parseInt(document.getElementById("thang").value);
    let y = parseInt(document.getElementById("nam").value);

    if (isNaN(d) || isNaN(m) || isNaN(y)) {
        alert("Vui lòng nhập đầy đủ ngày, tháng, năm!");
        return;
    }

    let dateObj = new Date(y, m - 1, d);
    let dayIndex = dateObj.getDay();

    const dsThu = ["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];
    let tenThu = dsThu[dayIndex];

    document.getElementById("ketQuaThu").innerText = `${tenThu} Ngày ${d} tháng ${m} năm ${y}`;
}

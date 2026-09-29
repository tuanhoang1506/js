function tinhCanChi() {
    let inputVal = document.getElementById("namDuong").value.trim();
    let nam = parseInt(inputVal);

    if (inputVal === "" || isNaN(nam) || nam <= 0 || !Number.isInteger(Number(inputVal))) {
        alert("Vui lòng nhập năm dương lịch là một số nguyên dương hợp lệ!");
        document.getElementById("canChi").value = "";
        return;
    }

    const CAN = ["Canh", "Tân", "Nhâm", "Quý", "Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ"];
    const CHI = ["Thân", "Dậu", "Tuất", "Hợi", "Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi"];

    let can = CAN[nam % 10];
    let chi = CHI[nam % 12];

    document.getElementById("canChi").value = `${can} ${chi.toLowerCase()}`;
}

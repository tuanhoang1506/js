function tinhTien() {
    let selectThucAn = document.getElementById("thucAn");
    let selectNuocUong = document.getElementById("nuocUong");
    let thoiDiem = document.querySelector('input[name="thoiDiem"]:checked').value;
    let tbody = document.getElementById("billBody");

    tbody.innerHTML = "";
    let tongTien = 0;

    function themMon(selectElem) {
        for (let opt of selectElem.options) {
            if (opt.selected) {
                let gia = parseFloat(opt.value);
                tongTien += gia;
                let tr = document.createElement("tr");
                tr.innerHTML = `<td>${opt.text}</td><td>${gia}</td>`;
                tbody.appendChild(tr);
            }
        }
    }

    themMon(selectThucAn);
    themMon(selectNuocUong);

    if (thoiDiem === "dem") {
        tongTien = tongTien * 1.1;
    }

    document.getElementById("tongTien").innerText = `${tongTien} đồng`;
}

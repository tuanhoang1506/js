function calc(operation) {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let resSpan = document.getElementById("result");

    if (isNaN(n1) || isNaN(n2)) {
        resSpan.innerText = "Vui lòng nhập số hợp lệ!";
        return;
    }

    if (operation === 'multiply') {
        resSpan.innerText = n1 * n2;
    } else if (operation === 'divide') {
        if (n2 === 0) {
            resSpan.innerText = "Không thể chia cho 0";
        } else {
            resSpan.innerText = n1 / n2;
        }
    }
}

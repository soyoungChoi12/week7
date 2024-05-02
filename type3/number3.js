let countValue = 0; // 초기값 설정

function updownCount() {
    document.getElementById("count").innerText = countValue;
}

function decrease() {
    countValue -= 1; // 1 감소
    updownCount();
}

function increase() {
    countValue += 1; // 1 증가
    updownCount();
}

function reset() {
    countValue = 0; // 초기값으로 재설정
    updownCount();
}
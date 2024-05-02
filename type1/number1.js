function handleEvent(event) {
    var selectedColor = event.target.value; // 선택된 색상 가져오기
    document.getElementById("helloworld").style.color = selectedColor; // 텍스트 색상 변경
}

// 이벤트 핸들러 함수를 옵션에 연결
document.getElementById("options").addEventListener("change", handleEvent);
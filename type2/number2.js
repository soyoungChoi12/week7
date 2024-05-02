document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // 폼 제출 방지

    var textValue = document.getElementById("textInput").value;
    document.getElementById("textInput").style.display = "none"; // 입력 필드 숨기기
    document.getElementById("namesubmit").style.display = "none"; // submit 버튼 숨기기
    
    var outputDiv = document.getElementById("output");
    outputDiv.textContent = "Hello, " + textValue + "."; // 텍스트 출력
    outputDiv.style.display = "block"; // 출력된 텍스트 보이기
});
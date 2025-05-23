// script.js
let currentSection = 0;
const sections = document.querySelectorAll("section");

function showSection(index) {
    if (index >= 0 && index < sections.length) {
        // 현재 활성화된 섹션 비활성화
        sections[currentSection].classList.remove("active");
        // 새로운 섹션 활성화
        sections[index].classList.add("active");
        currentSection = index;
    }
}

// 초기 상태 설정: 첫 번째 섹션 활성화
showSection(0);

window.addEventListener("wheel", (event) => {
    if (event.deltaY > 150) {
        // 아래로 스크롤: 다음 섹션으로 이동
        showSection(currentSection + 1);
    } else {
        // 위로 스크롤: 이전 섹션으로 이동
        showSection(currentSection - 1);
    }
});
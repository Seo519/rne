// script.js
let currentSection = 0;
const sections = document.querySelectorAll("section");
let isScrolling = false; // 스크롤 중인지 여부를 확인하는 플래그

function showSection(index) {
    if (index >= 0 && index < sections.length && !isScrolling) {
        isScrolling = true; // 스크롤 중임을 표시

        // 현재 활성화된 섹션 비활성화
        sections[currentSection].classList.remove("active");
        // 새로운 섹션 활성화
        sections[index].classList.add("active");
        currentSection = index;

        // 0.5초 후에 다시 스크롤 가능하도록 설정
        setTimeout(() => {
            isScrolling = false;
        }, 500);
    }
}

// 초기 상태 설정: 첫 번째 섹션 활성화
showSection(0);

window.addEventListener("wheel", (event) => {
    const threshold = 50; // 스크롤 감도 임계값 설정

    if (Math.abs(event.deltaY) > threshold) {
        if (event.deltaY > 150) {
            // 아래로 스크롤: 다음 섹션으로 이동
            showSection(currentSection + 1);
        } else {
            // 위로 스크롤: 이전 섹션으로 이동
            showSection(currentSection - 1);
        }
    }
});
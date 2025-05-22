// script.js
let currentSection = 0;
const sections = document.querySelectorAll("section");
const wrapper = document.querySelector(".wrapper");

function scrollToSection(index) {
    if (index >= 0 && index < sections.length) {
        // 인덱스에 따라 wrapper를 translateY로 이동
        wrapper.style.transform = `translateY(-${index * 100}vh)`;
        currentSection = index;
    }
}

window.addEventListener("wheel", (event) => {
    if (event.deltaY > 50) {
        // 아래로 스크롤: 다음 섹션으로 이동
        scrollToSection(currentSection + 1);
    } if (events.deltaY < 50) {
        // 위로 스크롤: 이전 섹션으로 이동
        scrollToSection(currentSection - 1);
    }
});

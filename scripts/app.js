const swiper = new Swiper(".top-banner .swiper", {
  // Optional parameters
  direction: "horizontal", // 슬라이드 방향
  autoplay: {
    // 자동재생 여부
    delay: 3500,
  },
  loop: true, // 반복재생 여부

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
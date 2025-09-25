const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "vertical", //가로,세로
  loop: true, //무한반복 : 1-> 2-> 3-> 1-> 2

  // If we need pagination
  pagination: {
    // 땡땡땡 네비게이션 세개
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    // 버튼
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    //스크롤바
    el: ".swiper-scrollbar",
  },
});

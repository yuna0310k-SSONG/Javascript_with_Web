const APIKEY = "6d1b3ceae29a17a2710c2ad71c7f2252";

const cityLocation = {
  Bupyeong: { lat: 37.489, lon: 126.723 },
  Tokyo: { lat: 35.689, lon: 139.691 },
  London: { lat: 51.507, lon: -0.127 },
  Paris: { lat: 48.857, lon: 2.352 },
  LA: { lat: 34.052, lon: -118.244 },
};
// 각 도시 버튼
const Bupyeong = document.querySelector("#Bupyeong");
const Tokyo = document.querySelector("#Tokyo");
const London = document.querySelector("#London");
const Paris = document.querySelector("#Paris");
const LA = document.querySelector("#LA");
// 도시별 타임존 정리
const citys = {
  Bupyeong: "Asia/Seoul",
  Tokyo: "Asia/Tokyo",
  London: "Europe/London",
  Paris: "Europe/Paris",
  LA: "America/Los_Angeles",
};

const korTime = document.querySelector("#korTime");
const locationTime = document.querySelector("#locationTime");

// 한국 시간 실시간 업데이트
setInterval(() => {
  // ⏰ 1초마다 반복
  korTime.innerHTML =
    "KOR시간 : " +
    new Date().toLocaleTimeString("ko-KR", {
      hour12: false, // 24시간 표시
      timeZone: "Asia/Seoul", // 한국 기준
    });
}, 1000);

// 지역 버튼 클릭 시 해당 지역 시간 갱신
Object.keys(citys).forEach((city) => {
  //  모든 도시 버튼 반복
  document.querySelector(`#${city}`).addEventListener("click", () => {
    // 해당 버튼 클릭 시
    clearInterval(locationTime.timer); //  기존 타이머 제거
    locationTime.innerHTML =
      `${city} 시간 : ` +
      new Date().toLocaleTimeString("ko-KR", {
        hour12: false,
        timeZone: citys[city], // 도시별 타임존 적용
      });
    locationTime.timer = setInterval(() => {
      //  새 타이머 생성
      locationTime.innerHTML =
        `${city} 시간 : ` +
        new Date().toLocaleTimeString("ko-KR", {
          hour12: false,
          timeZone: citys[city],
        });
    }, 1000);
    const background = document.querySelector("#background");

    // 🌦️ 해당 버튼(도시) 날씨만 가져오기
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${cityLocation[city].lat}&lon=${cityLocation[city].lon}&appid=${APIKEY}&units=metric&lang=kr`
    )
      .then((res) => res.json())
      .then((v) => {
        const weather = v.weather[0].description; // 날씨 설명
        const temp = v.main.temp; // 온도
        console.log(` ${city} 날씨 : ${weather}, ${temp}°C`);

        // 🌤️ 배경 이미지 변경
        if (weather.includes("맑")) {
          background.style.backgroundImage = "url('sunny.jpg')";
        } else if (weather.includes("흐림")) {
          background.style.backgroundImage = "url('Cloudy.jpg')";
        } else if (weather.includes("구름")) {
          background.style.backgroundImage = "url('cloud.avif')";
        } else {
          background.style.backgroundImage = "url('default.jpg')";
        }

        background.style.backgroundSize = "cover";
        background.style.transition = "background 1s ease";
      });
  });
});

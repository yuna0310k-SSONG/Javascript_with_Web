const mobile = document.querySelector("#mobile");

const keyframes = [
  { opacity: 0, transform: "translateY(300px)" },
  { opacity: 1, transform: "translateY(0px)" },
];
const option = {
  duration: 1000,
  fill: "forwards",
};

const ob = new IntersectionObserver(
  (entries, me) => {
    entries.forEach((v) => {
      if (v.isIntersecting) {
        v.target.animate(keyframes, option);
        me.unobserve(v.target);
      }
    });
  },
  {
    root: null,
    rootMargin: "0px 0px -30% 0px",
  }
);

ob.observe(mobile);

document.querySelector(".my-box");

//IntersectionObserver 인터셉션 목적어(?)
const lunch = document.querySelector("#lunch");
const dinner = document.querySelector("#dinner");

const ob = new IntersectionObserver((targets, me) => {
  targets.forEach((v) => {
    if (v.isIntersecting) {
      console.log(v.target);
      v.target.animate(
        [
          {
            transform: " translateY(100px)",
            opacity: 0,
          },
          {
            transform: "translateY(0)",
            opacity: 1,
          },
        ],
        {
          duration: 1000,
        }
      );
      me.unobserve(v.target);
    }
  });
}, {});
ob.observe(lunch);
ob.observe(dinner);

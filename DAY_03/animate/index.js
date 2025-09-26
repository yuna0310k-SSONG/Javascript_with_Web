const heading = document.querySelector("#heading");

heading.animate(
  [
    {
      transform: " translateY(30px)",
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

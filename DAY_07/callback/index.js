const makeDough = (nextstep) => {
  console.log("도우 만들기");
  nextstep();
};
const makeTomato = (nextstep) => {
  console.log("토마토소스 바르기");
  nextstep();
};
const makeCheese = (nextstep) => {
  console.log("치즈 뿌리기");
  nextstep();
};
const makebake = (nextstep) => {
  console.log("굽기");
  nextstep();
};
const makePackage = (nextstep) => {
  console.log("포장하기");
  nextstep();
};
makeDough(() => {
  makeTomato(() => {
    makeCheese(() => {
      makebake(() => {
        makePackage();
      });
    });
  });
});

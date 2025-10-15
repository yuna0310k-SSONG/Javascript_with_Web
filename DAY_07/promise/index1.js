const apple = () =>
  new Promise((success, fail) => {
    success("사과");
  });
apple().then((v) => console.log(`충주${v}`));

const iphone = (color, version) =>
  new Promise((success, fail) => {
    success(`${color}색상 ${version}인 아이폰`);
  });
iphone("White", "17").then((v) => console.log(v));

/*const [tag, content] = prompt("태그와 내용 입력해줘").split(" ");

const newTag = document.createElement(tag);
newTag.innerText = content;
document.body.appendChild(newTag);
*/

const contents = prompt(" 내용 입력해줘").split(" ");

contents.forEach((v) => {
  const btn = document.createElement("button");
  btn.innerText = v;
  btn.style.color = "#d12345";
  document.body.appendChild(btn);
});

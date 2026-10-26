const data = [
  { img: "", date: "2020 - 2023", title: "Thẻ 1", content: "Nội dung 1" },
  { img: "", date: "2023 - 2026", title: "Thẻ 2", content: "Nội dung 2" },
  { img: "", date: "2026 - 2029", title: "Thẻ 3", content: "Nội dung 3" },
];

const tpl = document.getElementById("card-tpl");
const box = document.getElementById("cards");

data.forEach(({ img, date, title, content }) => {
  const node = tpl.content.cloneNode(true);
  const image = node.querySelector("img");
  image.src = img;
  image.alt = title;
  node.querySelector("span").textContent = date;
  node.querySelector("h1").textContent = title;
  node.querySelector("p").textContent = content;
  box.appendChild(node);
});
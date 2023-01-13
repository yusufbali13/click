const renBtn = document.querySelector("button");
renBtn.onclick = () => {
  const a = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const c = Math.floor(Math.random() * 255);

  document.body.style.background = "rgb(" + a + "," + b + "," + c + ")";

  const x = Math.floor(Math.random() * 255);
  const z = Math.floor(Math.random() * 255);
  const y = Math.floor(Math.random() * 255);

  btn1.style.background = "rgb(" + x + "," + z + "," + y + ")";
  h1.innerHTML = "RGB(" + a + "," + b + "," + c + ")";
  h1.style.color = "rgb(" + x + "," + z + "," + y + ")";
};

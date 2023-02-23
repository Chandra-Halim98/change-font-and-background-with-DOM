const ubahLatar = () => {
  const background = document.getElementById("background");
  const inputHexa = document.getElementById("inputHexa");

  background.style.backgroundColor = inputHexa.value;
};

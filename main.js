const targetObject1 = document.getElementById("targetObject1");
const targetObject2 = document.getElementById("targetObject2");
const selected = document.getElementById("selected");
const inputValue = document.getElementById("inputValue");

const ubahLatar = () => {
  const selectedItems = selected.options.selectedIndex;

  if (selectedItems == 1) {
    targetObject1.style.backgroundColor = inputValue.value;
  } else if (selectedItems == 2) {
    targetObject2.style.color = inputValue.value;
  } else if (selectedItems == 3) {
    targetObject2.style.fontSize = inputValue.value + "px";
  } else if (selectedItems == 4) {
    targetObject2.style.fontFamily = inputValue.value;
  } else if (selectedItems == 5) {
    targetObject1.style.width = inputValue.value + "px";
  } else {
    targetObject1.style.height = inputValue.value + "px";
  }
};

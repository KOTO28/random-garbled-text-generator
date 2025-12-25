const CHAR_CODE_MAX = 0xffff;

const lengthInput = document.getElementById("length-input");
const generateButton = document.getElementById("generate-btn");

function rand(max) {
  return Math.random() * max;
}

function generateRandomGarbledText(length) {
  let result = "";

  for (let i = 0; i < length; i++) {
    result += String.fromCharCode(rand(CHAR_CODE_MAX));
  }
  return result;
}

generateButton.addEventListener("click", () => {
  const length = parseInt(lengthInput.value);
  const garbledText = generateRandomGarbledText(length);
  alert(garbledText);
});

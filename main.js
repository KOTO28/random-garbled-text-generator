const CHAR_CODE_MAX = 0xffff;

const lengthInput = document.getElementById("length-input");
const generateButton = document.getElementById("generate-btn");
const outputArea = document.getElementById("output-area");
const copyButton = document.getElementById("copy-btn");

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
  // alert(garbledText);
  outputArea.value = garbledText;
  copyButton.innerText = copyButton.dataset.labelBefore;
});

copyButton.addEventListener("click", () => {
  navigator.clipboard.writeText(outputArea.value);
  copyButton.innerText = copyButton.dataset.labelAfter;
});

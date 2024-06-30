// INITIALIZE ELEMENTS

// Color Scheme Selection Section

const colorPicker = document.getElementById("favcolor");
const schemesOptions = document.getElementById("schemes");
const getColorSchemeBtn = document.getElementById("getColorScheme");

// Color Strip Section

const stripColor0 = document.querySelector(".color0");
const stripColor1 = document.querySelector(".color1");
const stripColor2 = document.querySelector(".color2");
const stripColor3 = document.querySelector(".color3");
const stripColor4 = document.querySelector(".color4");

// Hex Codes Section

const hexCode0 = document.getElementById("hex-code-0");
const hexCode1 = document.getElementById("hex-code-1");
const hexCode2 = document.getElementById("hex-code-2");
const hexCode3 = document.getElementById("hex-code-3");
const hexCode4 = document.getElementById("hex-code-4");

let fetchUrl = "";

getColorSchemeBtn.addEventListener("click", function () {
  let cleanHexCode = colorPicker.value.replace("#", "");
  fetchUrl = `https://www.thecolorapi.com/scheme?hex=${cleanHexCode}&mode=${schemesOptions.value}&count=5`;
  getColorScheme(fetchUrl);
});

function getColorScheme(fetchUrl) {
  fetch(fetchUrl)
    .then((res) => res.json())
    .then((data) => {
      stripColor0.style.backgroundColor = data.colors[0].hex.value;
      stripColor1.style.backgroundColor = data.colors[1].hex.value;
      stripColor2.style.backgroundColor = data.colors[2].hex.value;
      stripColor3.style.backgroundColor = data.colors[3].hex.value;
      stripColor4.style.backgroundColor = data.colors[4].hex.value;

      hexCode0.textContent = data.colors[0].hex.value;
      hexCode1.textContent = data.colors[1].hex.value;
      hexCode2.textContent = data.colors[2].hex.value;
      hexCode3.textContent = data.colors[3].hex.value;
      hexCode4.textContent = data.colors[4].hex.value;
    });
}

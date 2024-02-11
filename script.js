const createText = document.querySelector(".create-text");
const titleText = document.createElement("h3");
const inputText = document.createElement("input");
const showText = document.createElement("p");
let timeOutId;
titleText.textContent = "Введите текст!";
createText.style.display = "flex";
createText.style.flexDirection = "column";
createText.style.alignItems = "center";
createText.style.justifyContent = "center";
createText.style.gap = "10px";
createText.style.padding = "20%";

inputText.type = "text";
inputText.width = "46px";
inputText.height = "30px";
inputText.style.textAlign = "center";
showText.style.fontSize = "24px";
showText.style.fontWeight = "bold";
showText.style.textAlign = "center";
createText.append(titleText,inputText);

inputText.addEventListener("input", () => {
	clearTimeout(timeOutId);
	timeOutId = setTimeout(() => {
		showText.textContent = inputText.value;
		createText.append(showText);
	}, 300)

})


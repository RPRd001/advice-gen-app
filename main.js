const adviceContainer = document.querySelector(".advice-container");
const button = document.querySelector(".dice-button");

button.addEventListener("click", () => {
	fetch("https://api.adviceslip.com/advice")
		.then((response) => {
			return response.json();
		})
		.then((adviceData) => {
			const adviceObject = adviceData.slip;
			adviceContainer.innerText = `${adviceObject.advice}`;
		})
		.catch((error) => {
			alert("Error Fetching the Data from the API");
		});
});

const firstEmailInput = document.getElementById("first-email-input");
const firstError = document.getElementById("first-error");
const firstSubmit = document.getElementById("first-submit");

firstSubmit.addEventListener("click", submitFirst);

function submitFirst() {
	if (firstEmailInput.value === "") {
		firstError.innerHTML = "Email cannot be empty!";
		firstEmailInput.style.borderColor = "rgb(250, 88, 115)";
	} else {
		firstError.innerHTML = "";
		firstEmailInput.style.borderColor = "";
	}
}

const secondEmailInput = document.getElementById("second-email-input");
const secondError = document.getElementById("second-error");
const secondSubmit = document.getElementById("second-submit");

secondSubmit.addEventListener("click", submitSecond);

function submitSecond() {
	if (secondEmailInput.value === "") {
		secondEmailInput.style.borderColor = "rgb(250, 88, 115)";
		secondError.innerHTML = "Email cannot be empty!";
	} else {
		secondError.innerHTML = "";
		secondEmailInput.style.borderColor = "";
	}
}

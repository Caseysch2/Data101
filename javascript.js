window.onload = function () {
	new bootstrap.Collapse(document.getElementById('question1'));
}

function dataChosen(questionNumber) {
	document.querySelector("#question" + questionNumber + " select").disabled = true;
	new bootstrap.Collapse(document.getElementById("question" + questionNumber + "data"));

	var selectedIndex = document.querySelector("#question" + questionNumber + " select").selectedIndex;
	new bootstrap.Collapse(document.getElementById("question" + questionNumber + "option" + selectedIndex));
}

function optionChosen(questionNumber, answerIndex) {
	document.querySelectorAll("#question" + questionNumber + "data button").forEach((button) => button.disabled = true);

	new bootstrap.Collapse(document.getElementById("question" + questionNumber + "choice" + answerIndex));
	new bootstrap.Collapse(document.getElementById("question" + questionNumber + "results"));

	let nextDiv = "final";
	if (questionNumber <= 5) {
		nextDiv = "question" + (questionNumber + 1);
	}

	new bootstrap.Collapse(document.getElementById(nextDiv));


	setTimeout(function () {
		document.getElementById("question" + questionNumber + "results").scrollIntoView();
	}, 400);

}
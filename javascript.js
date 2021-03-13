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
	let nextDiv = "final";
	if (questionNumber <= 5) {
		nextDiv = "question" + (questionNumber + 1);
	}
	new bootstrap.Collapse(document.getElementById(nextDiv));

	setTimeout(function () {
		document.getElementById(nextDiv).scrollIntoView();
	}, 400);

}
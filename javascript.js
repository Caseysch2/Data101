var score = 0;

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

	if ((questionNumber === 1 && answerIndex === 0) ||
		(questionNumber === 2 && answerIndex === 1) ||
		(questionNumber === 3 && answerIndex === 1) ||
		(questionNumber === 4 && answerIndex === 1) ||
		(questionNumber === 5 && answerIndex === 0) ||
		(questionNumber === 6 && answerIndex === 1)) {
		score++;
	}

	if (questionNumber <= 5) {
		new bootstrap.Collapse(document.getElementById("question" + (questionNumber + 1)));
	} else {
		var resultText = "";
		switch (score) {
			case 0:
				resultText = "You didn't use the data well to make great decisions.";
				break;
			case 1:
			case 2:
			case 3:
				resultText = "You made some of the right decisions, but there's room for improvement.";
				break;
			case 4:
			case 5:
				resultText = "You made a lot of the right decisions, though some could have been better.";
				break;
			case 6:
				resultText = "You made all the right decisions, thanks to data!";
				break;
		}
		document.getElementById("results").innerHTML = resultText;
	}

	setTimeout(function () {
		document.getElementById("question" + questionNumber + "results").scrollIntoView();
	}, 400);
}
var score = 0;
const backgroundColors = [
	'rgba(255, 99, 132, 1)',
	'rgba(54, 162, 235, 1)',
	'rgba(255, 206, 86, 1)',
	'rgba(75, 192, 192, 1)',
	'rgba(153, 102, 255, 1)',
	'rgba(255, 159, 64, 1)',
	'rgba(75, 159, 64, 1)'
];

window.onload = function () {
	new bootstrap.Collapse(document.getElementById('question1'));
}

function dataChosen(questionNumber) {
	document.querySelector("#question" + questionNumber + " select").disabled = true;
	new bootstrap.Collapse(document.getElementById("question" + questionNumber + "data"));

	var selectedIndex = document.querySelector("#question" + questionNumber + " select").selectedIndex;
	drawChart(questionNumber, selectedIndex);
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

function drawChart(questionNumber, answerIndex) {
	var ctx = document.getElementById("question" + questionNumber + "chart").getContext('2d');
	var chartCode = questionNumber + "-" + answerIndex;

	switch (chartCode) {
		case "1-1":
			new Chart(ctx, {
				type: 'pie',
				data: {
					labels: ['Sally the Siamese', 'Toby the Terrier', 'Barry the Bulldog', 'Fred the Frog', 'Sabrina the Teenage Kit', 'Hugh the Husky', 'Other Pets'],
					datasets: [{
						data: [12486, 19486, 3678, 5146, 44658, 2513, 3788],
						backgroundColor: backgroundColors,
						borderColor: "white",
						borderWidth: 1
					}]
				},
				options: {
					legend: {
						position: 'bottom',
					},
					title: {
						display: true,
						text: "How Many Times Each Pet Has Been Tapped",
					},
				}
			});
			break;
		case "1-2":
			new Chart(ctx, {
				type: 'pie',
				data: {
					labels: ['Sally the Siamese', 'Toby the Terrier', 'Barry the Bulldog', 'Fred the Frog', 'Sabrina the Teenage Kit', 'Hugh the Husky', 'Other Pets'],
					datasets: [{
						data: [1246, 1946, 367, 516, 44, 253, 378],
						backgroundColor: backgroundColors,
						borderColor: "white",
						borderWidth: 1
					}]
				},
				options: {
					legend: {
						position: 'bottom',
					},
					title: {
						display: true,
						text: "Number of Users That Have Tapped On Each Pet",
					}
				}
			});
			break;
		case "3-1":
			new Chart(ctx, {
				type: 'bar',
				data: {
					labels: ['Android Phone', 'iPhone', 'Computer', 'iPad', 'Android Tablet'],
					datasets: [{
						data: [1246, 1346, 607, 3, 10],
						backgroundColor: backgroundColors,
						borderColor: "white",
						borderWidth: 1
					}]
				},
				options: {
					legend: {
						display: false,
					},
					title: {
						display: true,
						text: "Number of Times Game Was Installed On Each Platform",
					}
				}
			});
			break;
		case "3-2":
			new Chart(ctx, {
				type: 'pie',
				data: {
					labels: ["Mentions 'iPad'", "Mentions 'Bug'", "Mentions both", "Mentions neither"],
					datasets: [{
						data: [1, 34, 1, 64],
						backgroundColor: backgroundColors,
						borderColor: "white",
						borderWidth: 1
					}]
				},
				options: {
					legend: {
						position: 'bottom',
					},
					title: {
						display: true,
						text: "Percentage of Reviews Mentioning 'iPad' or 'Bug'",
					}
				}
			});
			break;
		case "3-3":
			new Chart(ctx, {
				type: 'bar',
				data: {
					labels: ['Android Phone', 'iPhone', 'iPad', 'Android Tablet'],
					datasets: [{
						data: [2300, 700, 346, 753],
						backgroundColor: backgroundColors,
						borderColor: "white",
						borderWidth: 1
					}]
				},
				options: {
					legend: {
						display: false,
					},
					title: {
						display: true,
						text: "Worldwide Users (In Millions)",
					}
				}
			});
			break;
		case "4-1":
			break;
		case "4-2":
			break;
		case "4-3":
			break;
		case "5-1":
			break;
		case "5-2":
			break;
		case "5-3":
			break;
		case "6-1":
			break;
		case "6-2":
			break;
		case "6-3":
			break;
		default:
			// Some options create images, not charts.
			document.getElementById("question" + questionNumber + "chart").style.display = 'none'
			new bootstrap.Collapse(document.getElementById("question" + questionNumber + "option" + answerIndex));
			break;
	}
}
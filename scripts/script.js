$(document).ready(function(){

	const randomAnswers = ['Yes', 'No', 'Maybe', 'Keep dreaming', 'Ask me again'];

// Repeat the question when the button is pressed:

	$(".oracle-button").click(function() {
		let customerQuestion = $("input[type='text']").val();
		$('#oracle-question').val('');
		if (customerQuestion.length) {
			$(".question-repeat").append("<span>" + customerQuestion + "</span>");
			randomAnswerGenerator();
		} else {
			alert ('Ask your question');
		}
	});

// Repeat the question when enter is pressed:

	$("input[type='text']").keypress(function(event){
		if(event.which === 13){
			if (customerQuestion.length) {
				var customerQuestion = $(this).val();
				$(".question-repeat").append("<span>" + customerQuestion + "</span>");
				randomAnswerGenerator();
			}
		}
	});

// Function for generating answer to the question;

	function randomAnswerGenerator() {
		let randAnsw = randomAnswers[Math.floor(Math.random()*randomAnswers.length)];
		$(".oracle-answer").append("<span>" + randAnsw + "</span>");
	}

});




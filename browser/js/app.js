console.log("hello world!");

const app = angular.module('FlashCards', []);

app.controller('FlashCardController', function($scope) {

	$scope.answered = false;

	$scope.flashCard = {
	    question: 'What is Angular?',
	    answers: [
	        { text: 'A front-end framework for great power!', correct: true },
	        { text: 'Something lame, who cares, whatever.', correct: false },
	        { text: 'Some kind of fish, right?', correct: false }
	    ]
	};

	$scope.answerQuestion = choice => {
		console.log("I am a method!", choice);
		if (!$scope.answered) {
			$scope.answered = true;
			// for (let answer in $scope.card.answers) {
			// 	console.log("answer.text", answer.text);
			// 	console.log("answer", $scope.card.answers[answer]);
			// 	// if (answer.text === answer) $scope.answeredCorrectly = answer.correct;
			// 	console.log(answer.correct);
			// }

			$scope.answeredCorrectly = choice.correct;
		}

	};

});

app.controller('MainController', function($scope) {

		$scope.flashCards = [
	    {
	        question: 'What is Angular?',
	        answers: [
	            { text: 'A front-end framework for great power!', correct: true },
	            { text: 'Something lame, who cares, whatever.', correct: false },
	            { text: 'Some kind of fish, right?', correct: false }
	        ]
	    },
	    {
	        question: 'What is a controller?',
	        answers: [
	            { text: 'Something that manages my front-end routes', correct: false },
	            { text: 'A function that allows me to manage a scope', correct: true },
	            { text: 'An Angular template', correct: false }
	        ]
	    },
	    {
	        question: 'What does {{ }} do?',
	        answers: [
	            { text: 'It runs some Javascript', correct: false },
	            { text: 'It looks for variables in HTML', correct: false },
	            { text: 'It runs an Angular expression that accesses my $scope', correct: true }
	        ]
	    }
	];

});
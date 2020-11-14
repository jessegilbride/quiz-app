/* Example store structure */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What color is broccoli?',
      answers: [
        'red',
        'orange',
        'pink',
        'green'
      ],
      correctAnswer: 'green'
    },
    {
      question: 'What is the current year?',
      answers: [
        '1970',
        '2015',
        '2019',
        '2005'
      ],
      correctAnswer: '2019'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

const quizSessionDetails = 
`
<div class="quiz-session-details flex-item-1x">
  <div class="quiz-score">Score: ${score}</div>
</div>
`;

const startScreenContent = 
`
<div class="start-screen">
  <p>${quizDescription}</p>
  <div class="btn-container">
    <button type="button" class="btn" class="linkToQuizScreen">Start Quiz</button>
  </div>
</div>
`;

const quizScreenContent = 
`
<div class="quiz-screen">
	<p>${currentQuestion}</p>
	<p class="questionFeedback">${questionFeedback}</p>
	<form action="">
		<fieldset>
			<legend>&nbsp; Question ${questionNumber} of ${totalQuestions} &nbsp;</legend>
			<!-- option template -->
			<div>
				<input type="radio" id="${radioButtonID}" value="${radioButtonValue}" name="${radioButtonGroup}">
				<label for="${radioButtonID}">${radioButtonText}</label>
			</div>
		</fieldset>
		<div class="btn-container">
			<button type="submit" class="btn">submit</button>
			<button type="button" class="btn">next</button>
		</div>
	</form>
</div>
`;

const endScreenContent = 
`
<div class="end-screen">
  <p>Your score is: ${quizFinalScore}</p>
  <div class="btn-container">
    <button type="button" class="btn" class="linkToStartScreen">Retake Quiz</button>
  </div>
</div>
`;

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store
function render() {}

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
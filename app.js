// @ts-check /* include typescript checker for VS Code */

const store = {
  questions: [
    {
      question: 'The main function of the kidney is...',
      answers: [
        'To control blood pressure',
        'To control body temperature',
        'To remove waste products from the body',
        'To help in digestion of food'
      ],
      correctAnswer: 'To remove waste products from the body'
    },
    {
      question: 'Which of these happens for an endothermic reaction?',
      answers: [
        'Heat is evolved',
        'Heat is absorbed',
        'Temperature increases',
        'Light is produced'
      ],
      correctAnswer: 'Heat is absorbed'
    },
    {
      question: 'Approximately how long does it takes energy generated in the core of the sun to reach the surface of the sun and be radiated?',
      answers: [
        'Three seconds',
        'Two weeks',
        'Five hundred years',
        'One thousand years'
      ],
      correctAnswer: 'One thousand years'
    },
    {
      question: 'Which type of tree grows from an acorn?',
      answers: [
        'Ash',
        'Lime',
        'Elm',
        'Oak'
      ],
      correctAnswer: 'Oak'
    },
    {
      question: 'Which natural phenomenon does a Seismologist study?',
      answers: [
        'Caves',
        'Earthquakes',
        'Mountains',
        'Sizes'
      ],
      correctAnswer: 'Earthquakes'
    }
  ],
  quizStarted: false,
  quizEnded: false,
  questionNumber: 0,
  score: 0
};


/********** TEMPLATE GENERATION FUNCTIONS **********/
// These functions return HTML templates.

function generateStartScreen() {
  // generate start screen content
  console.log('`generateStartScreen()` ran');
}

function generateQuizScreen() {
  // generate quiz screen content
  console.log('`generateQuizScreen()` ran');
}

function generateQuestionStatus() {
  // generate question status content
  console.log('`generateQuestionStatus()` ran');
}

function generateCurrentScore() {
  // generate current score content
  console.log('`generateCurrentScore()` ran');
}

function generateEndScreen() {
  // generate end screen content
  console.log('`generateEndScreen()` ran');
}


/********** RENDER FUNCTION(S) **********/
/* REQUIRED: app must include a render() function that regenerates the view each time the store is updated */

function render() {
  // conditionally replace the contents of the <main> tag based on state of store
  if        (!store.quizStarted) {
    console.log(`renderStartScreen() called`);
    // if quiz has not started, render the start screen.
    renderStartScreen();
  } else if (store.quizStarted && !store.quizEnded) {
    console.log(`renderQuizScreen() called`);
    // if quiz has started and isn't ended, render the current question.
    renderQuizScreen();
  } else if (store.quizEnded) {
    console.log(`renderEndScreen() called`);
    // if quiz has ended, render the end screen.
    renderEndScreen();
  }
}

function renderStartScreen() {
  // when called in render(), put start screen state into the view
}

function renderQuizScreen() {
  // when called in render(), put quiz screen state into the view
}

function renderEndScreen() {
  // when called in render(), put end screen state into the view
}


/********** EVENT HANDLER FUNCTIONS **********/
// These functions handle events (submit, click, etc)

function handleTheQuiz() {
  render();
  startTheQuiz();
  submitAnswer();
  goToNextQuestion()
  goToEndScreen();
  restartTheQuiz();
}

function startTheQuiz() {
  // when user clicks button, the quiz starts
  console.log('`startTheQuiz()` ran');
}

function submitAnswer() {
  // when user submits answer, show if it's correct or incorrect (with answer)
  console.log('`submitAnswer()` ran');
}

function goToNextQuestion() {
  // when user clicks button, show the next question
  console.log('`goToNextQuestion()` ran');
}

function goToEndScreen() {
  // when user clicks button (on last question), show the end screen
  console.log('`goToEndScreen()` ran');
}

function restartTheQuiz() {
  // when user clicks button, reset app state and show the start screen
  console.log('`restartTheQuiz()` ran');
}

// on page load, call handleTheQuiz() to begin the app flow
$(handleTheQuiz);

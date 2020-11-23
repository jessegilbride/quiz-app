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
    },
    {
      question: 'Which Of These Is A Wild Dog Native To Australia?',
      answers: [
        'Pongo',
        'Kangaroo',
        'Pupper',
        'Dingo'
      ],
      correctAnswer: 'Dingo'
    },
    {
      question: 'There are 206 bones in the human body. Where is the smallest one found?',
      answers: [
        'Nose',
        'Ear',
        'Foot',
        'Wrist'
      ],
      correctAnswer: 'Ear'
    },
    {
      question: 'Who Created The Law Of Motion That Dictates That ‘Every Action Has An Equal And Opposite Reaction’?',
      answers: [
        'Bill Nye',
        'Stephen Hawking',
        'Albert Einstein',
        'Isacc Newton'
      ],
      correctAnswer: 'Isacc Newton'
    },
    {
      question: 'Which Of These Is The World’s Largest Venomous Snake?',
      answers: [
        'Sidewinder',
        'Python',
        'King Cobra',
        'Rattlesnake'
      ],
      correctAnswer: 'King Cobra'
    },
    {
      question: 'When ice or snow changes directly into water vapor, it is called: ',
      answers: [
        'sublimation',
        'condensation',
        'evaporation',
        'precipitation'
      ],
      correctAnswer: 'sublimation'
    }
  ],
  quizDescription: "This is a quiz to test your knowledge about general science topics.",
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

/********** TEMPLATE GENERATION FUNCTIONS **********/

function generateStartScreen () {
  return `
  <div class="start-screen">
    <iframe src="https://giphy.com/embed/Um3ljJl8jrnHy" frameBorder="0" class="giphy-embed" allowFullScreen aria-hidden="true"></iframe>
    <p>${store.quizDescription}</p>
    <div class="btn-container">
      <button type="button" class="btn js-start-quiz-button">Start Quiz</button>
    </div>
  </div>`;
}

function generateRadioButtonComponent(answer) {
  // the regex {.replace(/ /g, '')} strips whitespece to create unique IDs
  return `
  <div>
    <input type="radio" id="${answer.replace(/ /g, '')}" value="${answer}" name="answer" required>
    <label for="${answer.replace(/ /g, '')}">${answer}</label>
  </div>`;
}

function generateRadioButtonsGroup(answers) {
  // map over the answers for the current question, make them into radio buttons
  const radioButtonsExport = answers.map((answer) => generateRadioButtonComponent(answer));
  // return the combined the array of HTML radio buttons
  return radioButtonsExport.join("");
}

function generateQuizScreen() {
  const answersArray = store.questions[store.questionNumber].answers;
  const radioButtonsGroup = generateRadioButtonsGroup(answersArray);
  return `
  <div class="quiz-screen">
    <div class="quiz-score">Score: ${store.score}</div>
    <form>
      <fieldset>
        <legend>&nbsp; Question ${store.questionNumber+1} of ${store.questions.length} &nbsp;</legend>
        <p class="question-text">${store.questions[store.questionNumber].question}</p>
        ${radioButtonsGroup}
      </fieldset>
      <p class="js-question-feedback"></p>
      <div class="btn-container">
        <button type="submit" class="btn js-question-submit-button">submit</button>
        <button type="button" class="btn js-question-next-button">next</button>
      </div>
    </form>
  </div>`;
}

function generateEndScreen () {
  return `
  <div class="end-screen">
    <p>Your score is: ${store.score}</p>
    <div class="btn-container">
      <button type="button" class="btn js-restart-quiz-button">Retake Quiz</button>
    </div>
    <!-- <div>
      <img src="http://img3.wikia.nocookie.net/__cb20130929182657/degrassi/images/9/9d/Too-much-science-gif.gif" alt="woman exhausted from doing science" />
    </div> -->
  </div>`;
}


/********** RENDER FUNCTION(S) **********/
// conditionally replace the contents of <main> as the user moves through the quiz
function render() {
  if (store.quizStarted === false) {
    // put the start screen in the view
    $('main').html(generateStartScreen());
  } else if (store.questionNumber < store.questions.length) {
    // put the quiz screen(s) in the view
    $('main').html(generateQuizScreen());
    // $('.js-question-next-button').hide();
    $('.js-question-next-button').prop({disabled: true});
  } else {
    // put the end screen in the view
    $('main').html(generateEndScreen());
  }
}

/********** EVENT HANDLER FUNCTIONS **********/

function handleStartTheQuiz() {
  // when user clicks button, the quiz starts
  $('main').on('click', '.js-start-quiz-button', function(event) {
    event.preventDefault;
    store.quizStarted = true;
    // re-render to change to quiz screen
    render();
  });
}

function handleSubmitAnswer() {
  // when user submits an answer, display whether correct or incorrect (w/ answer)
  $('main').on('submit', 'form', function(event) {
    event.preventDefault();

    const userAnswer = $('input[type=radio]:checked').val();
    const correctAnswer = store.questions[store.questionNumber].correctAnswer;
    if (userAnswer === correctAnswer) {
      $('.js-question-feedback').text(`
      Correct!
      `);
      store.score++;
    } else {
      $('.js-question-feedback').text(`
      Incorrect. The answer is "${correctAnswer}"
      `);
    }

    $('input[type=radio]').prop({disabled: true});

    // $('.js-question-submit-button').hide();
    // $('.js-question-next-button').show();
    $('.js-question-submit-button').prop({disabled: true});
    $('.js-question-next-button').prop({disabled: false});
    
  });
}

function handleGoToNextQuestion() {
  $('main').on('click', '.js-question-next-button', function() {
    store.questionNumber++;
    render();
  });
}

function handleRestartTheQuiz() {
  $('main').on('click', '.js-restart-quiz-button', function() {
    store.score = 0;
    store.questionNumber = 0;
    store.quizStarted = false;
    render();
  });
}

// call render function, load all handler functions into memory
function handleTheQuiz() {
  render();
  handleStartTheQuiz();
  handleSubmitAnswer();
  handleGoToNextQuestion();
  handleRestartTheQuiz();
}

// on page load, call handleTheQuiz() to begin the app flow
$(handleTheQuiz);

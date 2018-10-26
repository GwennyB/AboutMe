'use strict';

// // Greet visitor and find out his/her name.
var userName = prompt('Hello! My name is Gwen - what\'s yours?');
alert('Welcome, ' + userName + '! I\'m so glad you\'ve stopped by for a visit.  Heads up, ' + userName + '...there are questions ahead to see how well you know me! You can answer with \'yes\', \'no\', \'y\', or \'n\' (but it isn\'t case sensitive, so you can yell if you want to). See this blue button below that says "OK"? Click it when you\'re ready to test your Gwen Trivia.');

var totalCorrect = 0;

for(var i=1; i<6; i++) {
  totalCorrect += firstFiveQuestions(i);
}


// Reset user instructions
alert('Whew... those were tough! But you can handle more. The next questions are a bit tougher because they aren\'t yes or no. I\'ll give you a few chances for each to be fair. Ready?');
console.log ('totalCorrect', totalCorrect);
totalCorrect += questionBoeing();
console.log ('totalCorrect', totalCorrect);
totalCorrect += questionCities();
console.log ('totalCorrect', totalCorrect);

// alert('Congrats, ' + userName + '! You got ' + totalCorrect + ' answers correct.');

// Report total correct answers
if (totalCorrect>=4) {
  alert('Congrats, ' + userName + ', you got ' + totalCorrect + ' answers correct! You seem to know me pretty well. When did we last chat over a coffee? Whenever it was, we\'re certainly overdue... let\'s get together again soon!');
} else {
  alert('Gosh, ' + userName + ', you only got ' + totalCorrect + ' answers correct. We should probably get to know one another better over a cup of coffee. Reach out - let\'s chat!');
}

function firstFiveQuestions (arraysIndex) {
  //array for questions
  var questions = [0, 'Is my middle name \'Yvonne\'?', 'Was I born in Texas?', 'Did I go to college?', 'Do I have 2 kids?', 'Will I get married in Hawaii?'];
  console.log(questions);
  //array for answers
  var correctAnswers = [0, 'YES', 'YES', 'YES', 'NO', 'NO'];
  //array for positive feedback to user
  var positiveFeedback = [0, ' My middle name is indeed \'Yvonne\'. I think my mother was heavily drugged when she named me.', ' I was born in Houston. Almost in a taxi, in fact.  How cliche...', ' I studied Mechanical Engineering at The University of Texas at Austin.  And I ROCKED it.', ' I have 3 including my stepchildren! They\'re all grown and gone...sad face.', ' In fact, my dear friends will be married in Hawaii in March, just 2 weeks before I\'m married in FIJI (squeeeee!). I\'ll be on the first flight to Honolulu after I graduate from Code 401!'];
  var correct = 'That\'s right! (Wait...did you peek at the answer?)';
  //prompt with question and log response
  var response = prompt(questions[arraysIndex]).toUpperCase();
  console.log('response', response);
  var correctTally = 0; // total correct tally for return to main code
  console.log('correctTally', correctTally);
  //check response against correct answer
  if (response === correctAnswers[arraysIndex].substring(0,1) || response === correctAnswers[arraysIndex]) {  //use truncated answer to accommodate shorthand response
    // positive feedback to user
    alert(correct + positiveFeedback[arraysIndex]);
    correctTally++;
    console.log('correctTally', correctTally);
  } else {
    // constructive feedback to user
    alert('Awww...too bad. It\'s like you don\'t even know me.');
  }
  //return correct boolean (for use in total correct tally)
  console.log('correctTally', correctTally);
  return correctTally;
}
function questionBoeing() {
  // Question about Boeing tenure
  var correctTally = 0; // total correct tally for return to main code
  console.log('correctTally', correctTally);
  console.log('answerBoeing', answerBoeing);
  var triesLeft = 4; //set initial number of tries for this question
  console.log('triesLeft', triesLeft);
  var answerBoeing = parseInt(prompt('How many (whole) years did I work at Boeing? (You have ' + triesLeft + ' tries.)'));
  var correctBoeing = ('I spent 11 years at Boeing, and I learned more than I can recount.');
  console.log('answerBoeing', answerBoeing);
  
  // Answer evaluation and response for question about Boeing tenure
  while(triesLeft > 1) {
    if (answerBoeing === 11) {
      alert('That\'s right! ' + correctBoeing);
      correctTally++; // iterate tally since response is correct
      console.log('correctTally', correctTally);
      break;
    } else if (answerBoeing < 11 && answerBoeing > 0) {
      triesLeft--; // decrement guess counter for incorrect response
      console.log('triesLeft', triesLeft);
      answerBoeing = parseInt(prompt('Nope... more than that. (You have ' + triesLeft + ' tries left.)'));
    } else if (answerBoeing > 11 && answerBoeing < 41) {
      triesLeft--; // decrement guess counter for incorrect response
      console.log('triesLeft', triesLeft);
      answerBoeing = parseInt(prompt('Nope... less than that. (You have ' + triesLeft + ' tries left.)'));
    } else {
      triesLeft--; // decrement guess counter for incorrect response
      console.log('triesLeft', triesLeft);
      answerBoeing = parseInt(prompt('That\'s not even possible! Try again. (You have ' + triesLeft + ' tries left.)'));
    }
  }
  if (triesLeft === 0) {
    alert('That was a tough one. ' + correctBoeing);
  }
  return correctTally;
}

// Question about cities
function questionCities () {
  var correctTally = 0; // total correct tally for return to main code
  console.log('correctTally', correctTally);
  console.log('answerCities', answerCities);
  console.log('triesLeft', triesLeft);
  var triesLeft = 6; // set initial guess counter for this question
  console.log('triesLeft', triesLeft);
  var cities = ['KIRKLAND', 'MILL CREEK', 'SNOHOMISH']; // acceptable responses
  var answerCities = prompt('Can you name a Washington city where I\'ve lived? (You have ' + triesLeft + ' tries.)').toUpperCase(); //initial prompt; burns 1st try
  console.log('triesLeft', triesLeft);
  --triesLeft; // decrement guess counter for initial response
  console.log('triesLeft', triesLeft);
  var correctCities = ('I\'ve called Mill Creek, Snohomish, and Kirkland home since moving to Washington in 2008.');
  console.log('answerCities', answerCities);
  
  // Answer evaluation and response for question about cities
  while(triesLeft > 0) {
    answerCities = prompt('I haven\'t lived in ' + answerCities + '. Try again - you\'ve got ' + triesLeft + ' tries left.').toUpperCase();
    switch(answerCities) {
    case cities[0]:
    case cities[1]:
    case cities[2]:
      console.log('entered case cities');
      alert('Yep! ' + correctCities);
      console.log ('before correct tally');
      correctTally++; // iterate tally since response is correct
      console.log ('after correct tally');
      console.log('correctTally', correctTally);
      triesLeft = 0; // eject from while loop
      break;
    default:
      console.log('triesLeft', triesLeft);
      --triesLeft; // decrement guess counter for incorrect response
      console.log('triesLeft', triesLeft);
      if (triesLeft === 0) {
        alert('That was a tough one. ' + correctCities);
      }
    }
  }
  return correctTally;
}

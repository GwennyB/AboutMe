'use strict';

// Greet visitor and find out his/her name.
var userName = prompt('Hello! Let\'s get to know one another. What\'s your name?');
alert('Welcome, ' + userName + '! I\'m so glad you\'ve stopped by for a visit.  Heads up, ' + userName + '...there are questions ahead to see how well you know me! You can answer with \'yes\', \'no\', \'y\', or \'n\' (but it isn\'t case sensitive, so you can yell if you want to). See this blue button below that says "OK"? Click it when you\'re ready to test your Gwen Trivia.');

var totalCorrect = 0;

// Ask first 5 questions
for(var i=1; i<6; i++) {
  totalCorrect += firstFiveQuestions(i);
}

// Reset user instructions for q6-7
alert('Whew... those were tough! But you can handle more. The next questions are a bit tougher because they aren\'t yes or no. I\'ll give you a few chances for each to be fair. Ready?');
console.log ('totalCorrect', totalCorrect);
totalCorrect += questionBoeing();
console.log ('totalCorrect', totalCorrect);
totalCorrect += questionAirplanes();
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
  var questions = [0, 
    'Have I earned a bachelor\'s degree?', 
    'As an engineer, have I worked only in aerospace?', 
    'Have I received formal training in engineering and technical leadership?', 
    'Have I led multi-disciplinary teams?', 
    'Will I remain within my current expertise until retirement?'];
  console.log(questions);
  //array for answers
  var correctAnswers = [0, 
    'YES', 
    'NO', 
    'YES', 
    'YES', 
    'NO'];
    //array for positive feedback to user
  var moreDeets = [0, 
    ' I studied Mechanical Engineering at The University of Texas at Austin.  And I ROCKED it.', 
    ' Before university, I explored mechanical drafting and design in areas including industrial food processing equipment, silicon wafer processing products, and military specialty tools research and development.  Those experiences readied me for both educational and follow-on career opportunities.', 
    ' Not only did did I graduate from the Leadership | Development | Excellence (LDE) program at Boeing, I also earned an Engineering Leadership certificate from University of Washington\'s Professional & Continuing Education (PCE) school.', 
    ' I\'ve earned and enjoyed a steep upward trajectory in my career. At Boeing, I led mechanical, aerospace, and electrical engineers covering an assortment of airplane environmental control systems. My Greenpoint team consisted primarily of mechanical engineers, but spanning both systems and structural disciplines. At HKX, I directed all of Engineering and Technical Publications.', 
    ' I have a deeply ingrained need for personal growth. At the moment, I\'ve endeavored to add software development to my list of skills, and I\'ve no doubt that I\'ll add a few more before I call it quits.'];
    // canned response for right answer - to be appended with more specific detail in 'moreDeets[]'
  console.log('response', response); // confirm that user response is accepted into var 'response'
  
  // initiate and confirm correct answer tallying
  var correctTally = 0; // total correct tally for return to main code
  console.log('correctTally', correctTally);
  //prompt with question and log response
  var response = prompt(questions[arraysIndex]).toUpperCase();
  
  //check response against correct answer
  if (response === correctAnswers[arraysIndex].substring(0,1) || response === correctAnswers[arraysIndex]) {  //use truncated answer to accommodate shorthand response
    // correct response - give feedback and 'moreDeets' to user
    alert('That\'s right! (Wait...did you peek?)' + moreDeets[arraysIndex]);
    correctTally++;
    console.log('correctTally', correctTally);
  } else {
    // incorrect response - give feedback and 'moreDeets' to user
    alert('Awww...too bad. It\'s like you don\'t even know me.' + moreDeets[arraysIndex]);
  }
  // return 0 for incorrect and 1 for correct (to be added to 'totalCorrect' for final tally)
  console.log('correctTally', correctTally);
  return correctTally;
}

function questionBoeing() {  // this is 'question 6' in the assignment
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

// Question about airplanes
function questionAirplanes () {   // this is 'question 7' in the assignment
  var correctTally = 0; // total correct tally for return to main code
  console.log('correctTally', correctTally);
  var airplanes = ['777-200', '777-300', '747-400', '767-300F', 'KC-46A']; // acceptable responses
  var triesLeft = 6; // first decrement after answer comparison
  console.log('triesLeft', triesLeft);
  var answerAirplanes = prompt('Can you name a Boeing airplane program that I worked on? (You have ' + triesLeft + ' tries.)').toUpperCase(); 
  console.log('answerAirplanes', answerAirplanes);
  var correctAirplanes = ('During my Boeing tenure, I worked on the ' + airplanes[0] + ', the ' + airplanes[1] + ', the ' + airplanes[2] + ', the ' + airplanes[3] + ', and the ' + airplanes[4] + '. What a phenomenal experience that was!');
  
  // Answer evaluation and response for question about airplanes
  while(triesLeft > 1 && !correctTally) {
    triesLeft--; // decrement guess counter 
    console.log('triesLeft', triesLeft);
    for (var traverse = 0; traverse < airplanes.length; traverse++) {
      console.log(airplanes[traverse].substring(0,3));
      if (answerAirplanes === airplanes[traverse] || answerAirplanes === airplanes[traverse].substring(0,3)) {
        correctTally++;
        console.log('correctTally', correctTally);
        break;
      }
    }
    
    if (correctTally) {
      alert('Yep! ' + correctAirplanes);
    } else if (!triesLeft) {
      alert('You\'re out of guesses...that was a tough one! ' + correctAirplanes);
    } else {
      answerAirplanes = prompt('I didn\'t work on the ' + answerAirplanes + '. Try again - you\'ve got ' + triesLeft + ' tries left.').toUpperCase();
      console.log('answerAirplanes', answerAirplanes);
    }
  }
  return correctTally;
}
'use strict';

// Greet visitor and find out his/her name.
var userName = prompt('Hello! My name is Gwen - what\'s yours?');
alert('Welcome, ' + userName + '! I\'m so glad you\'ve stopped by for a visit.  Heads up, ' + userName + '...there are questions ahead to see how well you know me! You can answer with \'yes\', \'no\', \'y\', or \'no\' (but it isn\'t case sensitive, so you can yell if you want to). See this blue button below that says "OK"? Click it when you\'re ready to test your Gwen Trivia.');

// Create canned responses for right and wrong answers (to avoid having to repeat them).
var correct = 'That\'s right! (Wait...did you peek at the answer?)';
var incorrect = 'Awww...too bad. It\'s like you don\'t even know me.';

// set up tally for correct answers
var totalCorrect = 0;

// // Question about middle name
// console.log('answerMiddlename', answerMiddlename);
// var answerMiddlename = prompt('Is my middle name \'Yvonne\'?').toUpperCase();
// var correctMiddlename = ' My middle name is indeed \'Yvonne\'. I think my mother was heavily drugged when she named me.';
// console.log('answerMiddlename', answerMiddlename);

// // Answer evaluation and response for question about middle name
// if (answerMiddlename === 'Y' || answerMiddlename === 'YES') {
//   alert(correct + correctMiddlename);
//   totalCorrect++;
// } else if (answerMiddlename === 'N' || answerMiddlename === 'NO') {
//   alert(incorrect + correctMiddlename);
// } else {
//   alert('Oops! You answered ' + answerMiddlename + ', which isn\'t y/yes/n/no. Didn\'t we talk about how to do this? ' + correctMiddlename);
// }

// // Question about birthplace
// console.log('answerBirthplace', answerBirthplace);
// var answerBirthplace = prompt('Was I born in Texas?').toUpperCase();
// var correctBirthplace = ' I was born in Houston. Almost in a taxi, in fact.  How cliche...';
// console.log('answerBirthplace', answerBirthplace);

// // Answer evaluation and response for question about birthplace
// if (answerBirthplace === 'Y' || answerBirthplace === 'YES') {
//   alert(correct + correctBirthplace);
//   totalCorrect++;
// } else if (answerBirthplace === 'N' || answerBirthplace === 'NO') {
//   alert(incorrect + correctBirthplace);
// } else {
//   alert('Oops! You answered ' + answerBirthplace + ', which isn\'t y/yes/n/no. Didn\'t we talk about how to do this? ' + correctBirthplace);
// }

// // Question about college
// console.log('answerCollege', answerCollege);
// var answerCollege = prompt('Did I go to college?').toUpperCase();
// var correctCollege = ' I studied Mechanical Engineering at The University of Texas at Austin.  And I ROCKED it.';
// console.log('answerCollege', answerCollege);

// // Answer evaluation and response for question about college
// if (answerCollege === 'Y' || answerCollege === 'YES') {
//   alert(correct + correctCollege);
//   totalCorrect++;
// } else if (answerCollege === 'N' || answerCollege === 'NO') {
//   alert(incorrect + correctCollege);
// } else {
//   alert('Oops! You answered ' + answerCollege + ', which isn\'t y/yes/n/no. Didn\'t we talk about how to do this? ' + correctCollege);
// }

// // Question about kids
// console.log('answerKids', answerKids);
// var answerKids = prompt('Do I have 2 kids?').toUpperCase();
// var correctKids = ' I have 3 including my stepchildren! They\'re all grown and gone...sad face.';
// console.log('answerKids', answerKids);

// // Answer evaluation and response for question about kids
// if (answerKids === 'N' || answerKids === 'NO') {
//   alert(correct + correctKids);
//   totalCorrect++;
// } else if (answerKids === 'Y' || answerKids === 'YES') {
//   alert(incorrect + correctKids);
// } else {
//   alert('Oops! You answered ' + answerKids + ', which isn\'t y/yes/n/no. Didn\'t we talk about how to do this? ' + correctKids);
// }

// // Question about wedding
// console.log('answerWedding', answerWedding);
// var answerWedding = prompt('Will I get married in Hawaii?').toUpperCase();
// var correctWedding = ' In fact, my dear friends will be married in Hawaii in March, just 2 weeks before I\'m married in FIJI (squeeeee!). I\'ll be on the first flight to Honolulu after I graduate from Code 401!';
// console.log('answerWedding', answerWedding);

// // Answer evaluation and response for question about wedding
// if (answerWedding === 'N' || answerWedding === 'NO') {
//   alert(correct + correctWedding);
//   totalCorrect++;
// } else if (answerWedding === 'Y' || answerWedding === 'YES') {
//   alert(incorrect + correctWedding);
// } else {
//   alert('Oops! You answered ' + answerWedding + ', which isn\'t y/yes/n/no. Didn\'t we talk about how to do this? ' + correctWedding);
// }

// Reset user instructions
alert('Whew... those were tough! But you can handle more. The next questions are a bit tougher because they aren\'t yes or no. I\'ll give you a few chances for each to be fair. Ready?');

// Question about Boeing tenure
console.log('answerBoeing', answerBoeing);
var triesLeft = 4; 
var answerBoeing = parseInt(prompt('How many (whole) years did I work at Boeing? (You have ' + triesLeft + ' tries.)'));
var correctBoeing = ('I spent 11 years at Boeing, and I learned more than I can recount.');
console.log('answerBoeing', answerBoeing);

// Answer evaluation and response for question about Boeing tenure
while(triesLeft > 1) {
  if (answerBoeing === 11) {
    alert('That\'s right! ' + correctBoeing);
    totalCorrect++;
    break;
  } else if (answerBoeing < 11 && answerBoeing > 0) {
    triesLeft--;
    answerBoeing = parseInt(prompt('Nope... more than that. (You have ' + triesLeft + ' tries left.)'));
  } else if (answerBoeing > 11 && answerBoeing < 41) {
    triesLeft--;
    answerBoeing = parseInt(prompt('Nope... less than that. (You have ' + triesLeft + ' tries left.)'));
  } else {
    triesLeft--;
    answerBoeing = parseInt(prompt('That\'s not even possible! Try again. (You have ' + triesLeft + ' tries left.)'));
  }
}
if (triesLeft === 0) {
  alert('That was a tough one. ' + correctBoeing);
}



// Report total correct answers
if (totalCorrect>=4) {
  alert('Congrats, ' + userName + ', you got ' + totalCorrect + ' answers correct! You seem to know me pretty well. When did we last chat over a coffee? Whenever it was, we\'re certainly overdue... let\'s get together again soon!');
} else {
  alert('Gosh, ' + userName + ', you only got ' + totalCorrect + ' answers correct. We should probably get to know one another better over a cup of coffee. Reach out - let\'s chat!');
}
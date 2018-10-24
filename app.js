'use strict';

// Greet visitor and find out his/her name.
var userName = prompt('Hello! My name is Gwen - what\'s yours?');
alert('Welcome, ' + userName + '! I\'m so glad you\'ve stopped by for a visit.  Heads up, ' + userName + '...there are questions ahead to see how well you know me! You can answer with \'yes\', \'no\', \'y\', or \'no\' (but it isn\'t case sensitive, so you can yell if you want to). See this blue button below that says "OK"? Click it when you\'re ready to test your Gwen Trivia.');

// Create canned responses for right and wrong answers (to avoid having to repeat them).
var correct = 'That\'s right! (Wait...did you peek at the answer?)';
var incorrect = 'Awww...too bad. It\'s like you don\'t even know me.';

// Question 1
console.log('answer1', answer1);
var answer1 = prompt('Is my middle name \'Yvonne\'?').toUpperCase();
var correct1 = ' My middle name is indeed \'Yvonne\'. I think my mother was heavily drugged when she named me.';
console.log('answer1', answer1);

// Answer evaluation and response for question 1
if (answer1 === 'Y' || answer1 === 'YES') {
  alert(correct + correct1);
} else if (answer1 === 'N' || answer1 === 'NO') {
  alert(incorrect + correct1);
} else {
  alert('Oops! You answered ' + answer1 + ', which isn\'t y/yes/n/no. Didn\'t we talk about how to do this? ' + correct1);
}

// Question 2
console.log('answer2', answer2);
var answer2 = prompt('Was I born in Texas?').toUpperCase();
var correct2 = ' I was born in Houston. Almost in a taxi, in fact.  How cliche...';
console.log('answer2', answer2);

// Answer evaluation and response for question 2
if (answer2 === 'Y' || answer2 === 'YES') {
  alert(correct + correct2);
} else if (answer2 === 'N' || answer2 === 'NO') {
  alert(incorrect + correct2);
} else {
  alert('Oops! You answered ' + answer2 + ', which isn\'t y/yes/n/no. Didn\'t we talk about how to do this? ' + correct2);
}

// Question 3
console.log('answer3', answer3);
var answer3 = prompt('Did I go to college?').toUpperCase();
var correct3 = ' I studied Mechanical Engineering at The University of Texas at Austin.  And I ROCKED it.';
console.log('answer3', answer3);

// Answer evaluation and response for question 3
if (answer3 === 'Y' || answer3 === 'YES') {
  alert(correct + correct3);
} else if (answer3 === 'N' || answer3 === 'NO') {
  alert(incorrect + correct3);
} else {
  alert('Oops! You answered ' + answer3 + ', which isn\'t y/yes/n/no. Didn\'t we talk about how to do this? ' + correct3);
}

// Question 4
console.log('answer4', answer4);
var answer4 = prompt('Do I have 2 kids?').toUpperCase();
var correct4 = ' I have 3 including my stepchildren! They\'re all grown and gone...sad face.';
console.log('answer4', answer4);

// Answer evaluation and response for question 4
if (answer4 === 'N' || answer4 === 'NO') {
  alert(correct + correct4);
} else if (answer4 === 'Y' || answer4 === 'YES') {
  alert(incorrect + correct4);
} else {
  alert('Oops! You answered ' + answer4 + ', which isn\'t y/yes/n/no. Didn\'t we talk about how to do this? ' + correct4);
}

// Question 5
console.log('answer5', answer5);
var answer5 = prompt('Will I get married in Hawaii?').toUpperCase();
var correct5 = ' In fact, my dear friends will be married in Hawaii in March, just 2 weeks before I\'m married in FIJI (squeeeee!). I\'ll be on the first flight to Honolulu after I graduate from Code 401!';
console.log('answer5', answer5);

// Answer evaluation and response for question 5
if (answer5 === 'N' || answer5 === 'NO') {
  alert(correct + correct4);
} else if (answer5 === 'Y' || answer5 === 'YES') {
  alert(incorrect + correct5);
} else {
  alert('Oops! You answered ' + answer5 + ', which isn\'t y/yes/n/no. Didn\'t we talk about how to do this? ' + correct5);
}
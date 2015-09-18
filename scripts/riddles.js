// Riddles ========================================
var riddle1 = "What occurs once in a minute, twice in a moment and never in one thousand years?";
var answer1 = "m";
var riddle2 = "Poor people have it. Rich people need it. If you eat it you die. What is it?";
var answer2 = "nothing";

function clickRedButton(){
    alert('WHO DARES PRESS THE BIG RED BUTTON?!?!');
    confirm('Are you sure you wanted to do that?');
    alert("It really doesn't matter way though. You pressed it.");
    alert('BEWARE MY WRATH!!!');
    alert('There is no escape.');
    alert('You will suffer. Mua ha ha ha ha!!!');
    alert('You are doomed.');
    alert('There is no end to this nightmare.');
    alert('Mua ha ha ha ha!!!');
    alert('Do you rue it?!?');
    alert('I warned you... this is your fault');
}

function clickRiddle1(){
    var userAnswer = prompt(riddle1);
    if (userAnswer == answer1){
        alert("That's correct!");                
    }
    else {
        alert("Nope! The answer is the letter " + answer1 + "!");
    }
}

function clickRiddle2(){
    var userAnswer = prompt(riddle2);
    if (userAnswer == answer2) {
        alert("That's correct!");
    }
    else {
        alert("Nope! The answer is " + answer2 + "!");
    }
}
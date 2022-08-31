// Challenge 1: Your age in Days

function ageInDays() {
let birthYear = prompt('What year were you born... My friend?');
let ageInDays2 = (2022 - birthYear) * 365;
let h1 = document.createElement('h1');
let textAnswer = document.createTextNode('You are ' + ageInDays2 + ' days old');
h1.setAttribute('id', 'ageInDays');
h1.appendChild(textAnswer);
document.getElementById('flexbox-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();
}

// Challenge 2: Image Generator

function generateImage() {
    let image = document.createElement('img');
    let div = document.getElementById('flex-image-gen');
    image.src = "http://placekitten.com/g/200/300";
   div.appendChild(image);
}

// Challenge 3 Rock, Paper, Scissors

function rpsGame(yourChoice) {
    console.log(yourChoice);
    let humanChoice, botChoice;
     humanChoice = yourChoice.id;

     botChoice = numberToChoice(randomToRpsInt());
     console.log('computer choice:', botChoice);
    
     results = decideWinner(humanChoice, botChoice); // [0, 1] human lost | bot won
     console.log(results);
    
     message = finalMessage(results); // {'message': 'You won!', 'color': 'green'}
     console.log(message);
     
     rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randomToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice) {
    let rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
    };

let yourScore = rpsDatabase[yourChoice][computerChoice];
let computerScore = rpsDatabase[computerChoice][yourChoice];

return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return {'message': 'You Lost!', 'color': 'red'};
    } else if (yourScore === 0.5) {
        return {'message': 'You Tied!', 'color': 'yellow'};
    } else {
        return {'message': 'You Won!', 'color': 'green'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    let imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    // Let's remove all the images 
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    let humanDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px blue;'>"
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px red;'>"
   
    document.getElementById('flexbox-rps-div').appendChild(humanDiv);
    document.getElementById('flexbox-rps-div').appendChild(messageDiv);
    document.getElementById('flexbox-rps-div').appendChild(botDiv);
}

// Challenge 4: Change the Color of all the Buttons
let all_buttons = document.getElementsByTagName('button');

let copyAllButtons = [];
for (const element of all_buttons) {
    copyAllButtons.push(element.classList[1]);
}

console.log(copyAllButtons);

function buttonColorChange(buttonThing) {
    if (buttonThing.value === 'red') {
        buttonRed();
    } else if (buttonThing.value === 'green') {
      buttonsGreen();
    } else if (buttonThing.value === 'reset') {
      buttonColorReset();
    } else if (buttonThing.value === 'random') {
      randomColors();
    }
}

function buttonRed(){
    for (const element of all_buttons) {
        element.classList.remove(element.classList[1]);
        element.classList.add('btn-danger');
    }
}

function buttonsGreen(){
    for (const element of all_buttons) {
        element.classList.remove(element.classList[1]);
        element.classList.add('btn-success'); 
    }
}

function buttonColorReset() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);   
    }
}

function randomColors(){
    let choices = ['btn-success', 'btn-warning', 'btn-danger', 'btn-primary'];

    for (let i = 0; i < all_buttons.length; i++) {
        let randomNumber = Math.floor(Math.random() * 4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);
    }
}

// Challenge 5: Blackjack
let blackjackGame = {
    'you': {'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score': 0},
    'dealer': {'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0},
};

const YOU = blackjackGame['you']
const DEALER = blackjackGame['dealer']

const hitSound = new Audio('')

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);

function blackjackHit() {
    let cardImage = document.createElement('img');
    cardImage.src = '';
    document.querySelector(YOU['div']).appendChild(cardImage);
}


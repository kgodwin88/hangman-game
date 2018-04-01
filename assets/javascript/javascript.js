// Array that contains the words to be guessed
var words = ["Basketball", "Baseball", "Football", "Soccer", "Tennis", "Touchdown", "Fieldgoal", "Homerun", "Single", "Double", "Triple", "Free Throw", 
"Goal", "Strike", "Racquet", "Ball", "Shotgun", "Running Back", "Quarterback", "Reciever", "Shooting Guard", "Point Guard", "Center", "Power Forward", "Small Forward",
"Cornerback", "Defensive End", "Fullback", "Linebacker", "Defensive Tackle", "Offensive Tackle","Kicker", "Safety", "Punter", "Grand Slam", "Outfielder", "infielder", 
"Pitcher", "Catcher", "Midfielder", "Goalkeeper"]


var wins = 0;
var losses = 0;
  
function hangman(){
    word = words[Math.floor(Math.random()*words.length)];
    wrongLetter = [];
    guesses = Math.floor(word.length * .75);
    guess = word.split("");
    compare = word.split("");
    for(var i=0; i < guess.length; i++){
        guess[i] = guess[i].replace(/[a-z]/gi, "_");
    };
    
    letters = guess.join(" ");
    console.log(word);
    console.log(letters);
    comparison = compare.map(function(x){ return x.toUpperCase() });
    document.getElementById("display").innerHTML = letters;
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("loss").innerHTML = losses;
    document.getElementById("letters").innerHTML = wrongLetter;
    document.getElementById("guesses").innerHTML = guesses;
document.onkeypress = function (event) {
    var input = /[a-zA-Z]/;
    var userGuess = event.key;
    userGuessLower = userGuess.toLowerCase();
    userGuessUpper = userGuess.toUpperCase();
    
    if(userGuess.match(input)){
        for(var i = 0; i < compare.length; i++){
            if(compare[i] === userGuessLower || compare[i] === userGuessUpper){
            var position = i;
            guess.splice(position, 1, userGuessUpper);
            letters = guess.join(" ");
            document.getElementById("display").innerHTML = letters;
            compare.map(function(x){ return x.toUpperCase() });
            
            if(comparison.toString() === guess.toString()){
                setTimeout(function(){ alert("You Guessed Correctly"); }, 500);
                setTimeout(function(){ winner(); }, 1000);
            };
            };
         };
        // Checking to see if the lower case of the user guess is the index of the word to be guessed
        // This will return a value of -1 if the user guess is not in compare
        var wrong = compare.indexOf(userGuessLower);
        // Checking to see if the upper case of the user guess is the index of the word to be guessed
        // This will return a value of -1 if the user guess is not in compare
        var wrong2 = compare.indexOf(userGuessUpper);
         
        if(wrong === -1 && wrong2 === -1 && userGuessUpper !== "ENTER"){

            if(wrongLetter.indexOf(userGuessUpper) > -1){
                alert("The letter " + userGuessUpper + " has already been used");
            }
            else{
                guesses --;
                wrongLetter.push(userGuessUpper);
                document.getElementById("letters").innerHTML = wrongLetter;
                document.getElementById("guesses").innerHTML = guesses;
                    if(guesses === 0){
                        setTimeout(function(){ alert("Sorry you lost"); }, 500);
                        setTimeout(function(){ loser(); }, 1000);
                    };
                };
            };    
        
    }
    else{
        alert("Please select a letter key");
    };
};
};
hangman();

 function winner(){
    wins ++;
    hangman();
};
function loser(){
    losses ++;
    hangman();
};


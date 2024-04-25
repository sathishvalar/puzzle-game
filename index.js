
var msg1 = document.getElementById("msg1")
var msg2 = document.getElementById("msg2")
var msg3 = document.getElementById("msg3")

var result = Math.floor(Math.random()*10);
console.log(result);


var no_of_guess=0;
var guessed_num=[];


function play()
{
    var guess = document.getElementById("guess").value;
    
        if (no_of_guess >= 3) 
        {
            alert("You've used all your guesses!");
            guessInput.disabled = true;
            guessButton.disabled = true;
            return;
        
    }
    else{
        no_of_guess = no_of_guess+1;
        guessed_num.push(guess);

        if(guess > result)
        {
            msg1.textContent="Your guess is low";
            msg2.textContent ="No of game guesses:"+no_of_guess;
            msg3.textContent="Guessed Numbers are :"+guessed_num;

        }
        else if(guess < result)
        {
            msg1.textContent="Your guess is high";
            msg2.textContent ="No of game guesses:"+no_of_guess;
            msg3.textContent="Guessed Numbers are :"+guessed_num;

        }
        else if(guess ==result)
        {
            msg1.textContent="You Win";
            msg2.textContent ="The lucky no is:"+result;
            msg3.textContent="you are win :" +no_of_guess+ "guesses"
            alert("You Win");
        }

    }
}
let btn = document.getElementById('btn')
let output = document.getElementById('outputtext');

let number = [Math.floor(Math.random() * 100)]
let running = true;

btn.addEventListener('click', function(){
    let input = document.getElementById('userinput').value;
    if(input > number) {
        output.innerHTML = "oops! You guessed too high, TRY AGAIN!"
    }
    else if(input < number) {
        output.innerHTML = "oops! You guessed too low, TRY AGAIN!"
    }
    else if (input == number) {
        output.innerHTML = `Congratulations! Your guess was correct, the answer was ${number}.`
    }
    else{
        output.innerHTML = "Please enter a valid number"
    }
})
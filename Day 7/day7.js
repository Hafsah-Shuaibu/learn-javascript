// without default parameter

function hafsah(name, gender, age){
    console.log("my name is" + name + "i am a" + gender + "and i am" + age + "years old");
} hafsah ()

// with default parameter

function hafsah(name = "hafsah", gender = "female", age = 25){
    console.log("my name is " + name + " i am a " + gender + " and i am " + age + " years old");
} hafsah()

// rest parameter

function kitchen(...items) {
    console.log(items)
}

const item1 = "cutter";
const item2 = "pot";
const item3 = "fridge";

kitchen(item1, item2, item3);


//// functions


function changeText() {
   alert('welcome')
}

function myWork() {
    let a = "Hello ";
    let b = document.getElementById('name').value;
    let c = ', welcome to our site!';
    let message = a + b + c;
    const output = document.getElementById('messageOutput');
    output.style.display = 'block';
    output.innerHTML = message;

    
}
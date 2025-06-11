//using getElementById()

const greeting = document.getElementById("greeting");
greeting.style.background = "purple"

//Using getElementsByClassname()

const foods = document.getElementsByClassName("foods");
foods[0].style.backgroundColor = "red"
foods[2].style.backgroundColor = "green"

//Using getElementsByTagName()

const h2Tags = document.getElementsByTagName("h2");
h2Tags[0].style.background = "blue"
h2Tags[2].style.fontSize = "50px"
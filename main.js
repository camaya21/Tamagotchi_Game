const startButton = document.getElementById("startButton");
startButton.addEventListener("click", myFunction1);
startButton.addEventListener("click", myFunction2);
startButton.addEventListener("click", myFunction3);
function myFunction1() {
    for (let i = 0; i <=10; i++)
    document.getElementById("hungerCount").innerHTML = (i);
}
function myFunction2() {
    for (let i = 0; i <=10; i++)
    document.getElementById("hungerCount").innerHTML = (i);
}
function myFunction3() {
    for (let i = 0; i <=10; i++)
    document.getElementById("hungerCount").innerHTML = (i);
}
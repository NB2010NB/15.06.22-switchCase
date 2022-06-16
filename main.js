//*******1******* */

function printLogNumber() {
    let numberUser = +document.getElementById("inputUser").value;
    switch (numberUser) {
        case 3:
            console.log("hello");
            break;
        case 5:
            console.log("good bye");
            break;
        case 7:
            console.log("thankyou");
            break;
        default:
            console.log("There is no appropriate message");
    }
}

//**********2************ */

function printToDoc() {
    let userName = document.getElementById("nameUser").value;
    let res = document.getElementById("pic")
    switch (userName) {
        case "jacob":
            pic.innerHTML = userName;
            break;
        case "nathan":
            pic.innerHTML = userName.toUpperCase();
            break;

        case "DALYA":
            pic.innerHTML = userName.toLowerCase();
            break;
        default:
            pic.innerHTML = "There is no appropriate message";
    }
}

//**********3*********** */

function printLog() {
    let numUser = document.getElementById("numUser").value;
    let numUser2 = document.getElementById("numUser2").value;
    let userType = document.getElementById("typeUser").value;
    let result;
    let resultText = document.getElementById("divNumber");
    switch (userType) {
        case '+':
            result = +numUser + +numUser2

            break;
        case '-':
            result = +numUser - +numUser2
            break;
        case '*':
            result = +numUser * +numUser2
            break;
        case '/':
            result = +numUser / +numUser2
            break;
        default:
            resultText.innerText = "known open"
            break;
    }
    resultText.innerText = result
}

//*********4****** */
function printColorText() {
    let textUser = document.getElementById("text").value;
    let colorUser = document.getElementById("color").value;
    let sizeUser = document.getElementById("size").value;
    let divUser = document.getElementById("divColorText");
    divUser.innerText = textUser;
    divUser.style.color = colorUser;
    divUser.style.fontSize = sizeUser + "px";
}

//*********5********* */
function printElement() {
    let userColor = document.getElementById("color").value;
    let userLocation = document.getElementById("location").value;
    let topLeft = document.getElementById("Tleft").value;
    let div_element;

    switch (userLocation) {
        case topLeft:

            div_element.innerText = "natan"
            break;
    }




}
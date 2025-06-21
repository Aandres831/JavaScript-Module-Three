let nameU = prompt("What's your name?");

if (nameU === null || nameU.trim() === "") {
    console.error("Error: Please enter a valid name.");
    alert("Error: Please enter a valid name.");
} else {
    let age = parseInt(prompt("How old are you?"));

    if (!isNaN(age) && age > 0) {
        if (age < 18) {
            let yearsLeft = 18 - age;
            let message = ` Hello ${nameU}, you are underage. Only ${yearsLeft} year(s) left until adulthood. Keep learning and enjoying coding!`;
            console.log(message);
            alert(message);
        } else {
            let message = ` Hello ${nameU}, you are an adult.  Get ready for great opportunities in the world of programming!`;
            console.log(message);
            alert(message);
        }
    } else {
        console.error("Error: Please enter a valid age using numbers.");
        age = parseInt(prompt("Invalid age. Please enter a valid number:"));
        if (!isNaN(age) && age > 0) {
            if (age < 18) {
                let yearsLeft = 18 - age;
                let message = ` Hello ${nameU}, you are underage. Only ${yearsLeft} year(s) left until adulthood. Keep learning and enjoying coding!`;
                console.log(message);
                alert(message);
            } else {
                let message = ` Hello ${nameU}, you are an adult.  Get ready for great opportunities in the world of programming!`;
                console.log(message);
                alert(message);
            }
        } else {
            console.error("Error: Failed twice. Please restart and enter a valid age.");
        }
    }
}


// function getValue() {
//     const inputElement = document.getElementById("captureName");
//     const valor = inputElement.value;
//     console.log(valor);
// }






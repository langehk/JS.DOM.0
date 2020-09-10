
function validateForm(){

    let date = document.getElementById('inputDate').value;
    let range = document.getElementById('range').value;
    let number = document.getElementById('inputNumber').value;
 
    if(date == "" || range == "" || number == ""){ //Tjekker om formlen er tom
        alert("Form must be filled"); 
        return false;
    }

    /*Disse to parametre måler den ikke på - I don't know why! */
    if(isNaN(number) | number < 0 | number > 100){ //Tjekker om det er et nummer, og om det er mellem 0 og 100
        alert("Enter a number between 0 and 100");
        return false;
    }
    /*Disse to parametre måler den ikke på*/
    if(range < -279 | range > 6000) { //Kelvin skal være mellem -279 og 6000
        alert("Range is between -279 and 6000 Kelvin")
        return false;
    }

    return true;

}




function insertContent(){

    let center = document.getElementById("center");

    let h1 = document.createElement('h1');
    let h1t = document.createTextNode('never');

    h1.style.color = 'yellow';

    h1.appendChild(h1t);


    center.appendChild(h1);


}
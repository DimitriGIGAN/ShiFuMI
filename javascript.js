var userSign = "";
var computerSign = "";


function changeImage(signe) {

    if (signe == 'ciseaux') {
        document.getElementById("imgClickAndChange").src = "image/l36613_-_ciseaux_inox_boucles_plastiques.jpg";
        userSign = 'ciseaux';
    } else if (signe == 'feuille') {
        document.getElementById("imgClickAndChange").src = "image/Papier-toilette-en-rouleaux-DELCOURT-2-plis-108-rouleaux.jpg";
        userSign = 'feuille';
    }
    else {
        document.getElementById("imgClickAndChange").src = "image/Pierre.jpeg";
        userSign = 'pierre';
    }
    comparaison();
}
function counter() {
    var clicks = document.getElementById('clicker').innerHTML
    clicks++
    document.getElementById('clicker').innerHTML = clicks;

    if (clicks > 3) {
        clicks = 0;
        document.getElementById('clicker').innerHTML = clicks;
        document.getElementById("p1").style.backgroundColor = "black";
        document.getElementById("p2").style.backgroundColor = "black";
        document.getElementById("p3").style.backgroundColor = "black";
        document.getElementById("p4").style.backgroundColor = "black";
        document.getElementById("p5").style.backgroundColor = "black";
        document.getElementById("p6").style.backgroundColor = "black";
    }
    if (clicks == 1) {
        document.getElementById("p1").style.backgroundColor = "red";
        document.getElementById("p4").style.backgroundColor = "red";
    }
    else if (clicks == 2) {
        document.getElementById("p2").style.backgroundColor = "orange";
        document.getElementById("p5").style.backgroundColor = "orange";
    }
    else if (clicks == 3) {
        document.getElementById("p3").style.backgroundColor = "green";
        document.getElementById("p6").style.backgroundColor = "green";
    }
}

function random() {
    var random = Math.round(Math.random() * 3)
    if (random == 1) {
        document.getElementById("random").src = "image/Pierre.jpeg"
        computerSign = 'pierre';
    }
    if (random == 2) {
        document.getElementById("random").src = "image/Papier-toilette-en-rouleaux-DELCOURT-2-plis-108-rouleaux.jpg"
        computerSign = 'feuille';
    }
    if (random == 3) {
        document.getElementById("random").src = "image/l36613_-_ciseaux_inox_boucles_plastiques.jpg"
        computerSign = 'ciseaux';
    }
    console.log(userSign);
    console.log(computerSign);
}

function comparaison() {
    if (userSign == computerSign) {
        alert('Draw');
        console.log('draw');
    }
    else if (userSign == 'ciseaux' && computerSign == 'pierre' || userSign == 'pierre' && computerSign == 'feuille' || userSign == 'feuille' && computerSign == 'ciseaux') {
        alert('lose');
        console.log('lose');
    }
    else {
        alert('Win');
        console.log('win');
    }
}
function Nom() {

    var username = prompt("NOM");

    document.getElementById('name').innerText = username;
}


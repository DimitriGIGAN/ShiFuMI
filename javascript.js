function test() {
    document.getElementById("iddetests").innerText="ceci est test de mr gramino"
    
}
function changeImage() {

        if (document.getElementById("imgClickAndChange").src == "image/l36613_-_ciseaux_inox_boucles_plastiques.jpg") 
        {
            document.getElementById("imgClickAndChange").src = "image/0000-2625965e8d18aa4468ff70920506c9e7-1.png";
        }
        else 
        {
            document.getElementById("imgClickAndChange").src = "image/l36613_-_ciseaux_inox_boucles_plastiques.jpg";
        }
    }
    function changeImage2() {

        if (document.getElementById("imgClickAndChange").src == "image/Papier-toilette-en-rouleaux-DELCOURT-2-plis-108-rouleaux.jpg") 
        {
            document.getElementById("imgClickAndChange").src = "image/0000-2625965e8d18aa4468ff70920506c9e7-1.png";
        }
        else 
        {
            document.getElementById("imgClickAndChange").src = "image/Papier-toilette-en-rouleaux-DELCOURT-2-plis-108-rouleaux.jpg";
        }
    }
    function changeImage3() {

        if (document.getElementById("imgClickAndChange").src == "image/Pierre.jpeg") 
        {
            document.getElementById("imgClickAndChange").src = "image/0000-2625965e8d18aa4468ff70920506c9e7-1.png";
        }
        else 
        {
            document.getElementById("imgClickAndChange").src = "image/Pierre.jpeg";
        }
    }
    function counter(){
        var clicks = document.getElementById('clicker').innerHTML
        clicks++
        document.getElementById('clicker').innerHTML = clicks;
        
        if(clicks > 3){
            clicks = 0;
            document.getElementById('clicker').innerHTML = clicks;
        }
        }
        
    function random() {
        var random = Math.round(Math.random()*3)
        if (random == 1){
       
       console.log("pierre");
            document.getElementById("random").src = "image/Pierre.jpeg"
        }
        if (random == 2){
            console.log("feuille"); document.getElementById("random").src = "image/Papier-toilette-en-rouleaux-DELCOURT-2-plis-108-rouleaux.jpg"
    }
        if (random == 3) {
            console.log("ciceaux");document.getElementById("random").src = "image/l36613_-_ciseaux_inox_boucles_plastiques.jpg"
    }
    }
    function color() {
        document.getElementById("p1").style.background = "blue"; 
        if (color) {
            
        }
    }
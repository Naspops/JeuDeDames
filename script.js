var bool=true;


//INIT GRILLE ET COULEUR CASE
tab="<table>"
for(var l=0; l<10; l++){
	tab += "<tr>";
	for(var c=0; c<10; c++){
		if(bool){
			tab += "<td id=\"C"+c+"-L"+l+"\" class=\"beige\"></td>";
			bool=!bool;
		}
		else{
			tab += "<td id=\"C"+c+"-L"+l+"\" class=\"marron\"></td>";
			bool=!bool;	
		}	
	}
	bool=!bool;
	tab += "</tr>"; //fin de ligne
}
tab += "</table>";
document.getElementById('element').innerHTML = tab;



function placement(){
<<<<<<< HEAD
	for(var j=0; j<10; j++){
		if(j%2==0){
			document.getElementById('cell-c'+j+'-L0').innerHTML += "<img style=width:40px;height:40px; src='image/PION_N.png' id=\"img-c"+j+"-L0\">";
			document.getElementById('cell-c'+j+'-L2').innerHTML += "<img style=width:40px;height:40px; src='image/PION_N.png' id=\"img-c"+j+"-L2\">";
			document.getElementById('cell-c'+j+'-L9').innerHTML += "<img style=width:40px;height:40px; src='image/PION_B.png' id=\"img-c"+j+"-L9\">";
			document.getElementById('cell-c'+j+'-L7').innerHTML += "<img style=width:40px;height:40px; src='image/PION_B.png' id=\"img-c"+j+"-L7\">";
		}else{
			document.getElementById('cell-c'+j+'-L1').innerHTML += "<img style=width:40px;height:40px; src='image/PION_N.png' id=\"img-c"+j+"-L1\">";
			document.getElementById('cell-c'+j+'-L3').innerHTML += "<img style=width:40px;height:40px; src='image/PION_N.png' id=\"img-c"+j+"-L3\">";
			document.getElementById('cell-c'+j+'-L8').innerHTML += "<img style=width:40px;height:40px; src='image/PION_B.png' id=\"img-c"+j+"-L8\">";
			document.getElementById('cell-c'+j+'-L6').innerHTML += "<img style=width:40px;height:40px; src='image/PION_B.png' id=\"img-c"+j+"-L6\">";
=======
	for(var c=0; c<10; c++){
		if(c%2==0){
			document.getElementById('C'+c+'-L0').innerHTML += "<img style=width:40px;height:40px; src='image/PION_N' id=\"img-c"+c+"-L0\">";
			document.getElementById('C'+c+'-L2').innerHTML += "<img style=width:40px;height:40px; src='image/PION_N' id=\"img-c"+c+"-L2\">";
			document.getElementById('C'+c+'-L9').innerHTML += "<img style=width:40px;height:40px; src='image/PION_B' id=\"img-c"+c+"-L9\">";
			document.getElementById('C'+c+'-L7').innerHTML += "<img style=width:40px;height:40px; src='image/PION_B' id=\"img-c"+c+"-L7\">";
		}else{
			document.getElementById('C'+c+'-L1').innerHTML += "<img style=width:40px;height:40px; src='image/PION_N' id=\"img-c"+c+"-L1\">";
			document.getElementById('C'+c+'-L3').innerHTML += "<img style=width:40px;height:40px; src='image/PION_N' id=\"img-c"+c+"-L3\">";
			document.getElementById('C'+c+'-L8').innerHTML += "<img style=width:40px;height:40px; src='image/PION_B' id=\"img-c"+c+"-L8\">";
			document.getElementById('C'+c+'-L6').innerHTML += "<img style=width:40px;height:40px; src='image/PION_B' id=\"img-c"+c+"-L6\">";
>>>>>>> 115b253beeed7aa1d0ac8b6241872f188a514680
		}
	}		
}

/*
function verifJouable(){
	bool = true
	for (var l=0; l<10; l++){
		for(var c=O; c<10; c++){
			if(bool){
				document.getElementById('C'+c+'-L'+l).addEventListener("mouseout", function(){document.getElementById(this.id).className = "marron"});
			}
			else{
				document.getElementById('C'+c+'-L'+l).addEventListener("mouseout", function(){document.getElementById(this.id).className = "beige"});
			}
		}
	}

<<<<<<< HEAD
function jouer(){

}


function deplacement(){

=======
>>>>>>> 115b253beeed7aa1d0ac8b6241872f188a514680
}
*/







var t1 = 60;
$(".compteur").append("<p>"+t1+"</p>");

function decr(){
	t1 = t1-1;
	$(".compteur").html("<p>"+t1+"</p>");
}

$(".compteur").on("click", function(){
	setInterval(decr, 1000);
});

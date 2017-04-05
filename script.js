var bool=true;


//INIT GRILLE ET COULEUR CASE
tab="<table>"
for(var i=0; i<10; i++){
	tab += "<tr>";
	for(var j=0; j<10; j++){
		if(bool){
			tab += "<td id=\"cell-c"+j+"-L"+i+"\" class=\"beige\"></td>";
			bool=!bool;
		}
		else{
			tab += "<td id=\"cell-c"+j+"-L"+i+"\" class=\"marron\"></td>";
			bool=!bool;	
		}	
	}
	bool=!bool;
	tab += "</tr>"; //fin de ligne
}
tab += "</table>";
document.getElementById('element').innerHTML = tab;



function placement(){
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
		}
	}		

	for(var j=0; j<10; j++){
		if(j%2==0){
			document.getElementById('cell-c'+j+'-L3').addEventListener("mouseout", function(){document.getElementById(this.id).className = "marron"});
			document.getElementById('cell-c'+j+'-L6').addEventListener("mouseout", function(){document.getElementById(this.id).className = "beige"});
		}
		else{
			document.getElementById('cell-c'+j+'-L3').addEventListener("mouseover", function(){document.getElementById(this.id).className = "rouge"});
			document.getElementById('cell-c'+j+'-L6').addEventListener("mouseover", function(){document.getElementById(this.id).className = "rouge"});
			document.getElementById('cell-c'+j+'-L3').addEventListener("mouseout", function(){document.getElementById(this.id).className = "beige"});
			document.getElementById('cell-c'+j+'-L6').addEventListener("mouseout", function(){document.getElementById(this.id).className = "marron"});
		}
	}
}


function jouer(){

}


function deplacement(){

}







var t1 = 60;
$(".compteur").append("<p>"+t1+"</p>");

function decr(){
	t1 = t1-1;
	$(".compteur").html("<p>"+t1+"</p>");
}

$(".compteur").on("click", function(){
	setInterval(decr, 1000);
});

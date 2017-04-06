var bool=true;


//INIT GRILLE ET COULEUR CASE
function initGrille(){
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
}



function placement(){
	initGrille();
	for(var c=0; c<10; c++){
		if(c%2==0){
			document.getElementById('C'+c+'-L0').innerHTML += "<img style=width:40px;height:40px; src='image/PION_N.png' id=\"img-C"+c+"-L0\">";
			document.getElementById('C'+c+'-L2').innerHTML += "<img style=width:40px;height:40px; src='image/PION_N.png' id=\"img-C"+c+"-L2\">";
			document.getElementById('C'+c+'-L9').innerHTML += "<img style=width:40px;height:40px; src='image/PION_B.png' id=\"img-C"+c+"-L9\">";
			document.getElementById('C'+c+'-L7').innerHTML += "<img style=width:40px;height:40px; src='image/PION_B.png' id=\"img-C"+c+"-L7\">";
		}else{
			document.getElementById('C'+c+'-L1').innerHTML += "<img style=width:40px;height:40px; src='image/PION_N.png' id=\"img-C"+c+"-L1\">";
			document.getElementById('C'+c+'-L3').innerHTML += "<img style=width:40px;height:40px; src='image/PION_N.png' id=\"img-C"+c+"-L3\">";
			document.getElementById('C'+c+'-L8').innerHTML += "<img style=width:40px;height:40px; src='image/PION_B.png' id=\"img-C"+c+"-L8\">";
			document.getElementById('C'+c+'-L6').innerHTML += "<img style=width:40px;height:40px; src='image/PION_B.png' id=\"img-C"+c+"-L6\">";
		}
	}		
}


function verifJouable(){
	bool = true
	for (var l=0; l<10; l++){
		for(var c=O; c<10; c++){
			if(bool){
				document.getElementById('C'+c+'-L'+l).addEventListener("mouseout", function(){document.getElementById(this.id).className = "marron"});
				bool=!bool;
			}
			else{
				document.getElementById('C'+c+'-L'+l).addEventListener("mouseout", function(){document.getElementById(this.id).className = "beige"});
				bool=!bool;
			}
		}
		bool=!bool;
	}
}

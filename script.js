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
	for(var c=0; c<10; c++){
		if(c%2==0){
			document.getElementById('C'+c+'-L0').innerHTML += "<img  onclick='deplacement()' style=width:40px;height:40px; src='image/PION_N.png' id=\"img-c"+c+"-L0\" class=pion>";
			document.getElementById('C'+c+'-L2').innerHTML += "<img  onclick='deplacement()' style=width:40px;height:40px; src='image/PION_N.png' id=\"img-c"+c+"-L2\" class=pion>";
			document.getElementById('C'+c+'-L9').innerHTML += "<img  onclick='deplacement()' style=width:40px;height:40px; src='image/PION_B.png' id=\"img-c"+c+"-L9\" class=pion>";
			document.getElementById('C'+c+'-L7').innerHTML += "<img  onclick='deplacement()' style=width:40px;height:40px; src='image/PION_B.png' id=\"img-c"+c+"-L7\" class=pion>";
		}else{
			document.getElementById('C'+c+'-L1').innerHTML += "<img  onclick='deplacement()' style=width:40px;height:40px; src='image/PION_N.png' id=\"img-c"+c+"-L1\" class=pion>";
			document.getElementById('C'+c+'-L3').innerHTML += "<img  onclick='deplacement()' style=width:40px;height:40px; src='image/PION_N.png' id=\"img-c"+c+"-L3\" class=pion>";
			document.getElementById('C'+c+'-L8').innerHTML += "<img  onclick='deplacement()' style=width:40px;height:40px; src='image/PION_B.png' id=\"img-c"+c+"-L8\" class=pion>";
			document.getElementById('C'+c+'-L6').innerHTML += "<img  onclick='deplacement()' style=width:40px;height:40px; src='image/PION_B.png' id=\"img-c"+c+"-L6\" class=pion>";
		}
	}		
}


function deplacement(){
	var p = $(".pion");
	console.log(p.parent().attr("id"));
}



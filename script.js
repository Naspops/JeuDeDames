
var bool=true;
tab="<table>"
for(var i=0; i<8; i++){
	tab += "<tr>";
	for(var j=0; j<8; j++){
		if(bool){
			tab += "<td id=\"cell-c"+j+"-L"+i+"\" class=\"white\"></td>";
			bool=!bool;
		}
		else{
			tab += "<td id=\"cell-c"+j+"-L"+i+"\" class=\"black\"></td>";
			bool=!bool;
		}
	}
	bool=!bool;
	tab += "</tr>";
}
tab += "</table>";
document.getElementById('element').innerHTML = tab;

function placement(){
	for(var j=0; j<8; j++){
			document.getElementById('cell-c'+j+'-L1').innerHTML += "<img src='image/bp.gif' id=\"img-c"+j+"-L1\">";
			document.getElementById('cell-c'+j+'-L6').innerHTML += "<img src='image/wp.gif' id=\"img-c"+j+"-L6\">";
	}
	document.getElementById('cell-c0-L0').innerHTML += "<img src='image/br.gif' id=\"img-c0-L0\">";	
	document.getElementById('cell-c1-L0').innerHTML += "<img src='image/bn.gif' id=\"img-c1-L0\">";	
	document.getElementById('cell-c2-L0').innerHTML += "<img src='image/bb.gif' id=\"img-c2-L0\">";	
	document.getElementById('cell-c3-L0').innerHTML += "<img src='image/bq.gif' id=\"img-c3-L0\">";	
	document.getElementById('cell-c4-L0').innerHTML += "<img src='image/bk.gif' id=\"img-c4-L0\">";	
	document.getElementById('cell-c5-L0').innerHTML += "<img src='image/bb.gif' id=\"img-c5-L0\">";	
	document.getElementById('cell-c6-L0').innerHTML += "<img src='image/bn.gif' id=\"img-c6-L0\">";	
	document.getElementById('cell-c7-L0').innerHTML += "<img src='image/br.gif' id=\"img-c7-L0\">";

	document.getElementById('cell-c0-L7').innerHTML += "<img src='image/wr.gif' id=\"img-c0-L7\">";	
	document.getElementById('cell-c1-L7').innerHTML += "<img src='image/wn.gif' id=\"img-c1-L7\">";	
	document.getElementById('cell-c2-L7').innerHTML += "<img src='image/wb.gif' id=\"img-c2-L7\">";	
	document.getElementById('cell-c3-L7').innerHTML += "<img src='image/wq.gif' id=\"img-c3-L7\">";	
	document.getElementById('cell-c4-L7').innerHTML += "<img src='image/wk.gif' id=\"img-c4-L7\">";	
	document.getElementById('cell-c5-L7').innerHTML += "<img src='image/wb.gif' id=\"img-c5-L7\">";	
	document.getElementById('cell-c6-L7').innerHTML += "<img src='image/wn.gif' id=\"img-c6-L7\">";	
	document.getElementById('cell-c7-L7').innerHTML += "<img src='image/wr.gif' id=\"img-c7-L7\">";

	document.getElementById('cell-c1-L0').addEventListener("mouseover", function(){document.getElementById(this.id).className = "rouge"});	
	document.getElementById('cell-c6-L0').addEventListener("mouseover", function(){document.getElementById(this.id).className = "rouge"});
	document.getElementById('cell-c1-L0').addEventListener("mouseout", function(){document.getElementById(this.id).className = "black"});	
	document.getElementById('cell-c6-L0').addEventListener("mouseout", function(){document.getElementById(this.id).className = "white"});


	document.getElementById('cell-c1-L7').addEventListener("mouseover", function(){document.getElementById(this.id).className = "rouge"});	
	document.getElementById('cell-c6-L7').addEventListener("mouseover", function(){document.getElementById(this.id).className = "rouge"});
	document.getElementById('cell-c1-L7').addEventListener("mouseout", function(){document.getElementById(this.id).className = "white"});	
	document.getElementById('cell-c6-L7').addEventListener("mouseout", function(){document.getElementById(this.id).className = "black"});		


	for(var j=0; j<8; j++){
		document.getElementById('cell-c'+j+'-L1').addEventListener("mouseover", function(){document.getElementById(this.id).className = "rouge"});
		document.getElementById('cell-c'+j+'-L6').addEventListener("mouseover", function(){document.getElementById(this.id).className = "rouge"});
		if(j%2==0){
			document.getElementById('cell-c'+j+'-L1').addEventListener("mouseout", function(){document.getElementById(this.id).className = "black"});
			document.getElementById('cell-c'+j+'-L6').addEventListener("mouseout", function(){document.getElementById(this.id).className = "white"});
		}
		else{
			document.getElementById('cell-c'+j+'-L1').addEventListener("mouseout", function(){document.getElementById(this.id).className = "white"});
			document.getElementById('cell-c'+j+'-L6').addEventListener("mouseout", function(){document.getElementById(this.id).className = "black"});
		}
	}	
}

var t1 = 15;
var t2 = 15;
$("#cmpt1").append("J1 : "+t1);
$("#cmpt2").append("J2 : "+t2);
function decr1(){
	t1 = t1-1;
	$("#cmpt1").html("J1 : "+t1);
	if(t1==0){
		interval2();
		jpp2 = 1;
		jpp1 = undefined;
		t1=15;
		$("#cmpt1").html("J1 : "+t1);
	}
}

function decr2(){
	t2 = t2-1;
	$("#cmpt2").html("J2 : "+t2);
	if(t2==0){
		interval1();
		jpp1 = 1;
		jpp2 = undefined;
		t2=15;
		$("#cmpt2").html("J2 : "+t2);
	}
}


var timerjoueur1;
var timerjoueur2;

function interval1(){
	clearInterval(timerjoueur2);
	timerjoueur1 = setInterval(decr1, 1000);
}

function interval2(){
	clearInterval(timerjoueur1);
	timerjoueur2 = setInterval(decr2, 1000);
}

var jpp1 = undefined;
var jpp2 = undefined;

$("#cmpt1").on("click", function(){
	if(jpp1==undefined){
		interval1();
		jpp1 = 1;
		jpp2 = undefined;
		t2=15;
		$("#cmpt1").html("J1 : "+t1);
	}
});

$("#cmpt2").on("click", function(){
	if(jpp2==undefined){
		interval2();
		jpp2 = 1;
		jpp1 = undefined;
		t1=15;
		$("#cmpt2").html("J2 : "+t2);
	}
});

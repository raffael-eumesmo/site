var numslide=1;
mostrarslide(numslide); 

function mudarslide(ns){ 
	mostrarslide(numslide += ns);
}

function mostrarslide(ns){
	var slides=document.getElementsByClassName("slide");
	
	if(ns > slides.length){ // ultimo para o 1°
		numslide=1;
	}
	if(ns < 1){  // 1º para o ultimo
		numslide=slides.length;
	}
	for(var i=0;i<slides.length;i++){ // laço
		slides[i].style.display="none"; //ocultar e mostrar slide atual(display:none -- css )
	}
	
	slides[numslide-1].style.display="block";
	
}
// passar slide autom a cada 5 segs
function autoslide(){
	mostrarslide(numslide);
	numslide++
	}
setInterval(function(){
	autoslide();
	}, 5000)
















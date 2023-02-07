# site

modelo fade

.fade{animation-name:fade;animation-duration:1.3s; -webkit-animation-name:fade;-webkit-animation-duration:1.3s;

html ---> coloca fade na div slide ----> <div class="slide fade">

----------------------------------------------------------------------------------------------------------------------------------------------
 configurando animação fade:
 no css:
 
 @-webkit-@keyframes fade{
 	from{opacity:.4}
 	to{opacity:1}
 
 @keyframes fade{
 	from{opacity:.4}
 	to{opacity:1}
 
 }
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
modelo de slider (com indicadores sem js):								  

!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width-device-width, initial-scale=1.0">
	<tittle>Slider com HTML e CSS</tittle>
</head>
<style>
	body{margin:0;padding:0;width:100%;height:100vh;display:flex;justify-content:center;align-items:center;}
	.slider{margin:0 auto; width:800px;height:400px;overflow:hidden;}
	.slides{width:400%; height:400px;display:flex;}
	.slides input{display:nome;}
	.slide{width:25%;position:relative;}
	.slide img{width:800px;}
	.manual-navegation{position:absolute;width:800px;margin-top:-40px;display:flex;justify-content:center;}
	.manual-btn{border:2px solid #fff;padding:5px;border-radius:10px;cursor:pointer;transition:1s;}
	.manual-btn:not(:last-child){margin-right:40px;
	.manual-btn:hover{background-color:#fff}
	#radio1:checked ~ .first{margin-left:0;}
	#radio2:checked ~ .first{margin-left:-25%;}
	#radio3:checked ~ .first{margin-left:-50%;}
	#radio4:checked ~ .first{margin-left:-75%;}
	.navegation-auto div/*dentro de cada div*/{border:2px solid blue;border-radius:10px;transition:1s;}
	.navegation-auto{position:absolute;width:800px;margin-top:360px;display:flex;}
	.navegatio-auto div:not(:last-child){margin-right:40px;}
	#radio1:checked ~ .navegation-auto .auto-btn1{background-color:#fff;}
	#radio2:checked ~ .navegation-auto .auto-btn2{background-color:#fff;}
	#radio3:checked ~ .navegation-auto .auto-btn3{background-color:#fff;}
	#radio4:checked ~ .navegation-auto .auto-btn4{background-color:#fff;}

</style>

<body>

	<div class="Slider">
		<div class="slides">
			<input type="radio" name="radio-btn" id="radio1">
			<input type="radio" name="radio-btn" id="radio1">
			<input type="radio" name="radio-btn" id="radio1">
			<input type="radio" name="radio-btn" id="radio1">
			
			<div class="slide 1"> ------>> first
				<img src="imagem">
			</div>
			<div class="slide 2"> 
				<img src="imagem">
			</div>
			<div class="slide 3"> 
				<img src="imagem">
			</div>
			<div class="slide 4"> 
				<img src="imagem">
			</div>
			
			<div class="navegation-auto">
				<div class="auto-btn1"></div>
				<div class="auto-btn2"></div>
				<div class="auto-btn3"></div>
				<div class="auto-btn4"></div>
			</div>
		
		</div>
		
		<div class="manual-navegation">
			<label for="radio1" class="manual-btn></label>
			<label for="radio2" class="manual-btn></label>
			<label for="radio3" class="manual-btn></label>
			<label for="radio4" class="manual-btn></label>
		
	</div>
	
	<script type="text/javascript" src="arquivo.js"></script>
//mudaça de imagem automat.//

let count = 1;
document.getElementById("radio1").checked = true; 

setInterval( function(){
	nextImage();
}, 2000)  //tempo//

function nextImage(){
	count++;
	if(count>4){
		count = 1;
	}
}
document.getElementById("radio"+cout).checked = true;

//final//

</body>
</html>

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

script para o site com indicadores:

1°) marca as divs dos indicadores no html

script vvvvvvvvv

var numslide=1; //variavel para guardar o nº do slide
mostrarslide(numslide); //chama a função

function mudarslide(ns){ //muda o slide p/frent p/traz (seta direita e esquerda)
	mostrarslide(numslide += ns); //para mostrar o slide vai ser usado dentro de mudar slide
}

/*function slideatual(ns){}
	mostrarslide(numslide = ns); ----> função para os botões indicadores
}*/

function mostrarslide(ns){
	var slides=document.getElementsByClassName("slide"); // chama as divs. contem todos elementos slide (array)
	//var indicadores=document.getElementsByClassName("indicadores");
	//começando a função vvvvv
	if(ns > slides.length){ // ultimo para o 1°
		numslide=1;
	}
	if(ns < 1){  // 1º para o ultimo
		numslide=slides.length;
	}
	for(var i=0;i<slides.length;i++){ // laço
		slides[i].style.display="none"; //ocultar e mostrar slide atual(display:none -- css )
	}
	/*for(var i=0;i<indicadores.length;i++){
		indicadores[i].className = indicadores[i].className.replace("ativo","");
	}*/
	slides[numslide-1].style.display="block";
	//indicadores[numslide-1]...	
	
}
// passar slide autom a cada 5 segs
function autoslide(){
	mostrarslide(numslide);
	numslide++
	}
setInterval(function(){
	autoslide();
	}, 5000)

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

!DOCTYPE html>
<html lang="pt-br">
<head>
	<tittle>galeria</tittle>
</head>
<style>
*{box-sizing:border-box;}
body{margin:0;font-family:arial;}
.galeria{display:inline-block; border:1px solid #000;width:100px;margin-bottom:10px;}
.galeria img{opacity:0.7; cursor:pointer; width:150px;margin:5px;margin-right:0px;}
.galeria img:hover{opacity:1;}
.container{position:relative; display:none/*para começar oculta*/;width:60%;margin:auto;}
.container img{width:100%;}
.btnFechar{position:absolute;top:10px;right:15px;color:#fff;font-size:40px;cursor:pointer;}
</style>

<body>

<section class="galeria">
	<img src="imagem" alt="imagem" onclick="mostrarImagem">	
	<img src="imagem" alt="imagem" onclick="mostrarImagem">
	<img src="imagem" alt="imagem" onclick="mostrarImagem">	
	<img src="imagem" alt="imagem" onclick="mostrarImagem">
	<img src="imagem" alt="imagem" onclick="mostrarImagem">	
	<img src="imagem" alt="imagem" onclick="mostrarImagem">
</section>

<section class="container">
	<span onclick="this.parentElement.style.display ='none'" class="btnFechar">&times;</span> -----> script do botão fechar(no htm)
	<img id="imagemGrande">
</section>

<section>
	<p>Galeria de imagem</p>
</section>

</body>

</html>

script vvvv

function mostrarImagem(img){
	const imagemGrande = document.getElementById("imagemGrande");
	imagemGrande.src="imagem";
	imagemGrande.parentElement.style.display ="block";
	}

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx




















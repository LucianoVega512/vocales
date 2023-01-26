document.getElementById('volver').addEventListener('click', () => {
	document.getElementById('principal').innerHTML = '<div id="card"><input id="entrada" type="text" style="margin: 0 20px 0 20px;" placeholder="Type some words"/><button id="analizar" type="text" style="margin: 0 20px 0 20px;">Analyze</button></div>';
	establecerPrincipal(document.getElementById('analizar'));
});

function establecerPrincipal(elemento) {
	elemento.addEventListener('click', () => {
		let txt = document.getElementById('entrada').value;

		if(!txt.includes("<")){
			reducir(txt);
		}
		else{
			alert("Upps!...cannot contain the character '>' !")
		}		
	});
}

establecerPrincipal(document.getElementById('analizar'));

function reducir(texto) {
	let letras = texto.split("");
	let vocales = letras.reduce(analizar, { a: 0, e: 0, i: 0, o: 0, u: 0 });
	document.getElementById('principal').innerHTML = '<div id="contenedor_resultado"><div class="letra superior"><p class="txt-valor">' +
		vocales.a + '</p><p class="txt-letra">A</p></div><div class="letra"><p class="txt-valor">' + vocales.e + '</p><p class="txt-letra">E</p></div>' +
		'<div class="letra"><p class="txt-valor">' + vocales.i + '</p><p class="txt-letra">I</p></div><div class="letra"><p class="txt-valor">' +
		vocales.o + '</p><p class="txt-letra">O</p></div><div class="letra"><p class="txt-valor">' + vocales.u + '</p><p class="txt-letra">U</p>' +
		'</div><div class="letra inferior"><p class="txt-valor">' + texto.length + '</p><p class="txt-letra">Total</p></div>';
}

function analizar(elementos, elemento) {
	switch (elemento.toLowerCase()) {
		case "a":
			elementos["a"]++;
			break;

		case "e":
			elementos["e"]++;
			break;

		case "i":
			elementos["i"]++;
			break;

		case "o":
			elementos["o"]++;
			break;

		case "u":
			elementos["u"]++;
			break;

		default:
			break;
	}
	return elementos;
}
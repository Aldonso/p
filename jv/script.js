//funcion que volteará la palabra que el usuario inserte.
function reversa(palabra) {
	//crea una variable que sera igual al tamaño de la palabra
	x = palabra.length; 
	//que una variable donde se guardará la palabra alreves.
	palabra_alreves = "";
	//ciclo while desde el tamaño de la palabra hasta 0
	while (x>=0){
		//cada vez que se cumpla sobreesribe la variable con la palabra
		//y el siguiente caracter de la palabra
		palabra_alreves = palabra_alreves + palabra.charAt(x);
		//descontar un valor a x para tomar la posicion anterior
		x--;
	}//end while
	//regresar la palabra ya volteada
	return palabra_alreves;
}//End Funcion reversa
//funcion para quitar caracteres y espacios en blanco que recibe 1 parametro
function quitar_chars(palabra1) {
	//crear una variable con os caracteres que cambiaremos
	var chars = ","
	//quitarle espacios a la palabra, pasarla a minuscula y
	//quitar las comas
	palabra1 = palabra1.replace(/\s/g, "").toLowerCase().replace(chars, "");
	//regresar la palabra ya ocn el formato que le dimos
	return palabra1
}//end function quitar_chars
//funcion que recibe la palabra del usuario
function palindromo(palabra) {
	//mostrar en consola la palabra original con el formato de quitar_chars
	console.log(quitar_chars(palabra));
	//mostrar la palabra alreves y con el formato de quitar_chars
	console.log(quitar_chars(reversa(palabra)));
	//si la palabra con el formato de quitar_chars
	//y la palabra alreves con el formato de quitar_chars son iguales
	if (quitar_chars(palabra) == quitar_chars(reversa(palabra))){
		//si se cumple la condicion regresa que si es palindromo
		alert ("Es un palindromo")
		//si no se cumple
	}else{
		//regresa que la palabra no es palindromo
		alert ("No es palindromo")
	}//end if
}//end funcion palindromo
//preguntar al usuario si quiere entrar al método.
var ask = prompt("Quieres ver si una palabra es palindromo?")
//pasar la respuesta a minusculas
ask = ask.toLowerCase();
//ciclo para que entre siempre que el usuario diga que si
while (ask == "si"){
	//pedir al usuario que ingrese la palabra para saber si es un palindromo
	var palabra = prompt("Que palabra u oracion quieres saber si es un palindromo?")
	//Llamar al metodo para que se hagan los procesos
	palindromo(palabra)
	//volver a preguntar si el usuario quiere saber si la palabra es un palindromo
	ask = prompt("Quieres ver si otra palabra es un palindromo?")
}//end while

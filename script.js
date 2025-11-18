const amount = document.getElementById("amount");
const form = document.querySelector("form");
const currency = document.getElementById("currency");
const description = document.getElementById("description");
const result = document.getElementById("result");

let dolar = parseFloat(5.2).toFixed(2);
let euro = parseFloat(5.9).toFixed(2);
let libra = parseFloat(6.8).toFixed(2);
let calcular;
let valorMoeda;
let textoMoeda;

// Função para permitir apenas números no campo de valor
amount.addEventListener("input", () => {
	const regexAmount = /\D+/g;
	amount.value = amount.value.replace(regexAmount, "");
});

form.addEventListener("submit", (e) => {
	e.preventDefault();
	// Fazer conta
	valor = amount.value;
	moeda = currency.value;
	textoMoeda = currency.options[currency.selectedIndex].textContent;

	switch (moeda) {
		case "USD":
			calcular = valor * dolar;
			valorMoeda = dolar;
			break;
		case "EUR":
			calcular = valor * euro;
			valorMoeda = euro;
			break;
		case "GBP":
			calcular = valor * libra;
			valorMoeda = libra;
			break;
		default:
			alert("Selecione uma moeda válida");
			return;
	}
	document.querySelector("footer").classList.remove("show-result");
	description.innerText = `1 ${textoMoeda} = R$ ${valorMoeda}`;
	result.innerText = `R$ ${calcular.toFixed(2)}`;
});

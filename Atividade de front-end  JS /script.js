let input = document.getElementById("comida");
let paragrafo = document.getElementById("mensagem");

input.addEventListener("input",()=>{
    let prato = input.value.trim().toLowerCase();

    if (!prato) {
        paragrafo.textContent = "";
        return;
    }

    if (prato === "pão com ovo"){
        paragrafo.textContent = "Café da manhã.";
    } else if (prato === "feijão com arroz e carne"){
        paragrafo.textContent = "Almoço";
    } else {
        paragrafo.textContent = "Jantar";
    }

})

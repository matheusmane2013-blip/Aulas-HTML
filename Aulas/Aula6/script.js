//for - loop finito
//while - executa enquanto for verdadeiro

function mudarTudo(){
    const titulo1 = document.getElementById("titulo")
    titulo1.innerText = "Lista de compras"
    titulo1.style.color = "Blue"
    titulo1.style.fontFamily = "WingDings"
    

    let itens = [ "Abacaxi", "Maça", "Uva" ]
    let container = document.getElementById("lista-frutas")
    container.innerHTML = ""

    for(let i = 0; i < itens.length; i++){
        container.innerHTML += `<p id>Item ${i+1}: ${itens[i]} </p>`
    }
}
function calcularIMC(){
    let Pesinho = Number(document.getElementById("Peso").value)
    let Alturão = Number(document.getElementById("Altura").value)
    let Resultado = document.getElementById("Resultado")
    let IMC = Pesinho / (Alturão * Alturão)
    Resultado.innerText = IMC
}
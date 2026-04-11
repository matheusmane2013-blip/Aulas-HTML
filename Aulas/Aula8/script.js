const botao = document.querySelector('#botaoFujao')
const placar = document.querySelector('#placar')
let pontos = 0
function moverBotao(){
    const x = Math.random() * (window.innerWidth - 100)
    const y = Math.random() * 300
    botao.style.left = `${x}px`
    botao.style.top = `${y}px`
}
botao.addEventListener('mouseover', moverBotao)
botao.addEventListener('click', () => {
    pontos++
    placar.textContent = pontos
    alert("Parabens")
});
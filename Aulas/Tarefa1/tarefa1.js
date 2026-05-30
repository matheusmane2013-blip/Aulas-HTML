let botton = document.getElementById("buton");
let divon = document.getElementById("container");
let filtroCores = document.getElementById("filtroCores"); // Captura a sua tag <select>

function Criar() {
    let titleInput = document.getElementById("title");
    let textInput = document.getElementById("texto");
    let colorInput = document.getElementById("tipo");

    if (titleInput.value.trim() === "" || textInput.value.trim() === "") {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    // Pega o valor hexadecimal puro (ex: #ff0000)
    let corEscolhida = colorInput.value.toLowerCase();

    let divon1 = document.createElement("div");
    divon1.className = "cards";
    
    // Aplica os estilos para a borda aparecer na tela
    divon1.style.borderColor = corEscolhida;
    divon1.style.borderStyle = "solid"; 
    divon1.style.borderWidth = "5px"; 
    
    // Salva a cor de forma segura para o <option> ler depois
    divon1.setAttribute("data-cor", corEscolhida); 

    let title2 = document.createElement("h2");
    let texto1 = document.createElement("textarea");
    let destroy1 = document.createElement("button");

    destroy1.className = "destroy";
    destroy1.textContent = "X";
    
    destroy1.onclick = () => {
        divon1.remove();
        atualizarOpcoesFiltro();
    };

    texto1.readOnly = true;
    title2.textContent = titleInput.value;
    texto1.value = textInput.value;

    divon1.appendChild(destroy1);
    divon1.appendChild(title2);
    divon1.appendChild(texto1);

    divon.appendChild(divon1);

    // Atualiza a sua lista de <option>
    atualizarOpcoesFiltro();
    
}

function atualizarOpcoesFiltro() {
    if (!filtroCores) return;
    
    const cardsExistentes = document.querySelectorAll('.cards');
    const coresEncontradas = new Set();
    const valorAtual = filtroCores.value;

    
    filtroCores.innerHTML = '<option value="nenhuma">Nenhuma (Mostrar todos)</option>';

    
    cardsExistentes.forEach(card => {
        let cor = card.getAttribute("data-cor");
        if (cor) {
            coresEncontradas.add(cor);
        }
    });

    
    coresEncontradas.forEach(cor => {
        let option = document.createElement('option');
        option.value = cor;
        
        option.textContent = " "; 
        
        
        option.style.backgroundColor = cor;
        
        filtroCores.appendChild(option);
    });


    if (coresEncontradas.has(valorAtual)) {
        filtroCores.value = valorAtual;
        filtrarCards(valorAtual);
    } else {
        filtroCores.value = 'nenhuma';
        filtrarCards('nenhuma'); 
    }
}
function filtrarCards(corSelecionada) {
    const cardsExistentes = document.querySelectorAll('.cards');
    cardsExistentes.forEach(card => {
        let corCard = card.getAttribute("data-cor");
        
        if (corSelecionada === 'nenhuma' || corCard === corSelecionada) {
            card.style.display = ''; 
        } else {
            card.style.display = 'none'; 
        }
    });
}


if (filtroCores) {
    filtroCores.addEventListener('change', (e) => {
        filtrarCards(e.target.value);
    });
}

if (botton) {
    botton.addEventListener("click", Criar);
}

let Button = document.getElementById("bot");
let Form = document.getElementById("inf");

function Criar() {
    const ObjInform = {
        title: document.getElementById("title").value,
        conteudo: document.getElementById("cont").value
    };
    const novaDiv = document.createElement('div');
    const NewTextarea = document.createElement('textarea');
    const Boton = document.createElement('img')
    Boton.src = `X.png`
    Boton.width = 25
    Boton.height = 25
    Boton.classList.add('minha-imagem')
    const Space = document.createElement('br')
    novaDiv.classList.add('minha-classe');
    novaDiv.textContent = ObjInform.title;
    
    NewTextarea.value = ObjInform.conteudo;
    novaDiv.appendChild(Space)
    novaDiv.appendChild(NewTextarea);
    novaDiv.appendChild(Boton)
    document.body.appendChild(novaDiv);
    NewTextarea.readOnly = true;
    console.log("Criado");
}
Button.addEventListener("click", Criar);
Boton.addEventListener("click", () => {
    document.body.removeChild(ObjectDestroy)
})
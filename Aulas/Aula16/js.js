const botao = document.getElementById('btn-tema');
const html = document.documentElement;

const somClique = new Audio('deltarune-dark-fountain-open.mp3'); 

botao.addEventListener('click', () => {
    somClique.currentTime = 0;
    somClique.play();

    botao.disabled = true;

    setTimeout(() => {
        

        if (getComputedStyle(html).colorScheme === 'dark') {
            html.style.colorScheme = 'light';
        } else {
            html.style.colorScheme = 'dark';
        }

        botao.disabled = false;

    }, 5000);
});

# 🗡️ Trabalho de Casa: A Mochila do Aventureiro (Inventário RPG)

**Objetivo Geral:** Construir, do zero e de forma independente, uma aplicação web de página única (SPA) para gerenciar itens virtuais, aplicando toda a lógica de programação e arquitetura visual (CSS Avançado) vistas até aqui.

**Metodologia:** O projeto será dividido em 3 metas semanais. Vocês deverão consultar a documentação de apoio e/ou as aulas anteriores para resolver os desafios técnicos de cada etapa.
🔗 **https://prof-joao.notion.site/Guia-de-Refer-ncia-R-pida-Front-End-Versionamento-350a3966a3f48021a062f371aea584d3?source=copy_link**

---

## 🗓️ Semana 1: A Forja (Estrutura HTML e Identidade CSS)
**Objetivo da Semana:** Deixar o ambiente pronto, a tela estruturada e as classes CSS preparadas para receberem a lógica no futuro, aplicando os conceitos de Box Model e Flexbox.

**Tarefas:**

1. **Versionamento Inicial:** Crie um repositório no GitHub chamado `inventario-rpg`, faça o clone para o seu computador e crie os três arquivos base (`index.html`, `style.css` e `script.js`).
2. **A Interface (HTML):**
   * Crie um cabeçalho com o título "Mochila do Aventureiro".
   * Crie um formulário (`<form>`) contendo:
     * Um campo de texto (`input`) para o Nome do Item (ex: Espada Longa, Poção de Cura).
     * Uma área de texto (`textarea`) para os Efeitos/Descrição (ex: Restaura 50 de HP).
     * Um botão do tipo `submit` com o texto "Adicionar à Mochila".
   * Crie uma `<div>` vazia que servirá como o container (a mochila) onde os itens aparecerão depois.
3. **A Pintura e a Engenharia (CSS):**
   * **Regra de Ouro do Box Model:** Inicie o seu arquivo aplicando o seletor universal `*` com `box-sizing: border-box`.
   * Estilize a página com um tema à sua escolha.
   * **O Container da Mochila (Flexbox):** Transforme a `div` vazia da mochila em um contêiner flexível (`display: flex`). Configure para que os itens fiquem lado a lado (``), quebrem a linha automatflex-direction: rowicamente (`flex-wrap: wrap`) e possuam um espaçamento uniforme entre eles usando a propriedade `gap`.
   * Crie a classe `.item-card` (que será o visual quadrado/retangular de cada item). Aplique Padding para afastar o texto da borda e uma Borda com estilo para dar aspecto de equipamento.
   * **Seletores:** Utilize o seletor de **Filho Direto (`>`)** ou **Descendente (Espaço)** para estilizar o título e o texto que ficarão dentro do card do item, sem correr o risco de afetar o resto do site.
   * Crie a classe `.btn-descartar` (o botão de jogar o item fora). **Regra de Ouro:** Este botão deve ter a propriedade CSS que o deixe totalmente invisível/oculto por padrão.
4. **Entrega da Semana:** Faça o `commit` (ex: `feat: estrutura inicial, flexbox e css`) e o `push` para o GitHub.

---

## 🗓️ Semana 2: O Cérebro do Inventário (JavaScript e DOM)
**Objetivo da Semana:** Dar vida ao formulário. Fazer o sistema escutar o clique, impedir o recarregamento da página e fabricar o card do item na tela.

**Tarefas:**

1. **Captura Segura:** No arquivo `script.js`, adicione um "escutador" de eventos (`addEventListener`) no seu formulário para o momento do envio (`submit`). Use o comando necessário para impedir que a página recarregue.
2. **O Objeto do Item:** Capture os valores que o usuário digitou nos campos de Nome e Efeito e guarde-os organizados dentro de um único Objeto JavaScript.
3. **Fabricação (`createElement`):** Crie, via JavaScript, as tags que vão compor o item:
   * A `div` principal do item.
   * Um `<h3>` para o nome.
   * Um `<p>` para o efeito.
   * O `<button>` de descartar.
4. **Montagem (`appendChild` e classes):** Adicione as classes CSS que você criou na Semana 1 a esses novos elementos. Coloque os textos dentro das tags e, por fim, anexe tudo dentro da `div` da mochila que você criou no HTML. Graças ao Flexbox da semana passada, os itens já devem se organizar sozinhos lado a lado!
5. **Desafio Lúdico de JS (A Raridade):** Crie uma verificação extra no seu código. Se a palavra digitada no Nome do Item incluir "Lendário" (ex: Espada Lendária), adicione uma classe CSS especial (`.item-lendario`) apenas nessa `div` recém-criada, que mude o `background-color` dela para dourado.
6. **Entrega da Semana:** Faça o `commit` (ex: `feat: geracao de itens via js`) e o `push` para o GitHub. (Nesta etapa, o botão de descartar ainda não precisa funcionar, e ele deve estar invisível).

---

## 🗓️ Semana 3: A Magia da Interatividade (Eventos e Animações)
**Objetivo da Semana:** Finalizar o sistema implementando a lógica de exibição do botão, a exclusão do item e os efeitos visuais animados.

**Tarefas:**

1. **O Hover Animado (CSS):** Volte no seu `style.css` e adicione a propriedade `transition` na classe `.item-card` (ex: `transition: all 0.3s ease`). Em seguida, crie o pseudo-seletor `.item-card:hover` para aplicar um efeito de escala (`transform: scale(1.05)`) e um brilho (`box-shadow`). Assim, quando o mouse passar por cima, o item parecerá saltar da mochila.
2. **O Hover Inteligente (JS):** Volte ao seu `script.js`. Logo após fabricar o card do item, adicione dois novos eventos à `div` do item:
   * `mouseover`: Quando o cursor passar por cima do item, altere o estilo do botão de descartar para que ele fique visível.
   * `mouseout`: Quando o cursor sair de cima do item, altere o estilo do botão para que ele volte a ficar invisível.
3. **O Descarte (Remoção):** Adicione um evento de `click` exclusivamente no botão de descartar. Quando clicado, ele deve usar o método correto para remover o card inteiro do item da tela.
4. **Polimento:** Garanta que, ao adicionar um novo item, os campos do formulário sejam limpos automaticamente (`reset`) para facilitar a adição do próximo equipamento.
5. **Entrega Final:** Faça o último `commit` (ex: `feat: animacoes css, logica de exclusao e interatividade`) e o `push` final. Envie o link do repositório para o professor.
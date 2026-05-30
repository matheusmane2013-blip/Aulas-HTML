class popup2 extends HTMLElement{
    constructor(){
        super();

        this.shadow = this.attachShadow({mode : 'open'})
    }

    connectedCallback(){
        const wrapper = document.createElement("span")
        wrapper.setAttribute("class","wrapper")

        const icon = document.createElement("span")
        icon.setAttribute("class", "icon")
        icon.setAttribute("tabindex", "0")

        const info = document.createElement("span")
        info.setAttribute("class", "info")

        const text = this.getAttribute('data-text')
        info.textContent = text

        let imgUrl

        if(this.hasAttribute("img")){
            imgUrl = this.getAttribute("img")

        }else{
            imgUrl = "default.png"
        }

        const img = document.createElement("img")
        img.src = imgUrl
        img.setAttribute("alt", "Icone de informacao")
        img.setAttribute("width", "100px")

        icon.appendChild(img)

        const style = document.createElement("style")

        style.textContent = `.wrapper {position: relative; display: inline-block;}
        .info 
        {
            visibility: hidden; width: 200px; background-color: #333;
            color: #fff; text-align: center; padding: 10px ; border-radius: 5px;
            position: absolute ; z-index: 1; bottom: 125%; left: 50%;
            margin-left: -100px; opacity: 0; transition: opacity 0.3s;
        }`
        wrapper.appendChild(icon)
        wrapper.appendChild(info)

        this.shadow.appendChild(style);
        this.shadow.appendChild(wrapper);
    }
}

customElements.define("popup", popup2)
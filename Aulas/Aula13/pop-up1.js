class popup2 extends HTMLElement{
    constructor(){
        super();
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
        wrapper.appendChild(icon)
        wrapper.appendChild(info)

        this.appendChild(wrapper)
    }
}

customElements.define("popup", popup2)
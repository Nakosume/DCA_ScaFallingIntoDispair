import "./components/export"
import traer_api from "./services/data"
import Card ,{ Attribute } from "./components/card/card";

class AppContainer extends HTMLElement {
    favo:Card[]=[];
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    async connectedCallback() {
        const animAPI= await traer_api();
        const favo=this.favo
        this.render(animAPI,favo)
    }

    render(an:any,fav:any) {
        if(this.shadowRoot) this.shadowRoot.innerHTML="hola"

        const something = this.ownerDocument.createElement('div');
        const header1= this.ownerDocument.createElement('h1');
        header1.innerText="List of Quotes"
        something.appendChild(header1)

        an.forEach((data:any)=>{
            const card = this.ownerDocument.createElement("my-card") as Card;

            card.setAttribute(Attribute.aname,data.anime);
            card.setAttribute(Attribute.chara,data.character);
            card.setAttribute(Attribute.quote,data.quote);

            const button=this.ownerDocument.createElement("button")
            button.innerText="copy to favorite"
            button.addEventListener("click",()=>console.log("clicked"))
                        
            something.appendChild(card);
            something.appendChild(button);
            
        })

        const somethim = this.ownerDocument.createElement('div');
        fav.forEach((data:any)=>{
            const card = this.ownerDocument.createElement("my-card") as Card;

            card.setAttribute(Attribute.aname,data.anime);
            card.setAttribute(Attribute.chara,data.character);
            card.setAttribute(Attribute.quote,data.quote);

            const button=this.ownerDocument.createElement("button")
            button.innerText="copy to favorite"
            button.addEventListener("click",()=>console.log("clicked"))
                        
            this.shadowRoot?.appendChild(card);
            this.shadowRoot?.appendChild(button);
            
        })

        this.shadowRoot?.appendChild(something);
        this.shadowRoot?.appendChild(somethim);
    }
}

customElements.define('app-container', AppContainer)
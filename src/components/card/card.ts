export enum Attribute {
    "aname" = "aname",
    "chara" = "chara",
    "quote" = "quote",
}

class Card extends HTMLElement {
    aname?: string;
    chara?: string;
    quote?: string;
    
    static get observedAttributes() {
        const attrs: Record<Attribute, null> = {
            aname: null,
            chara: null,
            quote: null,
        };
        return Object.keys(attrs);
    }
    
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    
    connectedCallback() {
        this.render();
    }
    
    attributeChangedCallback(
        propName: Attribute,
        _: string | undefined,
        newValue: string | undefined
        ) {
            this[propName] = newValue;            
            this.render();
        }
        
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML="";

            this.shadowRoot.innerHTML = `
            <section>
             <h1>${this.aname}</h1>
            <p>Character: ${this.chara}</p>
            <p>Quote: ${this.quote}</p>
             </section>
             `;
         }
     }
}
    
customElements.define("my-card", Card);
export default Card;
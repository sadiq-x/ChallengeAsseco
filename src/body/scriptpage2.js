class PageTwo extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.render();
    }

    connectedCallback() {
        const account = this.shadowRoot.querySelector("#account")
        const iban = this.shadowRoot.querySelector("#iban")
        const description = this.shadowRoot.querySelector("#description")
        const ammount = this.shadowRoot.querySelector("#ammount") 
        const data = JSON.parse(localStorage.getItem("data"))
        account.innerHTML = data.account
        iban.innerHTML = data.iban
        description.innerHTML = data.description
        ammount.innerHTML = data.ammount + " EUR"

    }

    disconnectedCallback() {
        localStorage.removeItem("data")
    }

    render() {
        this.shadowRoot.innerHTML = this.getTemplate()
    }

    getTemplate() {
        return `
        <header> 
            <ul>
                <li class="textNat">National transfer
                <p class="textSum">Summary</p> </li>
                <li class="loader"></p></li>
                <li class="step">step 2/2</li>
            </ul>
        </header>

        <div>
        <h3>Origin account</h3>
        <p id="account"></p>

        <h3>Destination IBAN</h3>
        <p id="iban"></p>

        <h3>Transfer description</h3>
        <p id="description"></p>

        <h3>Amount</h3>
        <p id="ammount"></p>

        <button id="btnback">Back </button> <button>Confirm </button>

        </div>
        ${this.getStyles()}
        `
    }

    getStyles() {
        return `
        <style>
        li {
            text-decoration: none;
            display: inline-block;
            
        }

        .textNat {
            font-size: 23px;
            color: DodgerBlue;
        }

        .textSum {
            font-size: 15px;
            color: DimGray;
        }

        .loader {
            margin-left:80%;
            border: 3px solid #f3f3f3;
            border-radius: 50%;
            border-top: 3px solid #3498db;
            border-right: 3px solid #3498db;
            border-bottom: 3px solid #3498db;
            border-left: 3px solid #3498db;
            width: 15px;
            height: 15px;
            rotate: 45deg;
            margin-right: 1%;
          }

        .step {
            font-size: 15px;
            opacity: 0.5;   
        }

        header {
            padding: 2% 0% 0% 3%;
            background-color: rgb(204, 204, 204);
        }

        div {
            padding: 10px 10px 10px 13px;
        }

        button {
            margin-top: 5%;
            padding: 0.5% 2.5% 0.5% 2.5%;
            background-color: DodgerBlue;
            color: white;
            border-radius: 7px;
            border: 1px solid DodgerBlue;
        }

        button:hover {
          opacity: 0.8;
        }

        #btnback {
            margin-top: 5%;
            padding: 0.5% 2.5% 0.5% 2.5%;
            background-color: white;
            color: DodgerBlue;
            border-radius: 7px;
            border: 1px solid DodgerBlue;
        }
        </style>
        `
    }
}

customElements.define("page-two", PageTwo);
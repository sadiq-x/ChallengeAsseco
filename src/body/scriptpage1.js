class PageOne extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.render();
    }

    connectedCallback() {
        const form = this.shadowRoot.querySelector("#forms");
        const btnConfirm = this.shadowRoot.querySelector("#btnns");
        let data;
        btnConfirm.addEventListener("click", (e) => {
            if (form.account.value && form.iban.value && form.description.value && form.ammount.value){
                data = {
                    account: form.querySelector("#account").value,
                    iban: form.querySelector("#iban").value,
                    description: form.querySelector("#description").value,
                    ammount: form.querySelector("#ammount").value
                }
                localStorage.setItem("data", JSON.stringify( data));
                this.status = true;
            }else {
                this.status = false;
            }   
        })
    }

    disconnectedCallback() {
        this.status = false;
    }

    render() {
        this.shadowRoot.innerHTML = this.getTemplate();
    }

    getTemplate() {
        return `
        <header> 

            <ul>
                <li class="textNat">National transfer
                <p class="textInf">Information</p> </li>
                <li class="loader"></p></li>
                <li class="step">step 1/2</li>
            </ul>
        </header>
        
        <div>
            <form id="forms"> 
            <label for="account">Origin account</label>
            </p>
            <select id="account" >
                <option value="My account 9994442574586">My account 9994442574586</option>
                <option value="My account 2254786663155">My account 2254786663155</option>
            </select>
            <br></br>
            <label for="iban">Destination IBAN</label> 
            </p>
            <input id="iban" type="text" required>
            <br></br>
            <label for="description">Transfer description</label> 
            </p>
            <textarea id="description" required></textarea>
            <br></br>
            <label for="ammount">Amount</label> 
            </p>
            <input id="ammount" type="text" required> EUR
            </form>
            <br></br>
            <button form="forms" id="btnns">Next Step</button>
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

            .textInf {
                font-size: 15px;
                color: DimGray;
            }

            .loader {
                margin-left:80%;
                border: 3px solid #f3f3f3;
                border-radius: 50%;
                border-top: 3px solid #3498db;
                border-right: 3px solid #3498db;
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

            #iban, select {
                width: 30%;
                padding: 12px 20px;
                margin: 8px 0;
                display: inline-block;
                border: 1px solid #ccc;
                border-radius: 4px;
                box-sizing: border-box;
            }

            #description {
                height: 150px;
                width: 20%;
                padding: 12px 20px;
                margin: 8px 0;
                display: inline-block;
                border: 1px solid #ccc;
                border-radius: 4px;
                box-sizing: border-box;
            }

            #ammount {
                width: 10%;
                padding: 12px 20px;
                margin: 8px 0;
                display: inline-block;
                border: 1px solid #ccc;
                border-radius: 4px;
                box-sizing: border-box;
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
        </style>
        `
    }
}

customElements.define("page-one", PageOne);
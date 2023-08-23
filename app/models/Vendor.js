import { AppState } from "../AppState.js"


export class Snack {
    constructor({ name, picture, price }) {
        this.name = name
        this.picture = picture
        this.price = price
    }

    get ListTemplate() {
        return `
        
        <div class="col-4">
        
         <p onclick="app.VendorsController.buySnack()" role="button" class="btn btn-primary col-12 col-md-6 fs-3"
            id="mySnacks">${this.name}</p>
         <p>${this.price}</p>
         <p> <img src="${this.picture}" class = "imgCard">
         </div>
        
        `
    }

    get moneyTemplate() {
        return `<div> ${AppState.money}</div>`
    }


}
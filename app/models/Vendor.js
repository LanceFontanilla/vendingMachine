

export class Snack {
    constructor({ name, picture, price }) {
        this.name = name
        this.picture = picture
        this.price = price
    }

    get ListTemplate() {
        return `
        <p>${this.name}</p>
        `
    }

    get


}
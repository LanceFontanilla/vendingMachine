
import { AppState } from "../AppState.js"
import { vendorsService } from "../services/VendorsService.js"
import { setHTML } from "../utils/Writer.js"


export class VendorsController {

    constructor() {
        console.log('Time to Vend')
        this.drawMoney()
        this.drawSnackList()

        // this.drawSnackList()

        AppState.on('money', this.drawMoney)

    }
    drawSnackList() {
        const snacks = AppState.snacks
        let listContent = ''
        snacks.forEach(snack => listContent += snack.ListTemplate)
        setHTML('listContent', listContent)
        console.log(listContent)
    }


    addMoney() {
        vendorsService.addMoney()
    }

    drawMoney() {
        console.log('drawing your money')
        setHTML('money', `<div id = "money"> $${AppState.money.toFixed(2)}</div> `)
    }

    buySnack() {
        console.log('buying snack')
        vendorsService.buySnack(snackName)
        let snackContent = ''
        const mySnacks = AppState.snacks
        mySnacks.push(snackName)
        setHTML('mySnacks', mySnacks)
        console.log(mySnacks)
    }

}
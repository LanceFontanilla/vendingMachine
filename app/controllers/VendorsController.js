
import { AppState } from "../AppState.js";
import { vendorsService } from "../services/VendorsService.js";
import { setHTML } from "../utils/Writer.js";


export class VendorsController {

    constructor() {
        console.log('Time to Vend')
        // this.drawSnackList()


        AppState.on('totalMoney', this.drawMoney)
    }
    drawSnackList() {
        const snacks = AppState.snacks
        let listContent = ''
        snacks.forEach(snack => listContent += snack.ListTemplate)
        console.log(listContent)
        document.getElementById('snack-list').innerHTML = listContent
        setHTML('snack-list', listContent)
    }

    addMoney() {
        vendorsService.addMoney()
    }

    drawMoney() {
        console.log('drawing your money')

        document.getElementById('totalMoney').innerText = `Total Money: ${AppState.money} `


    }

}
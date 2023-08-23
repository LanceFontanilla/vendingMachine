import { AppState } from "../AppState.js"



class VendorsService {
    addMoney() {
        AppState.money += .25
        console.log('adding money')
    }
    buySnack(snackName) {
        const selectedSnack = AppState.snacks.find(snack => snack.name == snackName && AppState.money >= snack.price)
        AppState.money -= selectedSnack.price
    }

}

export const vendorsService = new VendorsService()
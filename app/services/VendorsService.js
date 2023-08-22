import { AppState } from "../AppState.js"



class VendorsService {
    addMoney() {
        AppState.money += .25
        console.log('adding money')
    }
}

export const vendorsService = new VendorsService()
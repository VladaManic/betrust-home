import { BetSlipDataObj } from '../types/interfaces'

const getSportSum = (total: number, bet: BetSlipDataObj) => {
    const price =
        //If new price exists (updated in the meantime)
        bet.newPrice !== undefined && bet.newPrice !== null
            ? parseFloat(bet.newPrice.toString())
            : //If new price doesn't exist, take default price for calculation
              parseFloat(bet.price!)
    return isNaN(price) ? total : total + price
}

export default getSportSum

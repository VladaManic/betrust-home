import { BetSlipDataObj } from '../types/interfaces'

const getSportSum = (total: number, bet: BetSlipDataObj) => {
    const price =
        bet.newPrice !== undefined && bet.newPrice !== null
            ? parseFloat(bet.newPrice.toString())
            : parseFloat(bet.price!)
    return isNaN(price) ? total : total + price
}

export default getSportSum

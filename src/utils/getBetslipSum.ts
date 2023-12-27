import { BetSlipDataObj } from '../types/interfaces'

const getBetslipSum = (total: number, bet: BetSlipDataObj) => {
    const price = bet.price !== undefined ? parseFloat(bet.price) : NaN
    return isNaN(price) ? total : total + price
}

export default getBetslipSum

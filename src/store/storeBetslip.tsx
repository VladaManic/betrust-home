import { makeAutoObservable } from 'mobx'
import isStorageSupported from '../utils/isStorageSupported'
import getBetslipSum from '../utils/getBetslipSum'
import getSportSum from '../utils/getSportSum'

import { BetSlipDataObj } from '../types/interfaces'

class StoreBetslip {
    private betslipData: BetSlipDataObj[] = []
    private deletedBets: number[] = []
    private acceptChangesVal: boolean = false

    constructor() {
        makeAutoObservable(this)
        //Checking if local-storage is available
        if (isStorageSupported('localStorage')) {
            try {
                //Returning from localStorage already added odds
                this.betslipData = JSON.parse(
                    localStorage.getItem('odds-added') || ''
                )
            } catch (err) {
                //No odds added jet
                this.betslipData = []
            }
        } else {
            this.betslipData = []
        }
    }

    //Adding new odd to betslip (if it is not already there and removing rest from that market if already there)
    setBetslip = (
        newOdd: BetSlipDataObj,
        id: string | undefined,
        restIds: (string | number | undefined)[]
    ) => {
        const betslipObject = this.betslipData
        let idExists: boolean = false
        for (let i = 0; i < betslipObject.length; i++) {
            //Finding region with correct ID. If it exists, remove it
            if (betslipObject[i].eventId === id) {
                idExists = true
                this.betslipData.splice(i, 1)
            }
        }
        //It that odd does't exist in betslip, add it
        if (idExists === false) {
            this.betslipData[this.betslipData.length] = newOdd
            //If other events from that market exist, remove them
            restIds.forEach((eventId: string | number | undefined) => {
                for (let i = 0; i < betslipObject.length; i++) {
                    if (betslipObject[i].eventId === eventId?.toString()) {
                        this.betslipData.splice(i, 1)
                    }
                }
            })
        }
        //Adding new odds set to localStorage
        isStorageSupported('localStorage') &&
            localStorage.setItem('odds-added', JSON.stringify(this.betslipData))
    }

    //Remove one odd from betslip by clicking 'X'
    setBetslipDeleteOne = (id: string | undefined) => {
        const betslipObject = this.betslipData
        for (let i = 0; i < betslipObject.length; i++) {
            //Finding region with correct ID
            if (betslipObject[i].eventId === id) {
                this.betslipData.splice(i, 1)
            }
        }
        //Adding new odds set to localStorage
        isStorageSupported('localStorage') &&
            localStorage.setItem('odds-added', JSON.stringify(this.betslipData))
    }

    //Removin all odds from betslip by clicking 'Remova all'
    setBetslipDeleteAll = () => {
        this.betslipData = []
        //Adding new odds set to localStorage
        isStorageSupported('localStorage') &&
            localStorage.setItem('odds-added', JSON.stringify(this.betslipData))
    }

    //Set game ids which are deleted and need to be sync with betslip
    setRemovedGames = (id: number) => {
        this.deletedBets.push(id)
    }

    //Visable changes for prices in betslip modal before accepting
    setAcceptChanges = (param: boolean) => {
        this.acceptChangesVal = param
    }

    //On accept btn click, sync price changes of sportData and betSlip
    setBetslipChanges = () => {
        for (const singleBetslip of this.betslipData) {
            if (
                singleBetslip.newPrice !== undefined &&
                singleBetslip.newPrice !== null
            ) {
                singleBetslip.price = singleBetslip.newPrice.toString()
                //Reset new price to null for new potential updtaes of price
                singleBetslip.newPrice = null
            }
        }
    }

    //On accept btn click, sync odd deletes of sportData and betSlip
    setBetslipDeletes = () => {
        let betslipObject = this.betslipData
        //Looping through betslip data
        for (const id of this.deletedBets) {
            //Remove whole game with that id
            betslipObject = betslipObject.filter(
                (singleBetslip: BetSlipDataObj) =>
                    singleBetslip.game !== id.toString()
            )
        }
        this.betslipData = betslipObject

        //Updating localStorage
        isStorageSupported('localStorage') &&
            localStorage.setItem('odds-added', JSON.stringify(betslipObject))

        //Reset deleted games
        this.deletedBets = []
    }

    get betslip() {
        return this.betslipData
    }

    get acceptChanges() {
        return this.acceptChangesVal
    }

    get removedBets() {
        return this.deletedBets
    }

    //Calculating sum of prices for all bets in betslip
    get betslipSum() {
        return this.betslipData.reduce(getBetslipSum, 0)
    }

    //Calculating sum of prices for all sport data that are set to betslip (prices that are still not sync)
    get sportSum() {
        return this.betslipData.reduce(getSportSum, 0)
    }

    //Check if game id needs to be sync with betslip
    gameRemoved(gameId: number) {
        if (this.deletedBets.includes(gameId)) {
            return true
        } else {
            return false
        }
    }
}

const storeBetslip = new StoreBetslip()

export default storeBetslip

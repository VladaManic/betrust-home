import { makeAutoObservable } from 'mobx'
import isStorageSupported from '../utils/isStorageSupported'
import getBetslipSum from '../utils/getBetslipSum'
import getSportSum from '../utils/getSportSum'

import { BetSlipDataObj, EventObj } from '../types/interfaces'

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
        eventsArray: EventObj[],
        base: string | undefined
    ) => {
        //Getting rest of event ids of that market to remove it from betslip (if they are already added)
        const idsArray: (string | number | undefined)[] = []
        //Getting rest of event ids for Winner type events
        if (base === undefined) {
            //Getting all (3) of event ids from that Winner type market
            eventsArray.forEach((singleEvent: EventObj) =>
                idsArray.push(singleEvent.id)
            )
            //Removing current id from array of event ids
            const index = id !== undefined && idsArray.indexOf(parseInt(id))
            index !== false && idsArray.splice(index, 1)
            //Getting rest of event ids for Handicap & Over/Under type events
        } else {
            let baseBase
            //Getting all (2) of event ids from that market
            eventsArray.forEach((singleEvent: EventObj, index: number) => {
                //Getting first event in market becouse 'base' event id is created by adding '1' at the end of first event id
                if (index === 0) {
                    baseBase = singleEvent.id
                }
                idsArray.push(singleEvent.id)
            })
            //If clicked btn is not base
            if (base === 'false') {
                //Removing current id from array of event ids
                const index = id !== undefined && idsArray.indexOf(parseInt(id))
                index !== false && idsArray.splice(index, 1)
                //Make specific id by adding '1' at the end of first event
                idsArray.push(parseInt(baseBase!.toString() + '1'))
            }
        }
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
            idsArray.forEach((eventId: string | number | undefined) => {
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

    //Set game ids which are deleted and need to be sync with betslip
    setRemovedBets = (id: number) => {
        this.deletedBets.push(id)
    }

    //Visable changes for prices in betslip modal before accepting
    setAcceptChanges = (param: boolean) => {
        this.acceptChangesVal = param
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
        //Remove all odds from localStorage
        isStorageSupported('localStorage') &&
            localStorage.setItem('odds-added', JSON.stringify(this.betslipData))
    }

    //On accept btn click, sync price changes of sportData and betSlip
    setBetslipChanges = () => {
        for (const singleBetslip of this.betslipData) {
            //If new price exists (price updated in the meantime)
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

    get removedBets() {
        return this.deletedBets
    }

    get acceptChanges() {
        return this.acceptChangesVal
    }

    //Calculating sum of prices for all bets in betslip
    get betslipSum() {
        return this.betslipData.reduce(getBetslipSum, 0)
    }

    //Calculating sum of prices for all sport data that are set to betslip (prices that are still not sync)
    get sportSum() {
        return this.betslipData.reduce(getSportSum, 0)
    }
}

const storeBetslip = new StoreBetslip()

export default storeBetslip

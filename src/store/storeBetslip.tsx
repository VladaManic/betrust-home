import { makeAutoObservable } from 'mobx'
import store from './store'
import { orderBy } from 'lodash'
import isStorageSupported from '../utils/isStorageSupported'

import {
    RegionObj,
    CompetitionObj,
    EventObj,
    BetSlipDataObj,
} from '../types/interfaces'

class StoreBetslip {
    private betslipData: BetSlipDataObj[] = []
    private deletedGames: number[] = []
    private acceptChangesVal: boolean = false
    private acceptDeletesVal: boolean = false

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

    //Adding new odd to betslip (if it is not aready there and removing rest from that market if already there)
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
        while (this.betslipData.length > 0) {
            this.betslipData.splice(0, 1)
        }
        //Adding new odds set to localStorage
        isStorageSupported('localStorage') &&
            localStorage.setItem('odds-added', JSON.stringify(this.betslipData))
    }

    //Set game ids which are deleted and need to be sync with betslip
    setRemovedGames = (id: number) => {
        this.deletedGames.push(id)
    }

    //Visable changes for prices in betslip modal before accepting
    setAcceptChanges = (param: boolean) => {
        this.acceptChangesVal = param
    }

    //Visable deletes for prices in betslip modal before accepting
    setAcceptDeletes = (param: boolean) => {
        this.acceptDeletesVal = param
    }

    //On accept btn click, sync price changes of sportData and betSlip
    setChangesBetslip = () => {
        //Looping through betslip data
        for (const singleBetslip of this.betslipData) {
            //Looping through sport data
            for (const singleRegion of store.sport.region!) {
                for (const singleCompetition of singleRegion.competition) {
                    for (const singleGame of singleCompetition.game) {
                        for (const singleMarket of singleGame.market) {
                            if (
                                singleBetslip.marketId ===
                                singleMarket.id.toString()
                            ) {
                                //Trying to find event with correct id
                                const correctEvent = singleMarket.event.filter(
                                    (singleEvent: EventObj) =>
                                        singleEvent.id.toString() ===
                                        singleBetslip.eventId
                                )
                                //If event found, compare prices
                                if (correctEvent[0] !== undefined) {
                                    //If there is deference, sync prices
                                    if (
                                        singleBetslip.price !==
                                        correctEvent[0].price.toString()
                                    ) {
                                        singleBetslip.price =
                                            correctEvent[0].price.toString()
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        //Reset accept btn for new posible changes
        this.acceptChangesVal = false
    }

    //On accept btn click, sync odd deletes of sportData and betSlip
    setBetslipDeletes = () => {
        let betslipObject = this.betslipData
        //Looping through betslip data
        for (const id of this.deletedGames) {
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
        this.deletedGames = []

        //Reset accept btn for new posible deletes
        this.acceptDeletesVal = false
    }

    get betslip() {
        return this.betslipData
    }

    get betslipLength() {
        return this.betslipData.length
    }

    //Calculating sum of prices from betslip for comparation in betslip modal
    get betslipSum() {
        let sum: number = 0
        this.betslipData.forEach(
            (singleBetslip: BetSlipDataObj) =>
                (sum = sum! + parseFloat(singleBetslip.price!))
        )
        return sum
    }

    get acceptChanges() {
        return this.acceptChangesVal
    }

    get acceptDeletes() {
        return this.acceptDeletesVal
    }

    //Calculating sum of prices from sport data for comparation in betslip modal
    get currentSum() {
        let newSum: number = 0
        let currentPrice: number = 0
        for (const singleBetslip of this.betslipData) {
            for (const singleRegion of store.sport.region!) {
                for (const singleCompetition of singleRegion.competition) {
                    for (const singleGame of singleCompetition.game) {
                        for (const singleMarket of singleGame.market) {
                            if (
                                singleBetslip.marketId ===
                                singleMarket.id.toString()
                            ) {
                                //Trying to find event with correct id
                                const correctEvent = singleMarket.event.filter(
                                    (singleEvent: EventObj) =>
                                        singleEvent.id.toString() ===
                                        singleBetslip.eventId
                                )
                                //If event found, get it's price
                                if (correctEvent[0] !== undefined) {
                                    currentPrice = correctEvent[0].price
                                    //If there is no event with that id, it means that it's Tied clicked and than base value is used
                                } else {
                                    currentPrice = singleMarket.base
                                }
                                newSum = newSum + currentPrice
                            }
                        }
                    }
                }
            }
        }
        return newSum
    }

    //Get region object from sportData store object and sorted competitions in it
    currentRegionAndCompetitionsSorted(regionName: string | undefined) {
        const curRegion = store.sport.region?.filter(
            (singelRegion: RegionObj) => singelRegion.name === regionName
        )
        const competionsSorted =
            curRegion?.length !== 0 &&
            orderBy(curRegion![0].competition, ['order'])
        return { region: curRegion, competitionsSorted: competionsSorted }
    }

    //Get region object from sportData store object and filter competition from it
    currentCompetition(
        regionName: string | undefined,
        competitionName: string | undefined
    ) {
        const curRegion = store.sport.region?.filter(
            (singelRegion: RegionObj) => singelRegion.name === regionName
        )
        const curCompetition =
            curRegion?.length !== 0 &&
            curRegion![0].competition.filter(
                (singelCompetition: CompetitionObj) =>
                    singelCompetition.name === competitionName
            )
        return { region: curRegion, competition: curCompetition }
    }

    //Getting price for odd from sport data for comparation in betslip modal
    currentPrice(singleBetslip: BetSlipDataObj) {
        let currentPrice: number = 0
        for (const singleRegion of store.sport.region!) {
            for (const singleCompetition of singleRegion.competition) {
                for (const singleGame of singleCompetition.game) {
                    for (const singleMarket of singleGame.market) {
                        //Finding market with correct id
                        if (
                            singleMarket.id.toString() ===
                            singleBetslip.marketId
                        ) {
                            //Trying to find event with correct id
                            const correctEvent = singleMarket.event.filter(
                                (singleEvent: EventObj) =>
                                    singleEvent.id.toString() ===
                                    singleBetslip.eventId
                            )
                            //If event found, get it's price
                            if (correctEvent[0] !== undefined) {
                                currentPrice = correctEvent[0].price
                                //If there is no event with that id, it means that it's Tied clicked and than base value is used
                            } else {
                                currentPrice = singleMarket.base
                            }
                            return currentPrice
                        }
                    }
                }
            }
        }
    }

    //Check if game id needs to be sync with betslip
    gameRemoved(gameId: number) {
        if (this.deletedGames.includes(gameId)) {
            return true
        } else {
            return false
        }
    }
}

const storeBetslip = new StoreBetslip()

export default storeBetslip

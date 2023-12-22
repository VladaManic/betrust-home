import { makeAutoObservable } from 'mobx'
import { orderBy } from 'lodash'
import isStorageSupported from '../utils/isStorageSupported'

import {
    SportDataObj,
    RegionObj,
    CompetitionObj,
    GameObj,
    MarketObj,
    EventObj,
    BetSlipDataObj,
} from '../types/interfaces'

class Store {
    private loadingState: boolean = true
    private errorMsg: string = ''
    private sportData: SportDataObj = {
        id: 0,
    }
    private titleText: string = 'Football - In Play'
    private deletedGames: number[] = []
    private betslipData: BetSlipDataObj[] = []
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

    setLoading = (state: boolean) => {
        this.loadingState = state
    }

    setError = (errorMsg: string) => {
        this.errorMsg = errorMsg
    }

    setSport = (data: SportDataObj) => {
        this.sportData = data
    }

    setTitle = (titleTxt: string) => {
        this.titleText = titleTxt
    }

    //Adding one new odd to betslip
    setBetslip = (newOdd: BetSlipDataObj) => {
        this.betslipData[this.betslipData.length] = newOdd
        //Adding new odds set to localStorage
        isStorageSupported('localStorage') &&
            localStorage.setItem('odds-added', JSON.stringify(this.betslipData))
    }

    //Removinh one odd from betslip
    setBetslipDeleteOne = (subId: string | undefined) => {
        const betslipObject = this.betslipData
        for (let i = 0; i < betslipObject.length; i++) {
            //Finding region with correct ID
            if (betslipObject[i].subid === subId) {
                this.betslip.splice(i, 1)
            }
        }
        //Adding new odds set to localStorage
        isStorageSupported('localStorage') &&
            localStorage.setItem('odds-added', JSON.stringify(this.betslipData))
    }

    //Removin all odds from betslip
    setBetslipDeleteAll = () => {
        while (this.betslipData.length > 0) {
            this.betslipData.splice(0, 1)
        }
        //Adding new odds set to localStorage
        isStorageSupported('localStorage') &&
            localStorage.setItem('odds-added', JSON.stringify(this.betslipData))
    }

    //Visable changes for prices in betslip modal before accepting
    setAcceptChanges = (param: boolean) => {
        this.acceptChangesVal = param
    }

    //On accept btn click, sync price changes of sportData and betSlip
    setChangesBetslip = () => {
        //Looping through betslip data
        for (const singleBetslip of this.betslipData) {
            //Looping through sport data
            for (const singleRegion of this.sport.region!) {
                for (const singleCompetition of singleRegion.competition) {
                    for (const singleGame of singleCompetition.game) {
                        for (const singleMarket of singleGame.market) {
                            if (
                                singleBetslip.id === singleMarket.id.toString()
                            ) {
                                //Trying to find event with correct id
                                const correctEvent = singleMarket.event.filter(
                                    (singleEvent: EventObj) =>
                                        singleEvent.id.toString() ===
                                        singleBetslip.subid
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

    setDeleteRegion = (id: number): boolean => {
        for (let i = 0; i < this.sportData.region!.length; i++) {
            //Finding region with correct ID
            if (this.sportData.region![i].id === id) {
                const currentRegion = this.sportData.region![i]
                // Removing region with the correct ID using splice
                this.sportData.region!.splice(i, 1)

                //Showing accept btn in betslip if odds of this region are already added to betslip
                for (const singleBetslip of this.betslipData) {
                    for (const singleCompetition of currentRegion.competition) {
                        for (const singleGame of singleCompetition.game) {
                            if (
                                singleGame.id.toString() === singleBetslip.game
                            ) {
                                this.acceptDeletesVal = true
                                //Set game ids which need to be sync with betslip
                                this.deletedGames.push(singleGame.id)
                            }
                        }
                    }
                }

                return true
            }
        }
        return false
    }

    setDeleteLeague = (id: number): boolean => {
        for (const singleRegion of this.sportData.region!) {
            for (let i = 0; i < singleRegion.competition.length; i++) {
                //Finding competition with correct ID
                if (singleRegion.competition[i].id === id) {
                    const currentCompetition = singleRegion.competition[i]
                    // Removing competition with the correct ID using splice
                    singleRegion.competition.splice(i, 1)

                    //Showing accept btn in betslip if odds of this league are already added to betslip
                    for (const singleBetslip of this.betslipData) {
                        for (const singleGame of currentCompetition.game) {
                            if (
                                singleGame.id.toString() === singleBetslip.game
                            ) {
                                this.acceptDeletesVal = true
                                //Set game ids which need to be sync with betslip
                                this.deletedGames.push(singleGame.id)
                            }
                        }
                    }

                    return true
                }
            }
        }
        return false
    }

    setDeleteGame = (id: number): boolean => {
        for (const singleRegion of this.sportData.region!) {
            for (const singleCompetition of singleRegion.competition) {
                for (let i = 0; i < singleCompetition.game.length; i++) {
                    //Finding game with correct ID
                    if (singleCompetition.game[i].id === id) {
                        // Removing game with the correct ID using splice
                        singleCompetition.game.splice(i, 1)

                        //Showing accept btn in betslip if odds of this game are already added to betslip
                        for (const singleBetslip of this.betslipData) {
                            if (singleBetslip.game === id.toString()) {
                                this.acceptDeletesVal = true
                                //Set game ids which need to be sync with betslip
                                this.deletedGames.push(id)
                            }
                        }

                        return true
                    }
                }
            }
        }
        return false
    }

    setAddRegion = (id: number): boolean => {
        const tanzaniaId = 2050001
        //If provided ID is the same as football ID
        if (this.sportData.id === id) {
            //Number of regions already in object
            const currentRegions = this.sportData.region!.length
            //Getting Tanzania region object
            const regionTanzania = this.sportData.region!.filter(
                (singleRegion: RegionObj) => singleRegion.id === tanzaniaId
            )
            //Making copy of Tanzania region object
            const tanzaniaCopy = { ...regionTanzania[0] }
            //Changing property values for id and name
            tanzaniaCopy.id = Math.floor(
                Math.random() * (9999999 - 1000000 + 1) + 1000000
            )
            tanzaniaCopy.name = 'Added region'
            //Adding new region
            this.sportData.region![currentRegions] = tanzaniaCopy
            return true
        }
        return false
    }

    setAddLeague = (id: number): boolean => {
        const tanzaniaId = 2050001
        const firstTanzaniaComp = 20691
        for (const singleRegion of this.sportData.region!) {
            //Getting correct region
            if (singleRegion.id === id) {
                //Number of competitions already in object
                const currentCompetitions = singleRegion.competition!.length
                //Getting Tanzania first competition object (for example)
                for (const singleReg of this.sportData.region!) {
                    if (singleReg.id == tanzaniaId) {
                        const competitionTanzania =
                            singleReg.competition!.filter(
                                (singleCompetition: CompetitionObj) =>
                                    singleCompetition.id === firstTanzaniaComp
                            )
                        //Making copy of Tanzania competition object
                        const tanzaniaCopy = { ...competitionTanzania[0] }
                        //Changing property values for id and name
                        tanzaniaCopy.id = Math.floor(
                            Math.random() * (99999 - 10000 + 1) + 10000
                        )
                        tanzaniaCopy.name = 'Added league'
                        //Adding new competition
                        singleRegion.competition[currentCompetitions] =
                            tanzaniaCopy
                        return true
                    }
                }
            }
        }
        return false
    }

    setAddGame = (id: number): boolean => {
        const tanzaniaId = 2050001
        const firstTanzaniaComp = 20691
        const tanzainaFirstGame = 19504055
        for (const singleRegion of this.sportData.region!) {
            for (const singleCompetition of singleRegion.competition!) {
                //Finding competition with correct ID
                if (singleCompetition.id === id) {
                    //Number of games already in object
                    const currentGames = singleCompetition.game!.length
                    //Getting Tanzania first game of first competition object (for example)
                    for (const singleRegion of this.sportData.region!) {
                        if (singleRegion.id === tanzaniaId) {
                            for (const singleComp of singleRegion.competition!) {
                                if (singleComp.id === firstTanzaniaComp) {
                                    const gameTanzania =
                                        singleComp.game!.filter(
                                            (singleGame: GameObj) =>
                                                singleGame.id ===
                                                tanzainaFirstGame
                                        )
                                    //Making copy of Tanzania game object
                                    const tanzaniaCopy = { ...gameTanzania[0] }
                                    //Changing property values for id and name
                                    tanzaniaCopy.id = Math.floor(
                                        Math.random() *
                                            (99999999 - 10000000 + 1) +
                                            10000000
                                    )
                                    //Adding new game
                                    singleCompetition.game[currentGames] =
                                        tanzaniaCopy
                                }
                                return true
                            }
                        }
                    }
                }
            }
        }
        return false
    }

    setUpdateOdd = (id: number): boolean => {
        for (const singleRegion of this.sportData.region!) {
            for (const singleCompetition of singleRegion.competition) {
                for (const singleGame of singleCompetition.game) {
                    //Finding game with correct ID
                    if (singleGame.id === id) {
                        //Filtering all 'OverUnder' markets
                        const overUnderArray = singleGame.market.filter(
                            (singleMarket: MarketObj) =>
                                singleMarket.market_type === 'OverUnder'
                        )
                        //Sorting all 'OverUnder' markets by order
                        const overUnder = orderBy(overUnderArray, ['order'])
                        //Looping through all events to find one of type 'Under'
                        for (const singleEvent of overUnder[0].event) {
                            if (singleEvent.type === 'Under') {
                                singleEvent.price = 10

                                //Showing accept btn in betslip if this odd is already added to betslip
                                const possibleChanges = this.betslipData.filter(
                                    (singleBetslip: BetSlipDataObj) =>
                                        singleBetslip.subid ===
                                        singleEvent.id.toString()
                                )
                                if (possibleChanges.length !== 0) {
                                    this.acceptChangesVal = true
                                }
                            }
                        }

                        return true
                    }
                }
            }
        }
        return false
    }

    setUpdateScore = (id: number): boolean => {
        for (const singleRegion of this.sportData.region!) {
            for (const singleCompetition of singleRegion.competition) {
                for (const singleGame of singleCompetition.game) {
                    //Finding game with correct ID
                    if (singleGame.id === id) {
                        let newValue
                        //If it's currently 2. half of the match
                        if (singleGame.stats.score_set2 !== undefined) {
                            newValue =
                                singleGame.stats.score_set2.team1_value + 1
                            singleGame.stats.score_set2.team1_value = newValue
                            //If it's currently 1. half of the match
                        } else {
                            newValue =
                                singleGame.stats.score_set1.team1_value + 1
                            singleGame.stats.score_set1.team1_value = newValue
                        }
                        return true
                    }
                }
            }
        }
        return false
    }

    setUpdateTime = (id: number): boolean => {
        for (const singleRegion of this.sportData.region!) {
            for (const singleCompetition of singleRegion.competition) {
                for (const singleGame of singleCompetition.game) {
                    //Finding game with correct ID
                    if (singleGame.id === id) {
                        const newValue =
                            parseInt(singleGame.info.current_game_time) + 1
                        singleGame.info.current_game_time = newValue.toString()
                        return true
                    }
                }
            }
        }
        return false
    }

    get loading() {
        return this.loadingState
    }

    get error() {
        return this.errorMsg
    }

    get sport() {
        return this.sportData
    }

    get sportName() {
        return this.sportData.name
    }

    //Sort regions by order
    get regionsSorted() {
        const regionsSorted = orderBy(this.sport.region, ['order'])
        return regionsSorted
    }

    get title() {
        return this.titleText
    }

    get gamesRemoved() {
        return this.deletedGames
    }

    get betslip() {
        return this.betslipData
    }

    get acceptChanges() {
        return this.acceptChangesVal
    }

    get acceptDeletes() {
        return this.acceptDeletesVal
    }

    //Get region object from sportData store object
    currentRegion(regionName: string | undefined) {
        const curRegion = this.sport.region?.filter(
            (singelRegion: RegionObj) => singelRegion.name === regionName
        )
        return curRegion
    }

    //Getting price for odd from sport data for comparation in betslip modal
    currentPrice(singleBetslip: BetSlipDataObj) {
        let currentPrice: number = 0
        for (const singleRegion of store.sport.region!) {
            for (const singleCompetition of singleRegion.competition) {
                for (const singleGame of singleCompetition.game) {
                    for (const singleMarket of singleGame.market) {
                        //Finding market with correct id
                        if (singleMarket.id.toString() === singleBetslip.id) {
                            //Trying to find event with correct id
                            const correctEvent = singleMarket.event.filter(
                                (singleEvent: EventObj) =>
                                    singleEvent.id.toString() ===
                                    singleBetslip.subid
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
}

const store = new Store()

export default store

import { makeAutoObservable } from 'mobx'
import { orderBy } from 'lodash'

import {
    SportDataObj,
    RegionObj,
    CompetitionObj,
    MarketObj,
} from '../types/interfaces'

class Store {
    private loadingState: boolean = true
    private errorMsg: string = ''
    private sportData: SportDataObj = {
        id: 0,
    }
    private titleText: string = 'Football - In Play'

    constructor() {
        makeAutoObservable(this)
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

    setDeleteRegion = (id: number): boolean => {
        for (let i = 0; i < this.sportData.region!.length; i++) {
            //Finding region with correct ID
            if (this.sportData.region![i].id === id) {
                // Removing region with the correct ID using splice
                this.sportData.region!.splice(i, 1)
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
                    // Removing competition with the correct ID using splice
                    singleRegion.competition.splice(i, 1)
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
            //Nomber of regions already in object
            const currentRegions = this.sportData.region!.length
            //Getting Tanzania region object
            const regionTanzania = this.sportData.region!.filter(
                (singleRegion: RegionObj) => singleRegion.id === tanzaniaId
            )
            //Making copy of Tanzania region object
            const tanzaniaCopy = { ...regionTanzania[0] }
            //Changing property values for id and name
            tanzaniaCopy.id = tanzaniaId + 1
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
                //Getting Tanzania first competition object
                for (const singleRegion of this.sportData.region!) {
                    if (singleRegion.id == tanzaniaId) {
                        const competitionTanzania =
                            singleRegion.competition!.filter(
                                (singleCompetition: CompetitionObj) =>
                                    singleCompetition.id === firstTanzaniaComp
                            )
                        //Making copy of Tanzania competition object
                        const tanzaniaCopy = { ...competitionTanzania[0] }
                        //Changing property values for id and name
                        tanzaniaCopy.id = firstTanzaniaComp + 1
                        tanzaniaCopy.name = 'Added league'
                        console.log(tanzaniaCopy)
                        //Adding new competition
                        for (const singleRegion of this.sportData.region!) {
                            if (singleRegion.id == id) {
                                singleRegion.competition[currentCompetitions] =
                                    tanzaniaCopy
                            }
                        }
                        return true
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
                                singleEvent.price = 0
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

    get title() {
        return this.titleText
    }
}

const store = new Store()

export default store

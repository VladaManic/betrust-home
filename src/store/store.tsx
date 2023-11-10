import { makeAutoObservable } from 'mobx'

import { SportDataObj } from '../types/interfaces'

class Store {
    private loadingState: boolean = true
    private errorMsg: string = ''
    private sportData: SportDataObj = {}
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

    setUpdateScore = (id: number): boolean => {
        for (const singleRegion of this.sportData.region!) {
            for (const singleCompetition of singleRegion.competition) {
                for (const singleGame of singleCompetition.game) {
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

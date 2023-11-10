/* eslint-disable @typescript-eslint/no-explicit-any */
import { makeAutoObservable } from 'mobx'

import {
    SportDataObj,
    RegionObj,
    CompetitionObj,
    GameObj,
} from '../types/interfaces'

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

    setUpdate = (id: number) => {
        this.sportData.region!.forEach(function (singleRegion: RegionObj) {
            singleRegion.competition.forEach(function (
                singleCompetition: CompetitionObj
            ) {
                singleCompetition.game.forEach(function (singleGame: GameObj) {
                    if (singleGame.id === id) {
                        const newValue =
                            parseInt(singleGame.info.current_game_time) + 1
                        console.log(newValue)
                        singleGame.info.current_game_time = newValue.toString()
                    }
                })
            })
        })
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

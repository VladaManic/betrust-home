import { makeAutoObservable } from 'mobx'

import { SportDataObj } from '../types/interfaces'

class Store {
    private loadingState: boolean = true
    private sportData: SportDataObj = {}

    constructor() {
        makeAutoObservable(this)
    }

    setData = (data: SportDataObj) => {
        this.sportData = data
    }

    setLoading = (state: boolean) => {
        this.loadingState = state
    }

    get sport() {
        return this.sportData
    }

    get loading() {
        return this.loadingState
    }
}

const store = new Store()

export default store

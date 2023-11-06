import { makeAutoObservable } from 'mobx'

import { SportDataObj } from '../types/interfaces'

class Store {
    private loadingState: boolean = true
    private errorMsg: string = ''
    private sportData: SportDataObj = {}

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

    get loading() {
        return this.loadingState
    }

    get error() {
        return this.errorMsg
    }

    get sport() {
        return this.sportData
    }
}

const store = new Store()

export default store

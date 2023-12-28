import { makeAutoObservable } from 'mobx'
import store from './store'
import isStorageSupported from '../utils/isStorageSupported'
import { orderBy } from 'lodash'

import { RegionObj, CompetitionObj, MarketObj } from '../types/interfaces'

class StoreFilter {
    private filteredRegion: RegionObj = {
        id: 0,
        name: '',
        competition: [],
    }
    private filteredCompetition: CompetitionObj = { id: 0, name: '', game: [] }

    constructor() {
        makeAutoObservable(this)
        //Checking if local-storage is available
        if (isStorageSupported('localStorage')) {
            try {
                //Returning from localStorage filtered region
                this.filteredRegion = JSON.parse(
                    localStorage.getItem('filteredRegion') || ''
                )
            } catch (err) {
                //No filtered region
                this.filteredRegion = { id: 0, name: '', competition: [] }
            }
            try {
                //Returning from localStorage filtered competition
                this.filteredCompetition = JSON.parse(
                    localStorage.getItem('filteredCompetition') || ''
                )
            } catch (err) {
                //No filtered competition
                this.filteredCompetition = { id: 0, name: '', game: [] }
            }
        } else {
            this.filteredRegion = { id: 0, name: '', competition: [] }
            this.filteredCompetition = { id: 0, name: '', game: [] }
        }
    }

    setFilteredRegion = (regionName: string | undefined) => {
        const currentRegion = store.sport.region!.filter(
            (singleRegion: RegionObj) => singleRegion.name === regionName
        )
        this.filteredRegion = currentRegion[0]
        //Adding filtered region to localStorage
        isStorageSupported('localStorage') &&
            localStorage.setItem(
                'filteredRegion',
                JSON.stringify(currentRegion[0])
            )
    }

    setFilteredCompetition = (
        regionName: string | undefined,
        competitionName: string | undefined
    ) => {
        const currentRegion = store.sport.region!.filter(
            (singleRegion: RegionObj) => singleRegion.name === regionName
        )
        this.filteredRegion = currentRegion[0]
        const currentCompetition = currentRegion[0].competition.filter(
            (singleCompetition: CompetitionObj) =>
                singleCompetition.name === competitionName
        )
        this.filteredCompetition = currentCompetition[0]
        //Adding filtered region and competition to localStorage
        isStorageSupported('localStorage') &&
            localStorage.setItem(
                'filteredRegion',
                JSON.stringify(currentRegion[0])
            )
        localStorage.setItem(
            'filteredCompetition',
            JSON.stringify(currentCompetition[0])
        )
    }

    //Reseting filtering competition data
    setFilterCompetitionReset = () => {
        const resetCompetition = { id: 0, name: '', game: [] }
        this.filteredCompetition = resetCompetition
        //Reset filtered competition in localStorage
        isStorageSupported('localStorage') &&
            localStorage.setItem(
                'filteredCompetition',
                JSON.stringify(resetCompetition)
            )
    }

    //Reseting filtering region and competition data
    setFilterReset = () => {
        const resetRegion = {
            id: 0,
            name: '',
            competition: [],
        }
        this.filteredRegion = resetRegion
        //Reset filtered region in localStorage
        isStorageSupported('localStorage') &&
            localStorage.setItem('filteredRegion', JSON.stringify(resetRegion))
        //Reseting filtering competition data
        this.setFilterCompetitionReset()
    }

    //Removing game from filtered region amd competition
    setRemoveGame = (id: number) => {
        //Remove game from filtered region
        for (const singleCompetition of this.filteredRegion.competition) {
            for (let i = 0; i < singleCompetition.game.length; i++) {
                //Finding game with correct ID
                if (singleCompetition.game[i].id === id) {
                    //Removing game with the correct ID using splice
                    singleCompetition.game.splice(i, 1)
                }
            }
        }
        //Remove game from filtered competition
        for (let i = 0; i < this.filteredCompetition.game.length; i++) {
            //Finding game with correct ID
            if (this.filteredCompetition.game[i].id === id) {
                //Removing game with the correct ID using splice
                this.filteredCompetition.game.splice(i, 1)
            }
        }
    }

    setUpdateOdd = (id: number) => {
        //Update game for filtered region
        for (const singleCompetition of this.filteredRegion.competition) {
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
                        }
                    }
                }
            }
        }
        //Update game for filtered competition
        for (const singleGame of this.filteredCompetition.game) {
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
                    }
                }
            }
        }
    }

    get regionFiltered() {
        return this.filteredRegion
    }

    get competitionFiltered() {
        return this.filteredCompetition
    }
}

const storeFilter = new StoreFilter()

export default storeFilter

import { makeAutoObservable } from 'mobx'
import store from './store'
import isStorageSupported from '../utils/isStorageSupported'

import { RegionObj, CompetitionObj } from '../types/interfaces'

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

    //Reseting filtering region and competition data
    setFilterReset = () => {
        const resetRegion = {
            id: 0,
            name: '',
            competition: [],
        }
        const restCompetition = { id: 0, name: '', game: [] }
        this.filteredRegion = resetRegion
        this.filteredCompetition = restCompetition
        //Reset filtered region and competition in localStorage
        isStorageSupported('localStorage') &&
            localStorage.setItem('filteredRegion', JSON.stringify(resetRegion))
        localStorage.setItem('filteredCompetition', JSON.stringify(resetRegion))
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

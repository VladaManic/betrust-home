import { observer } from 'mobx-react'
import store from '../../../store/store'
import { orderBy } from 'lodash'

import Region from '../Region'

import { AllMarketsWrap } from './style'
import { RegionObj } from '../../../types/interfaces'

const AllMarkets = () => {
    const games = store.sport
    //Sort regions by order
    const regionsSorted = orderBy(games.region, ['order'])

    return (
        <AllMarketsWrap>
            {regionsSorted.map((singleRegion: RegionObj) => (
                <Region key={singleRegion.name} singleRegion={singleRegion} />
            ))}
        </AllMarketsWrap>
    )
}

export default observer(AllMarkets)

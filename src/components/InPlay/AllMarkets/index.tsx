import { observer } from 'mobx-react'
import store from '../../../store/store'

import Region from '../Region'

import { AllMarketsWrap } from './style'
import { RegionObj } from '../../../types/interfaces'

const AllMarkets = () => {
    const games = store.sport

    return (
        <AllMarketsWrap>
            {games.region?.map((singleRegion: RegionObj) => (
                <Region key={singleRegion.name} singleRegion={singleRegion} />
            ))}
        </AllMarketsWrap>
    )
}

export default observer(AllMarkets)

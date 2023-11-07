import { observer } from 'mobx-react'
import store from '../../../store/store'
import { orderBy } from 'lodash'

import Region from '../Region'

import { ContentWrap } from './style'
import { RegionObj } from '../../../types/interfaces'

const Content = () => {
    const games = store.sport
    //Sort regions by order
    const regionsSorted = orderBy(games.region, ['order'])

    return (
        <ContentWrap>
            {regionsSorted.map((singleRegion: RegionObj) => (
                <Region key={singleRegion.name} singleRegion={singleRegion} />
            ))}
        </ContentWrap>
    )
}

export default observer(Content)

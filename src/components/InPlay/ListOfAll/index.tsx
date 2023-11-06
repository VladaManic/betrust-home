import { observer } from 'mobx-react'
import store from '../../../store/store'
import { orderBy } from 'lodash'

import Region from '../Region'

import { ListOfAllWrap } from './style'
import { RegionObj } from '../../../types/interfaces'

const ListOfAll = () => {
    const games = store.sport
    //Sort regions by order
    const regionsSorted = orderBy(games.region, ['order'])

    return (
        <ListOfAllWrap>
            {regionsSorted.map((singleRegion: RegionObj) => (
                <Region key={singleRegion.name} singleRegion={singleRegion} />
            ))}
        </ListOfAllWrap>
    )
}

export default observer(ListOfAll)

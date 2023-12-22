import { observer } from 'mobx-react'
import store from '../../../store/store'

import Region from '../Region'

import { ContentWrap } from './style'
import { RegionObj } from '../../../types/interfaces'

const Content = () => {
    const regions = store.regionsSorted

    return (
        <ContentWrap>
            {regions.map((singleRegion: RegionObj) => (
                <Region key={singleRegion.id} singleRegion={singleRegion} />
            ))}
        </ContentWrap>
    )
}

export default observer(Content)

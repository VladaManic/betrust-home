import { observer } from 'mobx-react'
import store from '../../../store/store'
import { orderBy } from 'lodash'

import Region from '../Region'
import Modal from '../../Reusable/Modal'
import BetslipModal from '../../Modals/BetslipModal'

import { ContentWrap } from './style'
import { RegionObj } from '../../../types/interfaces'

const Content = () => {
    const games = store.sport
    //Sort regions by order
    const regionsSorted = orderBy(games.region, ['order'])

    return (
        <ContentWrap>
            {regionsSorted.map((singleRegion: RegionObj) => (
                <Region key={singleRegion.id} singleRegion={singleRegion} />
            ))}
            {store.betslip.length !== 0 && (
                <Modal onClose={undefined} overlayDisplay={false}>
                    <BetslipModal />
                </Modal>
            )}
        </ContentWrap>
    )
}

export default observer(Content)

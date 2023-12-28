import { useParams } from 'react-router-dom'
import { observer } from 'mobx-react'
import storeFilter from '../../store/storeFilter'

import Title from '../../components/Reusable/Title'
import Breadcrumb from '../../components/Reusable/Breadcrumb'
import CompetitionLoop from '../../components/Single/CompetitionLoop'
import ModalBetslip from '../../components/Reusable/ModalBetslip'

import { SingleRegionWrap } from './style'

const SingleRegion = () => {
    //Get URL
    const { regionName } = useParams()
    const currentRegion = storeFilter.regionFiltered

    return (
        <SingleRegionWrap>
            <Title />
            <Breadcrumb regionName={regionName} competitionName={undefined} />
            <CompetitionLoop region={currentRegion} regionName={regionName} />
            <ModalBetslip />
        </SingleRegionWrap>
    )
}

export default observer(SingleRegion)

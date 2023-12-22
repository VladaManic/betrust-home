import { useParams } from 'react-router-dom'
import { observer } from 'mobx-react'

import Title from '../../components/Reusable/Title'
import Breadcrumb from '../../components/Reusable/Breadcrumb'
import CompetitionLoop from '../../components/Single/CompetitionLoop'
import ModalBetslip from '../../components/Reusable/ModalBetslip'

import { SingleRegionWrap } from './style'

const SingleRegion = () => {
    //Get URL
    const { regionName } = useParams()

    return (
        <SingleRegionWrap>
            <Title />
            <Breadcrumb regionName={regionName} competitionName={undefined} />
            <CompetitionLoop regionName={regionName} />
            <ModalBetslip />
        </SingleRegionWrap>
    )
}

export default observer(SingleRegion)

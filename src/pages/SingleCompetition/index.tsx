import { useParams } from 'react-router-dom'
import { observer } from 'mobx-react'
import storeFilter from '../../store/storeFilter'

import Title from '../../components/Reusable/Title'
import Breadcrumb from '../../components/Reusable/Breadcrumb'
import Competition from '../../components/Single/Competition'
import ModalBetslip from '../../components/Reusable/ModalBetslip'

import { SingleCompetitionWrap } from './style'

const SingleCompetition = () => {
    //Get URL
    const { regionName, competitionName } = useParams()
    const currentRegion = storeFilter.regionFiltered
    const currentCompetition = storeFilter.competitionFiltered

    return (
        <SingleCompetitionWrap>
            <Title />
            <Breadcrumb
                regionName={regionName}
                competitionName={competitionName}
            />
            <Competition
                regionName={regionName}
                competitionName={competitionName}
                region={currentRegion}
                competition={currentCompetition}
            />
            <ModalBetslip />
        </SingleCompetitionWrap>
    )
}

export default observer(SingleCompetition)

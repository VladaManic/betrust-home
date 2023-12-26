import { useParams } from 'react-router-dom'
import { observer } from 'mobx-react'

import Title from '../../components/Reusable/Title'
import Breadcrumb from '../../components/Reusable/Breadcrumb'
import Competition from '../../components/Single/Competition'
import ModalBetslip from '../../components/Reusable/ModalBetslip'

import { SingleCompetitionWrap } from './style'

const SingleCompetition = () => {
    //Get URL
    const { regionName, competitionName } = useParams()

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
            />
            <ModalBetslip />
        </SingleCompetitionWrap>
    )
}

export default observer(SingleCompetition)

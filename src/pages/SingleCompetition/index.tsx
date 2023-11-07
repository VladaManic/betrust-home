import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { observer } from 'mobx-react'
import store from '../../store/store'

import Title from '../../components/Reusable/Title'
import Breadcrumb from '../../components/Reusable/Breadcrumb'
import Competition from '../../components/Reusable/Competition'

import { SingleCompetitionWrap } from './style'
import { RegionObj, CompetitionObj } from '../../types/interfaces'

const SingleCompetition = () => {
    //Get URL
    const { regionName, competitionName } = useParams()
    //Get that region object from sportData store object
    const currentRegion = store.sport.region?.filter(
        (singelRegion: RegionObj) => singelRegion.name === regionName
    )
    //Get that competition object
    const currentCompetition = currentRegion![0].competition.filter(
        (singelCompetition: CompetitionObj) =>
            singelCompetition.name === competitionName
    )

    useEffect(() => {
        //Set new value for page title
        store.setTitle(`${competitionName}`)
    }, [])

    return (
        <SingleCompetitionWrap>
            <Title />
            <Breadcrumb
                regionName={regionName}
                competitionName={competitionName}
            />
            <Competition
                singleCompetition={currentCompetition[0]}
                regionName={regionName}
            />
        </SingleCompetitionWrap>
    )
}

export default observer(SingleCompetition)

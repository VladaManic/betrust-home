import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { observer } from 'mobx-react'
import store from '../../store/store'

import Title from '../../components/Reusable/Title'
import Breadcrumb from '../../components/Reusable/Breadcrumb'
import Competition from '../../components/Reusable/Competition'

import { SingleRegionWrap } from './style'
import { RegionObj, CompetitionObj } from '../../types/interfaces'

const SingleRegion = () => {
    //Get URL
    const { regionName } = useParams()
    //Get that region object from sportData store object
    const currentRegion = store.sport.region?.filter(
        (singelRegion: RegionObj) => singelRegion.name === regionName
    )

    useEffect(() => {
        //Set new value for page title
        store.setTitle(`${regionName} - In Play`)
    }, [])

    return (
        <SingleRegionWrap>
            <Title />
            <Breadcrumb regionName={regionName} competitionName={undefined} />
            {currentRegion![0].competition.map(
                (singleCompetition: CompetitionObj) => (
                    <Competition
                        key={singleCompetition.name}
                        singleCompetition={singleCompetition}
                        regionName={regionName}
                    />
                )
            )}
        </SingleRegionWrap>
    )
}

export default observer(SingleRegion)

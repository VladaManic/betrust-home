import { observer } from 'mobx-react'
import store from '../../../store/store'
import { orderBy } from 'lodash'

import League from '../../../components/Reusable/League'
import EmptySingle from '../../../components/Reusable/EmptySingle'

import { RegionObj, CompetitionObj } from '../../../types/interfaces'

interface Props {
    regionName: string | undefined
}

const CompetitionLoop = ({ regionName }: Props) => {
    //Get that region object from sportData store object
    const currentRegion = store.sport.region?.filter(
        (singelRegion: RegionObj) => singelRegion.name === regionName
    )
    //Sort competitions inside region
    const competionsSorted =
        currentRegion?.length !== 0 &&
        orderBy(currentRegion![0].competition, ['order'])

    return (
        <>
            {currentRegion?.length !== 0 ? (
                competionsSorted !== false ? (
                    competionsSorted.map(
                        (singleCompetition: CompetitionObj) => (
                            <League
                                key={singleCompetition.name}
                                singleCompetition={singleCompetition}
                                regionName={regionName}
                            />
                        )
                    )
                ) : (
                    <EmptySingle text={'Region'} />
                )
            ) : (
                <EmptySingle text={'Region'} />
            )}
        </>
    )
}

export default observer(CompetitionLoop)

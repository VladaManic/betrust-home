import { observer } from 'mobx-react'
import store from '../../../store/store'

import League from '../../../components/Reusable/League'
import EmptySingle from '../../../components/Reusable/EmptySingle'

import { CompetitionObj } from '../../../types/interfaces'

interface Props {
    regionName: string | undefined
}

const CompetitionLoop = ({ regionName }: Props) => {
    const current = store.currentRegionAndCompetitionsSorted(regionName)

    return (
        <>
            {current.region?.length !== 0 ? (
                current.competitionsSorted !== false ? (
                    current.competitionsSorted.map(
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

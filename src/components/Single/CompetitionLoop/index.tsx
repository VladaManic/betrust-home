import { observer } from 'mobx-react'
import { orderBy } from 'lodash'

import League from '../../../components/Reusable/League'
import EmptySingle from '../../../components/Reusable/EmptySingle'

import { RegionObj, CompetitionObj } from '../../../types/interfaces'

interface Props {
    region: RegionObj
    regionName: string | undefined
}

const CompetitionLoop = ({ region, regionName }: Props) => {
    const competitionsSorted = orderBy(region.competition, ['order'])

    return (
        <>
            {region.name === regionName ? (
                competitionsSorted.map((singleCompetition: CompetitionObj) => (
                    <League
                        key={singleCompetition.name}
                        singleCompetition={singleCompetition}
                        regionName={region.name}
                    />
                ))
            ) : (
                <EmptySingle text={'Region'} />
            )}
        </>
    )
}

export default observer(CompetitionLoop)

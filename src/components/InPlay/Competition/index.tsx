import { orderBy } from 'lodash'

import League from '../../Reusable/League'

import { RegionObj, CompetitionObj } from '../../../types/interfaces'

interface Props {
    singleRegion: RegionObj
    opened: boolean
}

const Competition = ({ singleRegion, opened }: Props) => {
    //Sort competitions by order
    const competionsSorted = orderBy(singleRegion.competition, ['order'])

    return (
        <>
            {opened && (
                <>
                    {competionsSorted.map(
                        (singleCompetition: CompetitionObj) => (
                            <League
                                key={singleCompetition.name}
                                singleCompetition={singleCompetition}
                                regionName={singleRegion.name}
                            />
                        )
                    )}
                </>
            )}
        </>
    )
}

export default Competition

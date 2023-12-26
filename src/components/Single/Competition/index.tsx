import { observer } from 'mobx-react'
import storeBetslip from '../../../store/storeBetslip'

import League from '../../../components/Reusable/League'
import EmptySingle from '../../../components/Reusable/EmptySingle'

interface Props {
    regionName: string | undefined
    competitionName: string | undefined
}

const Competition = ({ regionName, competitionName }: Props) => {
    const current = storeBetslip.currentCompetition(regionName, competitionName)

    return (
        <>
            {/* If region exists */}
            {current.region?.length !== 0 ? (
                // If competition exists
                current.competition !== false &&
                current.competition.length !== 0 ? (
                    <League
                        singleCompetition={current.competition[0]}
                        regionName={regionName}
                    />
                ) : (
                    <EmptySingle text={'Competition'} />
                )
            ) : (
                <EmptySingle text={'Competition'} />
            )}
        </>
    )
}

export default observer(Competition)

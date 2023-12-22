import { observer } from 'mobx-react'
import store from '../../../store/store'

import League from '../../../components/Reusable/League'
import EmptySingle from '../../../components/Reusable/EmptySingle'

import { CompetitionObj } from '../../../types/interfaces'

interface Props {
    regionName: string | undefined
    competitionName: string | undefined
}

const Competition = ({ regionName, competitionName }: Props) => {
    const currentRegion = store.currentRegion(regionName)
    //Get that competition object if there is correct region object
    const currentCompetition =
        currentRegion?.length !== 0 &&
        currentRegion![0].competition.filter(
            (singelCompetition: CompetitionObj) =>
                singelCompetition.name === competitionName
        )

    return (
        <>
            {/* If region exists */}
            {currentRegion?.length !== 0 ? (
                // If competition exists
                currentCompetition !== false &&
                currentCompetition.length !== 0 ? (
                    <League
                        singleCompetition={currentCompetition[0]}
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

import { observer } from 'mobx-react'
import { RegionObj, CompetitionObj } from '../../../types/interfaces'

import League from '../../../components/Reusable/League'
import EmptySingle from '../../../components/Reusable/EmptySingle'

interface Props {
    regionName: string | undefined
    competitionName: string | undefined
    region: RegionObj
    competition: CompetitionObj
}

const Competition = ({
    regionName,
    competitionName,
    region,
    competition,
}: Props) => {
    return (
        <>
            {region.name === regionName ? (
                competition.name === competitionName ? (
                    <League
                        singleCompetition={competition}
                        regionName={regionName}
                    />
                ) : (
                    <EmptySingle text={'Competition'} />
                )
            ) : (
                <EmptySingle text={'Region'} />
            )}
        </>
    )
}

export default observer(Competition)

import { CompetitionObj } from '../../../types/interfaces'

interface Props {
    singleCompetition: CompetitionObj
}

const Competition = ({ singleCompetition }: Props) => {
    return <div>{singleCompetition.name}</div>
}

export default Competition

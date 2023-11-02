import Game from '../Game'

import arrowIcon from '../../../assets/img/arrow-small.svg'
import {
    CompetitionWrap,
    CompetitionTitleWrap,
    CompetitionTitleInner,
    FilterBtn,
    CompetitionArrowWrap,
    CompetitionCount,
    CompetitionArrow,
    CompetitionHeader,
    HeaderUp,
    BetType,
    HeaderDown,
    BetValue,
} from './style'
import { CompetitionObj, GameObj } from '../../../types/interfaces'

interface Props {
    singleCompetition: CompetitionObj
    regionName: string
}

const Competition = ({ singleCompetition, regionName }: Props) => {
    return (
        <CompetitionWrap>
            <CompetitionTitleWrap>
                <CompetitionTitleInner>
                    <FilterBtn>{regionName}</FilterBtn>/
                    <FilterBtn>{singleCompetition.name}</FilterBtn>
                </CompetitionTitleInner>
                <CompetitionArrowWrap>
                    <CompetitionCount>
                        {singleCompetition.game.length}
                    </CompetitionCount>
                    <CompetitionArrow src={arrowIcon} alt="Arrow icon" />
                </CompetitionArrowWrap>
            </CompetitionTitleWrap>
            <CompetitionHeader>
                <HeaderUp>
                    <BetType>Winner</BetType>
                    <BetType>Handicap</BetType>
                    <BetType>Over / Under</BetType>
                </HeaderUp>
                <HeaderDown>
                    <BetValue>1</BetValue>
                    <BetValue>X</BetValue>
                    <BetValue>2</BetValue>
                    <BetValue>1</BetValue>
                    <BetValue></BetValue>
                    <BetValue>2</BetValue>
                    <BetValue>Over</BetValue>
                    <BetValue>O/U</BetValue>
                    <BetValue>Under</BetValue>
                </HeaderDown>
            </CompetitionHeader>
            {singleCompetition.game.map((singleGame: GameObj) => (
                <Game key={singleGame.id} singleGame={singleGame} />
            ))}
        </CompetitionWrap>
    )
}

export default Competition

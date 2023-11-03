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
    HeaderDown,
    HeaderLeft,
    HeaderRight,
    BetHalfEmpty,
    BetTypeWrap,
    BetType,
    BetValue,
    BetValueEmpty,
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
                    <HeaderLeft></HeaderLeft>
                    <HeaderRight>
                        <BetHalfEmpty></BetHalfEmpty>
                        <BetTypeWrap>
                            <BetType>Winner</BetType>
                            <BetType>Handicap</BetType>
                            <BetType>Over / Under</BetType>
                        </BetTypeWrap>
                        <BetValueEmpty></BetValueEmpty>
                    </HeaderRight>
                </HeaderUp>
                <HeaderDown>
                    <HeaderLeft></HeaderLeft>
                    <HeaderRight>
                        <BetHalfEmpty></BetHalfEmpty>
                        <BetValue className="event-header">1</BetValue>
                        <BetValue className="event-header">X</BetValue>
                        <BetValue className="event-header">2</BetValue>
                        <BetValue className="event-header">1</BetValue>
                        <BetValue className="event-header"></BetValue>
                        <BetValue className="event-header">2</BetValue>
                        <BetValue className="event-header">Over</BetValue>
                        <BetValue className="event-header">O/U</BetValue>
                        <BetValue className="event-header">Under</BetValue>
                        <BetValueEmpty></BetValueEmpty>
                    </HeaderRight>
                </HeaderDown>
            </CompetitionHeader>
            {singleCompetition.game.map((singleGame: GameObj) => (
                <Game key={singleGame.id} singleGame={singleGame} />
            ))}
        </CompetitionWrap>
    )
}

export default Competition

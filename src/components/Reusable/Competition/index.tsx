import { NavLink } from 'react-router-dom'
import useAccordion from '../../../hooks/useAccordion'
import chooseFlag from '../../../utils/chooseFlag'
import clsx from 'clsx'

import Game from '../../InPlay/Game'

import arrowIcon from '../../../assets/img/arrow-small.svg'
import {
    CompetitionWrap,
    CompetitionTitleWrap,
    CompetitionTitleInner,
    RegionFlag,
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
    regionName: string | undefined
}

const Competition = ({ singleCompetition, regionName }: Props) => {
    //Using custom hook for opening/closing competition
    const { opened, setOpened } = useAccordion(false)

    return (
        <CompetitionWrap className={clsx(opened && 'active')}>
            <CompetitionTitleWrap className="competition-title">
                <CompetitionTitleInner>
                    <RegionFlag src={chooseFlag(regionName)} alt={regionName} />
                    <NavLink to={`/region/${regionName}`}>
                        <FilterBtn>{regionName}</FilterBtn>
                    </NavLink>
                    /
                    <NavLink
                        to={`/region/${regionName}/competition/${singleCompetition.name}`}
                    >
                        <FilterBtn>{singleCompetition.name}</FilterBtn>
                    </NavLink>
                </CompetitionTitleInner>
                <CompetitionArrowWrap>
                    <CompetitionCount>
                        {singleCompetition.game.length}
                    </CompetitionCount>
                    <CompetitionArrow
                        src={arrowIcon}
                        alt="Arrow icon"
                        className="competition-arrow"
                        onClick={() => setOpened((curr: boolean) => !curr)}
                    />
                </CompetitionArrowWrap>
            </CompetitionTitleWrap>
            {opened && (
                <>
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
                                <BetValue className="event-header">
                                    Over
                                </BetValue>
                                <BetValue className="event-header">
                                    O/U
                                </BetValue>
                                <BetValue className="event-header">
                                    Under
                                </BetValue>
                                <BetValueEmpty></BetValueEmpty>
                            </HeaderRight>
                        </HeaderDown>
                    </CompetitionHeader>
                    {singleCompetition.game.map((singleGame: GameObj) => (
                        <Game key={singleGame.id} singleGame={singleGame} />
                    ))}
                </>
            )}
        </CompetitionWrap>
    )
}

export default Competition

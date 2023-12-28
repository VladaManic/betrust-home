import { useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react'
import storeFilter from '../../../store/storeFilter'
import clsx from 'clsx'
import useAccordion from '../../../hooks/useAccordion'
import chooseFlag from '../../../utils/chooseFlag'

import GameLoop from '../GameLoop'

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

import { CompetitionObj } from '../../../types/interfaces'

interface Props {
    singleCompetition: CompetitionObj
    regionName: string | undefined
}

const League = ({ singleCompetition, regionName }: Props) => {
    const navigate = useNavigate()
    //Using custom hook for opening/closing competition
    const { opened, setOpened } = useAccordion(false)

    //Clicking region filter
    const onClickRegion = () => {
        storeFilter.setFilteredRegion(regionName)
        //Redirect to single region page
        navigate(`/region/${regionName}`)
    }

    //Clicking competition filter
    const onClickCompetition = () => {
        storeFilter.setFilteredCompetition(regionName, singleCompetition.name)
        //Redirect to single competition page
        navigate(`/region/${regionName}/competition/${singleCompetition.name}`)
    }

    return (
        <CompetitionWrap className={clsx(opened && 'active')}>
            <CompetitionTitleWrap className="competition-title">
                <CompetitionTitleInner>
                    <RegionFlag src={chooseFlag(regionName)} alt={regionName} />
                    <FilterBtn onClick={onClickRegion}>{regionName}</FilterBtn>/
                    <FilterBtn onClick={onClickCompetition}>
                        {singleCompetition.name}
                    </FilterBtn>
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
                    <GameLoop singleCompetition={singleCompetition} />
                </>
            )}
        </CompetitionWrap>
    )
}

export default observer(League)

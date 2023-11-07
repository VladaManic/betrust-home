import styled from 'styled-components'
import { color } from '../../../shared/styles/variables'

export const CompetitionWrap = styled.div`
    &.active {
        .competition-title {
            margin-bottom: 0;
            border-radius: 10px 10px 0 0;
        }

        .competition-arrow {
            transform: rotate(180deg);
        }
    }
`

export const CompetitionTitleWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;
    padding-right: 15px;
    padding-left: 15px;
    margin-bottom: 5px;
    border-radius: 10px;
    background-color: ${color.sidebarBg};
`

export const CompetitionTitleInner = styled.div``

export const RegionFlag = styled.img`
    width: 14px;
    margin-right: 5px;
`

export const FilterBtn = styled.button`
    margin-right: 3px;
    margin-left: 3px;
    color: ${color.activeBlue};
`

export const CompetitionArrowWrap = styled.div`
    display: flex;
`

export const CompetitionCount = styled.p`
    margin-right: 10px;
`

export const CompetitionArrow = styled.img`
    display: inline-block;
    cursor: pointer;
`

export const CompetitionHeader = styled.div`
    height: 58px;
    border-radius: 0 0 10px 10px;
    background-color: ${color.regionTitleBg};
`

export const HeaderUp = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50%;
`

export const HeaderDown = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50%;
`

export const HeaderLeft = styled.div`
    display: flex;
    width: 15%;
`

export const HeaderRight = styled.div`
    display: flex;
    flex: 1;

    .event-header {
        width: 10%;
        margin-right: 5px;
        text-align: center;
        color: ${color.linksBlue};

        &:nth-of-type(4),
        &:nth-of-type(7) {
            margin-right: 20px;
        }

        &:last-of-type {
            margin-right: 5px;
        }
    }
`

export const BetHalfEmpty = styled.p`
    width: 57px;
`

export const BetTypeWrap = styled.div`
    display: flex;
    justify-content: space-between;
    flex: 1;
`

export const BetType = styled.p`
    width: 31%;
    text-align: center;
    color: ${color.balanceGray};
`

export const BetValue = styled.p``

export const BetValueEmpty = styled.p`
    width: 30px;
`

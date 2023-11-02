import styled from 'styled-components'
import { color } from '../../../shared/styles/variables'

export const CompetitionWrap = styled.div``

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
`

export const CompetitionHeader = styled.div`
    height: 58px;
    border-radius: 0 0 10px 10px;
    background-color: ${color.regionTitleBg};
`

export const HeaderUp = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 50%;
`

export const BetType = styled.p`
    color: ${color.balanceGray};
`

export const HeaderDown = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 50%;
`

export const BetValue = styled.p`
    color: ${color.linksBlue};
`

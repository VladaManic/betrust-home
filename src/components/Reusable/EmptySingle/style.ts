import styled from 'styled-components'
import { color } from '../../../shared/styles/variables'

export const EmptySingleWrap = styled.div`
    display: flex;
    width: 100%;
    height: 380px;
    border-radius: 5px;
    background-color: ${color.sidebarBg};
`

export const EmptySingleInner = styled.div`
    margin: auto;
    text-align: center;
`

export const EmptyIcon = styled.img`
    margin-bottom: 30px;
`

export const EmptyTitle = styled.h2`
    font-family: 'Axiforma', sans-serif;
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
    color: ${color.balanceGray};
`

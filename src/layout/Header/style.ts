import styled from 'styled-components'
import { color } from '../../shared/styles/variables'

export const HeaderWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 63px;
    background-color: ${color.headerBg};
    font-family: 'Open Sans SemiBold', sans-serif;
`

export const HeaderInner = styled.div`
    display: flex;
    align-items: center;
`

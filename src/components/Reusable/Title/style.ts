import styled from 'styled-components'
import { color } from '../../../shared/styles/variables'

export const TitleWrap = styled.div`
    display: flex;
    align-items: center;
    height: 52px;
    padding-left: 10px;
    margin-bottom: 20px;
    border-radius: 10px;
    background: linear-gradient(
        90deg,
        ${color.gradientBg} 0%,
        ${color.defaultBg} 100%
    );
`

export const TitleIcon = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 15px;
`

export const TitleText = styled.h2``

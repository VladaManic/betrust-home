import styled from 'styled-components'
import { color } from '../../../shared/styles/variables'

export const RegionWrap = styled.div`
    margin-bottom: 15px;

    &.active {
        .region-title {
            border-radius: 10px 10px 0 0;
        }

        .region-arrow {
            transform: rotate(180deg);
        }
    }
`

export const RegionTitleWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 15px;
    padding-left: 15px;
    border-radius: 10px;
    background-color: ${color.regionTitleBg};
    cursor: pointer;
`

export const RegionTitleInner = styled.div`
    display: flex;
`

export const RegionFlag = styled.img`
    margin-right: 5px;
`

export const RegionTitle = styled.h3``

export const RegionArrowWrap = styled.div``

export const RegionArrow = styled.img``

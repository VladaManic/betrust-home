import styled from 'styled-components'
import { color } from '../../../../shared/styles/variables'

export const EventBtnWrap = styled.button`
    height: 45px;
    width: 10%;
    color: ${color.defaultText};
    transition: all 0.4s ease;

    &:hover {
        opacity: 0.7;
    }
`

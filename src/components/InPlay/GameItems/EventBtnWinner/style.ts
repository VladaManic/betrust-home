import styled from 'styled-components'
import { color } from '../../../../shared/styles/variables'

export const EventBtnWrap = styled.button`
    height: 45px;
    width: 10%;
    border: 1px solid ${color.eventBlue};
    border-radius: 8px;
    color: ${color.defaultText};
    transition: all 0.4s ease;

    &:hover {
        opacity: 0.7;
    }

    &.disabled {
        pointer-events: none;
        cursor: auto;
    }

    &.disabled:hover {
        opacity: 1;
    }
`

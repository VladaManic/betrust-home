import styled from 'styled-components'
import { color } from '../../../shared/styles/variables'

export const BreadcrumbWrap = styled.p`
    margin-bottom: 20px;
`

export const BreadcrumbItem = styled.span`
    color: ${color.halfGray};

    &:last-child {
        color: ${color.defaultText};
    }
`

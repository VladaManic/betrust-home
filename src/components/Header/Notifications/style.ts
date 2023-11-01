import styled from 'styled-components'
import { color } from '../../../shared/styles/variables'

export const NotificationsWrap = styled.div`
    position: relative;
    margin-right: 20px;
    margin-bottom: -20px;
`

export const CountWrap = styled.div`
    position: absolute;
    top: -12px;
    right: -10px;
    display: flex;
    width: 20px;
    height: 20px;
    border-radius: 50px;
    background-color: ${color.countGreen};
    z-index: 10;
`

export const CountValue = styled.p`
    margin: auto;
    color: ${color.defaultBg};
`

export const NotificationsBellWrap = styled.div``

export const NotificationsBell = styled.img``

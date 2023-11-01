import styled from 'styled-components'
import { color } from '../../shared/styles/variables'

export const SidebarWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 256px;
    height: 636px;
    padding-top: 20px;
    background-color: ${color.sidebarBg};
    font-family: 'Open Sans Bold', sans-serif;
`

export const UpperWrap = styled.div``

export const BetrustLogo = styled.img`
    margin-left: 20px;
`

export const NavList = styled.ul`
    padding-top: 28px;
    padding-left: 16px;
    list-style-type: none;
`

export const ListItem = styled.li`
    margin-bottom: 25px;

    .nav-link {
        position: relative;
        font-family: 'Open Sans Bold', sans-serif;
        text-decoration: none;
        color: ${color.linksBlue};

        &.active:before {
            content: '';
            position: absolute;
            top: -8px;
            left: -16px;
            width: 4px;
            height: 36px;
            background-color: ${color.activeBlue};
        }
    }
`

export const DownerWrap = styled.div`
    margin: 15px;
`

export const DiscordWrap = styled.div`
    border-bottom: 1px solid ${color.linksBlue};
`

export const DiscordLogo = styled.img`
    margin-bottom: 15px;
`

export const BugReportWrap = styled.p`
    margin-top: 20px;
    padding-bottom: 35px;
    //font-weight: 700;
    color: ${color.linksBlue};
`

export const ExternalLinkIcon = styled.img`
    margin-left: 5px;
`

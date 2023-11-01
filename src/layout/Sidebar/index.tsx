import { NavLink } from 'react-router-dom'

import betrustLogo from '../../assets/img/betrust-logo.svg'
import discordIcon from '../../assets/img/discord-icon.svg'
import externalLink from '../../assets/img/external-link.svg'
import {
    SidebarWrap,
    UpperWrap,
    BetrustLogo,
    NavList,
    ListItem,
    DownerWrap,
    DiscordWrap,
    DiscordLogo,
    BugReportWrap,
    ExternalLinkIcon,
} from './style'

const Sidebar = () => {
    return (
        <SidebarWrap>
            <UpperWrap>
                <BetrustLogo src={betrustLogo} alt="Betrust logo" />
                <NavList>
                    <ListItem>
                        <NavLink to={`/`} end className="nav-link">
                            In Play
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink to={`/pre-match/`} className="nav-link">
                            Pre-Match
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink to={`/btr-exchange/`} className="nav-link">
                            BTR Excange
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink to={`/how-to-use/`} className="nav-link">
                            How to Use
                        </NavLink>
                    </ListItem>
                </NavList>
            </UpperWrap>
            <DownerWrap>
                <DiscordWrap>
                    <DiscordLogo src={discordIcon} alt="Discord logo" />
                </DiscordWrap>
                <BugReportWrap>
                    Bug Report
                    <ExternalLinkIcon
                        src={externalLink}
                        alt="External link icon"
                    />
                </BugReportWrap>
            </DownerWrap>
        </SidebarWrap>
    )
}

export default Sidebar

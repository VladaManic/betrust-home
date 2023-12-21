import ControlsModalBtn from '../../components/Header/ControlsModalBtn'
import Balance from '../../components/Header/Balance'
import WalletConnect from '../../components/Header/WalletConnect'
import Notifications from '../../components/Header/Notifications'

import { HeaderWrap, HeaderInner } from './style'

const Header = () => {
    return (
        <HeaderWrap>
            <ControlsModalBtn />
            <HeaderInner>
                <Balance />
                <WalletConnect />
                <Notifications />
            </HeaderInner>
        </HeaderWrap>
    )
}

export default Header

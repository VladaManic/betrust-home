import Balance from '../../components/Header/Balance'
import WalletConnect from '../../components/Header/WalletConnect'
import Notifications from '../../components/Header/Notifications'

import { HeaderWrap } from './style'

const Header = () => {
    return (
        <HeaderWrap>
            <Balance />
            <WalletConnect />
            <Notifications />
        </HeaderWrap>
    )
}

export default Header

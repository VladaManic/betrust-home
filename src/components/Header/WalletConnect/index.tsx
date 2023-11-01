import connectIcon from '../../../assets/img/wallet-icon.svg'
import { WalletWrap, WalletString, ConnectImg } from './style'

const WalletConnect = () => {
    return (
        <WalletWrap>
            <WalletString>
                <ConnectImg src={connectIcon} alt="Connect icon" />
                0x7b...67b85f
            </WalletString>
        </WalletWrap>
    )
}

export default WalletConnect

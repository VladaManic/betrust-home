import balanceIcon from '../../../assets/img/balance-icon.svg'
import { BalanceWrap, BalanceText, BalanceValue, BalanceImg } from './style'

const Balance = () => {
    return (
        <BalanceWrap>
            <BalanceText>Balance:</BalanceText>
            <BalanceValue>150,6500 BTR</BalanceValue>
            <BalanceImg src={balanceIcon} alt="Balance icon" />
        </BalanceWrap>
    )
}

export default Balance

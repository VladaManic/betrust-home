import balanceIcon from '../../../../assets/img/balance-icon.svg'
import {
    BetslipChangeableWrap,
    InputWrap,
    StakeInput,
    InputInner,
    InputText,
    InputImg,
    FooterBtns,
    ApproveBtn,
    PlaceBtn,
} from './style'

const BetslipChangeable = () => {
    return (
        <BetslipChangeableWrap>
            <InputWrap>
                <StakeInput placeholder="Set stake" type="text" />
                <InputInner>
                    <InputText>BTR</InputText>
                    <InputImg src={balanceIcon} alt="Balance icon" />
                </InputInner>
            </InputWrap>
            <FooterBtns>
                <ApproveBtn>Approve</ApproveBtn>
                <PlaceBtn>Place bet</PlaceBtn>
            </FooterBtns>
        </BetslipChangeableWrap>
    )
}

export default BetslipChangeable

import footballIcon from '../../../assets/img/fb.svg'
import { TitleWrap, TitleIcon, TitleText } from './style'

const Title = () => {
    return (
        <TitleWrap>
            <TitleIcon src={footballIcon} alt="Football icon" />
            <TitleText>Football - In Play</TitleText>
        </TitleWrap>
    )
}

export default Title

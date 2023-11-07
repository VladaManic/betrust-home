import { observer } from 'mobx-react'
import store from '../../../store/store'

import footballIcon from '../../../assets/img/fb.svg'
import { TitleWrap, TitleIcon, TitleText } from './style'

const Title = () => {
    return (
        <TitleWrap>
            <TitleIcon src={footballIcon} alt="Football icon" />
            <TitleText>{store.title}</TitleText>
        </TitleWrap>
    )
}

export default observer(Title)

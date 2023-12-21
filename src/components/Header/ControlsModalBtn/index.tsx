import { BtnWrap } from './style'

interface Props {
    onClickBtn: React.MouseEventHandler<HTMLButtonElement>
}

const ControlsModalBtn = ({ onClickBtn }: Props) => {
    return <BtnWrap onClick={onClickBtn}>Controls Modal</BtnWrap>
}

export default ControlsModalBtn

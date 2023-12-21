import { AcceptDeletesWrap } from './style'

interface Props {
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

const AcceptDeletesBtn = ({ onClick }: Props) => {
    return (
        <AcceptDeletesWrap onClick={onClick}>Accept Changes</AcceptDeletesWrap>
    )
}

export default AcceptDeletesBtn

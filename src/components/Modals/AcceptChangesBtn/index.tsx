import { AcceptChangesWrap } from './style'

interface Props {
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

const AcceptChangesBtn = ({ onClick }: Props) => {
    return (
        <AcceptChangesWrap onClick={onClick}>Accept Changes</AcceptChangesWrap>
    )
}

export default AcceptChangesBtn

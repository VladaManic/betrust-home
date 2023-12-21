import { SubmitWrap } from './style'

interface Props {
    value: string
}

const SubmitBtn = ({ value }: Props) => {
    return <SubmitWrap>{value}</SubmitWrap>
}

export default SubmitBtn

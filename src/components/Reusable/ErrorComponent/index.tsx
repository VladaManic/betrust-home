import { ErrorWrap } from './style'

interface Props {
    error: string
}

const ErrorComponent = ({ error }: Props) => {
    return <ErrorWrap>{error}</ErrorWrap>
}

export default ErrorComponent

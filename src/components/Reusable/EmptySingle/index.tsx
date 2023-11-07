import emptySingle from '../../../assets/img/empty-single.svg'
import {
    EmptySingleWrap,
    EmptySingleInner,
    EmptyIcon,
    EmptyTitle,
} from './style'

interface Props {
    text: string
}

const EmptySingle = ({ text }: Props) => {
    return (
        <EmptySingleWrap>
            <EmptySingleInner>
                <EmptyIcon src={emptySingle} alt="Empty icon" />
                <EmptyTitle>{text} that is filtered is missing.</EmptyTitle>
            </EmptySingleInner>
        </EmptySingleWrap>
    )
}

export default EmptySingle

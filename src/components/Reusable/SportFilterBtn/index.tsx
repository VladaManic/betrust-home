import { BtnWrap, BtnInner, BtnImage, BtnTitle } from './style'

interface Props {
    img: string
    title: string
}

const SportFilterBtn = ({ img, title }: Props) => {
    return (
        <BtnWrap>
            <BtnInner>
                <BtnImage src={img} alt={title} />
            </BtnInner>
            <BtnTitle>{title}</BtnTitle>
        </BtnWrap>
    )
}

export default SportFilterBtn

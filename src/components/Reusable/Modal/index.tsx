import ReactDom from 'react-dom'

import { Overlay, ModalWrap } from './style'

interface Props {
    children: JSX.Element
    onClose: React.MouseEventHandler<HTMLDivElement>
    overlayDisplay: boolean
}

const Modal = ({ children, onClose, overlayDisplay }: Props) => {
    return ReactDom.createPortal(
        <>
            {overlayDisplay && <Overlay onClick={onClose} />}
            <ModalWrap>{children}</ModalWrap>
        </>,
        document.body
    )
}

export default Modal

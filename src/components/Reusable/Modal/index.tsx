import ReactDom from 'react-dom'

import { Overlay, ModalWrap } from './style'

interface Props {
    children: JSX.Element
    onClose: React.MouseEventHandler<HTMLDivElement> | undefined
    overlayDisplay: boolean
}

const Modal = ({ children, onClose = undefined, overlayDisplay }: Props) => {
    const elementAppend = document.getElementById('content-wrap')

    return ReactDom.createPortal(
        <>
            {overlayDisplay && <Overlay onClick={onClose} />}
            <ModalWrap>{children}</ModalWrap>
        </>,
        elementAppend!
    )
}

export default Modal

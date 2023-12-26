import { useState } from 'react'

import Modal from '../../../components/Reusable/Modal'
import ControlsModal from '../../Modals/Controls/ControlsModal'

import { BtnWrap } from './style'

const ControlsModalBtn = () => {
    const [openModal, setOpenModal] = useState<boolean>(false)

    //On click btn in left corner of header, modal opens
    const onClickHandler = () => {
        //Opening modal
        setOpenModal(true)
    }

    //On click modal overlay or x btn, modal closes
    const onCloseHandler = () => {
        setOpenModal(false)
    }

    return (
        <>
            <BtnWrap onClick={onClickHandler}>Controls Modal</BtnWrap>
            {openModal && (
                <Modal onClose={onCloseHandler} overlayDisplay={true}>
                    <ControlsModal closeModal={onCloseHandler} />
                </Modal>
            )}
        </>
    )
}

export default ControlsModalBtn

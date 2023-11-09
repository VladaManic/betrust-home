import { useState } from 'react'
import ControlsModalBtn from '../../components/Header/ControlsModalBtn'
import Balance from '../../components/Header/Balance'
import WalletConnect from '../../components/Header/WalletConnect'
import Notifications from '../../components/Header/Notifications'

import Modal from '../../components/Reusable/Modal'
import ControlsModal from '../../components/Modals/ControlsModal'

import { HeaderWrap, HeaderInner } from './style'

const Header = () => {
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
        <HeaderWrap>
            <ControlsModalBtn onClickBtn={onClickHandler} />
            <HeaderInner>
                <Balance />
                <WalletConnect />
                <Notifications />
            </HeaderInner>
            {openModal && (
                <Modal onClose={onCloseHandler} overlayDisplay={true}>
                    <ControlsModal />
                </Modal>
            )}
        </HeaderWrap>
    )
}

export default Header

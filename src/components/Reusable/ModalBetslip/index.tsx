import { observer } from 'mobx-react'
import store from '../../../store/store'

import Modal from '../Modal'
import BetslipModal from '../../Modals/Betslip/BetslipModal'

const ModalBetslip = () => {
    return (
        <>
            {store.betslip.length !== 0 && (
                <Modal onClose={undefined} overlayDisplay={false}>
                    <BetslipModal />
                </Modal>
            )}
        </>
    )
}

export default observer(ModalBetslip)

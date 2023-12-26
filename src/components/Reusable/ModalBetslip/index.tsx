import { observer } from 'mobx-react'
import storeBetslip from '../../../store/storeBetslip'

import Modal from '../Modal'
import BetslipModal from '../../Modals/Betslip/BetslipModal'

const ModalBetslip = () => {
    return (
        <>
            {storeBetslip.betslipLength !== 0 && (
                <Modal onClose={undefined} overlayDisplay={false}>
                    <BetslipModal />
                </Modal>
            )}
        </>
    )
}

export default observer(ModalBetslip)

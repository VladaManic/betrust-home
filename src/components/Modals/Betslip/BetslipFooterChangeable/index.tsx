import { observer } from 'mobx-react'
import storeBetslip from '../../../../store/storeBetslip'

import AcceptChangesBtn from '../AcceptChangesBtn'
import BetslipChangeable from '../BetslipChangeable'

import { AcceptText } from './style'

interface Props {
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

const BetslipFooterChangeable = ({ onClick }: Props) => {
    //Click on btn to accept incoming deletes
    const onClickHandler = () => {
        //Updating betslip
        storeBetslip.setBetslipDeletes()
    }

    return (
        <>
            {storeBetslip.acceptChanges && (
                <>
                    <AcceptText>
                        The line, odds, or availability of your selection has
                        changed.
                    </AcceptText>
                    <AcceptChangesBtn onClick={onClick} />
                </>
            )}
            {storeBetslip.deletedBets.length > 0 && (
                <>
                    <AcceptText>
                        One (or more) of your games has been suspended, and it
                        will be removed from the bet slip.
                    </AcceptText>
                    <AcceptChangesBtn onClick={onClickHandler} />
                </>
            )}
            {!storeBetslip.acceptChanges &&
                storeBetslip.deletedBets.length === 0 && <BetslipChangeable />}
        </>
    )
}

export default observer(BetslipFooterChangeable)

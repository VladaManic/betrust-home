import { observer } from 'mobx-react'
import store from '../../../../store/store'

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
        store.setBetslipDeletes()
    }

    return (
        <>
            {store.acceptChanges && (
                <>
                    <AcceptText>
                        The line, odds, or availability of your selection has
                        changed.
                    </AcceptText>
                    <AcceptChangesBtn onClick={onClick} />
                </>
            )}
            {store.acceptDeletes && (
                <>
                    <AcceptText>
                        One (or more) of your games has been suspended, and it
                        will be removed from the bet slip.
                    </AcceptText>
                    <AcceptChangesBtn onClick={onClickHandler} />
                </>
            )}
            {!store.acceptChanges && !store.acceptDeletes && (
                <BetslipChangeable />
            )}
        </>
    )
}

export default observer(BetslipFooterChangeable)

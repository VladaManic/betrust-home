import { useEffect } from 'react'
import storeFilter from '../../store/storeFilter'

const BTRExcange = () => {
    useEffect(() => {
        storeFilter.setFilterReset()
    }, [])

    return <div>BTRExcange</div>
}

export default BTRExcange

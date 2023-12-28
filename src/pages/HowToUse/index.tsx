import { useEffect } from 'react'
import storeFilter from '../../store/storeFilter'

const HowToUse = () => {
    useEffect(() => {
        storeFilter.setFilterReset()
    }, [])

    return <div>HowToUse</div>
}

export default HowToUse

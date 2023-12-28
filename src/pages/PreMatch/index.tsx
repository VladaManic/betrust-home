import { useEffect } from 'react'
import storeFilter from '../../store/storeFilter'

const PreMatch = () => {
    useEffect(() => {
        storeFilter.setFilterReset()
    }, [])

    return <div>PreMatch</div>
}

export default PreMatch

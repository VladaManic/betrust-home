import { useEffect } from 'react'
import storeFilter from '../../store/storeFilter'

const Page404 = () => {
    useEffect(() => {
        storeFilter.setFilterReset()
    }, [])

    return <div>Page404</div>
}

export default Page404

import { Routes, Route } from 'react-router-dom'

import InPlay from '../../pages/InPlay'
import PreMatch from '../../pages/PreMatch'
import BTRExcange from '../../pages/BTRExcange'
import HowToUse from '../../pages/HowToUse'
import Page404 from '../../pages/Page404'

const Main = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<InPlay />} />
                <Route path="/pre-match/" element={<PreMatch />} />
                <Route path="/btr-excange/" element={<BTRExcange />} />
                <Route path="/how-to-use/" element={<HowToUse />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </div>
    )
}

export default Main

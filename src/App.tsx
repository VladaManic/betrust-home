import GeneralStyles from './shared/styles/GeneralStyles'

import Sidebar from './layout/Sidebar'
import Header from './layout/Header'
import Main from './layout/Main'

function App() {
    return (
        <div id="app-wrapper">
            <GeneralStyles />
            <Sidebar />
            <>
                <Header />
                <Main />
            </>
        </div>
    )
}

export default App

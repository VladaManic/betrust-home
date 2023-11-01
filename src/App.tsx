import GeneralStyles from './shared/styles/GeneralStyles'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import GlobalFonts from './assets/font/fonts'

import Sidebar from './layout/Sidebar'
import Header from './layout/Header'
import Main from './layout/Main'

function App() {
    return (
        <div id="app-wrapper">
            <GeneralStyles />
            <GlobalFonts />
            <Sidebar />
            <>
                <Header />
                <Main />
            </>
        </div>
    )
}

export default App

import { useEffect } from 'react'
import GeneralStyles from './shared/styles/GeneralStyles'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import GlobalFonts from './assets/font/fonts'

import Sidebar from './layout/Sidebar'
import Header from './layout/Header'
import Main from './layout/Main'

function App() {
    const handleError = async (error: string) => {
        await console.log(error)
    }

    const fetchData = () => {
        fetch('http://localhost:4000/data')
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
            })
            .catch((error) => handleError(error))
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div id="app-wrapper">
            <GeneralStyles />
            <GlobalFonts />
            <Sidebar />
            <div id="content-wrap">
                <Header />
                <Main />
            </div>
        </div>
    )
}

export default App

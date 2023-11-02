import { useEffect } from 'react'
import { observer } from 'mobx-react'
import store from './store/store'
import GeneralStyles from './shared/styles/GeneralStyles'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import GlobalFonts from './assets/font/fonts'

import Sidebar from './layout/Sidebar'
import Header from './layout/Header'
import Main from './layout/Main'
import Loader from './components/Reusable/Loader'

function App() {
    const loading = store.loading

    const handleError = async (error: string) => {
        await console.log(error)
    }

    const fetchData = () => {
        fetch('http://localhost:4000/data')
            .then((response) => response.json())
            .then((data) => {
                //console.log(data[0])
                store.setData(data[0])
                store.setLoading(false)
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
                {loading ? <Loader /> : <Main />}
            </div>
        </div>
    )
}

export default observer(App)

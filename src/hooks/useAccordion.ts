import { useEffect, useState } from 'react'

const useAccordion = (status: boolean) => {
    const [opened, setOpened] = useState(status)

    useEffect(() => {
        return () => {
            setOpened(false)
        }
    }, [])

    return { opened, setOpened }
}

export default useAccordion

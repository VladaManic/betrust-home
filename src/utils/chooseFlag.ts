import italianFlag from '../assets/img/it.svg'
import germanFlag from '../assets/img/de.svg'
import tanzanianFlag from '../assets/img/tz.svg'
import newFlag from '../assets/img/new-flag.svg'

const chooseFlag = (regionName: string | undefined) => {
    let flag
    switch (regionName) {
        case 'Italy':
            flag = italianFlag
            break
        case 'Germany':
            flag = germanFlag
            break
        case 'Tanzania':
            flag = tanzanianFlag
            break
        case 'Added region':
            flag = newFlag
            break
    }
    return flag
}

export default chooseFlag

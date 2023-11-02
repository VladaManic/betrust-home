import italianFlag from '../assets/img/it.svg'
import germanFlag from '../assets/img/de.svg'
import tanzanianFlag from '../assets/img/us.svg'

const chooseFlag = (regionName: string) => {
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
    }
    return flag
}

export default chooseFlag

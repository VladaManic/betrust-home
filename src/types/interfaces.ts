import { Theme, ToastPosition } from 'react-toastify'

export type EventObj = {
    id: number
    type: string
    name: string
    price: number
}

export type MarketObj = {
    id: number
    optimal: boolean
    market_type: string
    base: number
    event: EventObj[]
}

export type GameObj = {
    id: number
    info: { current_game_time: string }
    stats: {
        score_set1: { team1_value: number; team2_value: number }
        score_set2: { team1_value: number; team2_value: number }
    }
    team1_name: string
    team2_name: string
    market: MarketObj[]
}

export type CompetitionObj = {
    id: number
    name: string
    game: GameObj[]
}

export type RegionObj = {
    id: number
    name: string
    competition: CompetitionObj[]
}

export type SportDataObj = {
    id: number
    name?: string
    region?: RegionObj[]
}

export type BetSlipDataObj = {
    marketId: string | undefined
    eventId: string | undefined
    type: string | undefined
    val: string | undefined
    teams: string | undefined
    price: string | undefined
    game: string | undefined
}

export type ToastifyProps = {
    position: ToastPosition | undefined
    autoClose: number
    hideProgressBar: boolean
    closeOnClick: boolean
    pauseOnHover: boolean
    draggable: boolean
    progress: undefined
    theme: Theme | undefined
}

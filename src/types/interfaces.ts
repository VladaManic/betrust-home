/* eslint-disable @typescript-eslint/no-explicit-any */
export type EventObj = {
    id: number
    type: string
    price: number
}

export type MarketObj = {
    id: number
    optimal: boolean
    market_type: string
    event: EventObj[]
}

export type GameObj = {
    id: number
    info: { current_game_time: string }
    team1_name: string
    team2_name: string
    market: MarketObj[]
}

export type CompetitionObj = {
    name: string
    game: GameObj[]
}

export type RegionObj = {
    name: string
    competition: CompetitionObj[]
}

export type SportDataObj = {
    name?: string
    region?: RegionObj[]
}

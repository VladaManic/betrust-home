export type EventObj = {
    id: number
    type: string
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

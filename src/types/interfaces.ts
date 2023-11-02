/* eslint-disable @typescript-eslint/no-explicit-any */
export type GameObj = {
    id: string
    info: { current_game_time: string }
    team1_name: string
    team2_name: string
    market: any[]
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

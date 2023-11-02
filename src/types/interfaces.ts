/* eslint-disable @typescript-eslint/no-explicit-any */
export type CompetitionObj = {
    name: string
    game: any[]
}

export type RegionObj = {
    name: string
    competition: CompetitionObj[]
}

export type SportDataObj = {
    name?: string
    region?: RegionObj[]
}

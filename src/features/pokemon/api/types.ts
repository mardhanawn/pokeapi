export interface PokemonAPIResponse {
    count: number
    next: string | null
    previous: string | null
    results: {
        name: string
        url: string
    }[]
}

export interface PokemonDetailAPIResponse {
    id: number
    name: string
    types: {
        slot: number
        type: {
            name: string
            url: string
        }
    }[]
    sprites: {
        other: {
            'official-artwork': {
                front_default: string
            }
        }
    }
}

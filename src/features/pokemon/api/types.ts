export interface iPokemonAPIResponse {
  count: number
  next: string | null
  previous: string | null
  results: {
    name: string
    url: string
  }[]
}

export interface iPokemonDetailAPIResponse {
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

export interface iPokemonFullDetailAPIResponse extends iPokemonDetailAPIResponse {
  height: number
  weight: number
  abilities: {
    ability: {
      name: string
      url: string
    }
    is_hidden: boolean
    slot: number
  }[]
}

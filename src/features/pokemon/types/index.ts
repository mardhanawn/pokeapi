export interface Pokemon {
    id: string
    name: string
    types: PokemonType[]
    imageUrl?: string
}

export interface PokemonType {
    id: number
    name: string
    color: string
}

export interface PokedexProps {
    pokemons: Pokemon[]
    totalCount: number
    currentPage: number
    onPageChange: (page: number) => void
}

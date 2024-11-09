import api from './baseApi'
import { PokemonAPIResponse, PokemonDetailAPIResponse } from './types'
import { Pokemon } from '../types'
import { getPokemonTypeColor } from '../utils/typeUtils'

export const PokemonList = async (page: number, limit: number): Promise<PokemonAPIResponse> => {
    try {
        const offset = (page - 1) * limit
        const response = await api.get<PokemonAPIResponse>(
            `/pokemon?limit=${limit}&offset=${offset}`,
        )
        return response.data
    } catch (error) {
        console.error('Error fetching Pokemon list:', error)
        throw new Error('Failed to fetch Pokemon list')
    }
}

export const PokemonDetail = async (url: string): Promise<Pokemon> => {
    try {
        const response = await api.get<PokemonDetailAPIResponse>(url)
        const data = response.data

        return {
            id: String(data.id),
            name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
            imageUrl: data.sprites.other['official-artwork'].front_default,
            types: data.types.map((type, index) => ({
                id: index + 1,
                name: type.type.name.toUpperCase(),
                color: getPokemonTypeColor(type.type.name),
            })),
        }
    } catch (error) {
        console.error('Error fetching Pokemon detail:', error)
        throw new Error('Failed to fetch Pokemon detail')
    }
}

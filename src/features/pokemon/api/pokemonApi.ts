import api from './baseApi'
import {
  iPokemonAPIResponse,
  iPokemonDetailAPIResponse,
  iPokemonFullDetailAPIResponse,
} from './types'
import { iPokemon, iPokemonAbility, iPokemonType } from '../types'
import { getPokemonTypeColor } from '../utils/typeUtils'

export const getPokemonList = async (page: number, limit: number): Promise<iPokemonAPIResponse> => {
  try {
    const offset = (page - 1) * limit
    const response = await api.get<iPokemonAPIResponse>(`/pokemon?limit=${limit}&offset=${offset}`)
    return response.data
  } catch (error) {
    console.error('Error fetching Pokemon list:', error)
    throw new Error('Failed to fetch Pokemon list')
  }
}

export const getPokemonDetail = async (url: string): Promise<iPokemon> => {
  try {
    const response = await api.get<iPokemonDetailAPIResponse>(url)
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

export const getPokemonFullDetail = async (url: string): Promise<iPokemon> => {
  try {
    const response = await api.get<iPokemonFullDetailAPIResponse>(url)
    const data = response.data

    return {
      id: String(data.id),
      name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
      imageUrl: data.sprites.other['official-artwork'].front_default,
      types: data.types.map(
        (type, index): iPokemonType => ({
          id: index + 1,
          name: type.type.name.toUpperCase(),
          color: getPokemonTypeColor(type.type.name),
        }),
      ),
      height: `${(data.height * 0.1).toFixed(1)}m`,
      weight: `${(data.weight * 0.1).toFixed(1)}kg`,
      abilities: data.abilities.map(
        (ability): iPokemonAbility => ({
          name: ability.ability.name,
          isHidden: ability.is_hidden,
        }),
      ),
    }
  } catch (error) {
    console.error('Error fetching Pokemon detail:', error)
    throw new Error('Failed to fetch Pokemon detail')
  }
}

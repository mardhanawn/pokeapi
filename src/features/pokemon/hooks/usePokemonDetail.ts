import { useEffect, useState } from 'react'
import { iPokemon } from '../types'
import { getPokemonFullDetail } from '../api/pokemonApi'

interface iUsePokemonDetail {
  pokemon: iPokemon | null
  loading: boolean
  error: string | null
}

export const usePokemonDetail = (pokemonId: string): iUsePokemonDetail => {
  const [pokemon, setPokemon] = useState<iPokemon | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      try {
        setLoading(true)
        setError(null)
        const detail = await getPokemonFullDetail(`/pokemon/${pokemonId}`)
        setPokemon(detail)
      } catch (err) {
        setError('Failed to fetch Pokémon details. Please try again later.')
        console.error('Error in usePokemonDetail:', err)
      } finally {
        setLoading(false)
      }
    }

    if (pokemonId) {
      fetchPokemonDetail()
    }
  }, [pokemonId])

  return {
    pokemon,
    loading,
    error,
  }
}

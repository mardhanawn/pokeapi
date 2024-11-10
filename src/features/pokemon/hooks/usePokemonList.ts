import { useEffect, useState } from 'react'
import { iPokemon } from '../types'
import { ITEMS_PER_PAGE } from '../constants'
import { getPokemonDetail, getPokemonList } from '../api/pokemonApi'

interface iUsePokemonList {
  pokemons: iPokemon[]
  loading: boolean
  error: string | null
  totalCount: number
  currentPage: number
  setCurrentPage: (page: number) => void
}

export const usePokemonList = (): iUsePokemonList => {
  const [pokemons, setPokemons] = useState<iPokemon[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [totalCount, setTotalCount] = useState<number>(0)
  const [currentPage, setCurrentPage] = useState<number>(1)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)

        const listData = await getPokemonList(currentPage, ITEMS_PER_PAGE)
        setTotalCount(listData.count)

        const pokemonData = await Promise.all(
          listData.results.map(async (pokemon) => {
            const detail = await getPokemonDetail(pokemon.url)
            return detail
          }),
        )
        setPokemons(pokemonData)
      } catch (err) {
        setError('Failed to fetch Pokemon list data. Please try again later.')
        console.error('Error in usePokemonList:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [currentPage])

  return {
    pokemons,
    loading,
    error,
    totalCount,
    currentPage,
    setCurrentPage,
  }
}

import { useEffect, useState } from 'react'
import { Pokemon } from '../types'
import { ITEMS_PER_PAGE } from '../constants'
import { PokemonDetail, PokemonList } from '../api/pokemonApi'

interface iUsePokemonData {
    pokemons: Pokemon[]
    loading: boolean
    error: string | null
    totalCount: number
    currentPage: number
    setCurrentPage: (page: number) => void
}

export const usePokemonData = (): iUsePokemonData => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)
    const [totalCount, setTotalCount] = useState<number>(0)
    const [currentPage, setCurrentPage] = useState<number>(1)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                setError(null)

                const listData = await PokemonList(currentPage, ITEMS_PER_PAGE)
                setTotalCount(listData.count)

                const pokemonDetails = await Promise.all(
                    listData.results.map((pokemon) => PokemonDetail(pokemon.url)),
                )

                setPokemons(pokemonDetails)
            } catch (err) {
                setError('Failed to fetch Pokemon data. Please try again later.')
                console.error('Error in usePokemonData:', err)
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

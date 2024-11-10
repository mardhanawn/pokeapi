'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Box, Grid, Pagination, Typography } from '@mui/material'
import PokemonModal from '@/components/Modal/PokemonModal'
import { ITEMS_PER_PAGE } from '@/features/pokemon/constants'
import { usePokemonList } from '@/features/pokemon/hooks/usePokemonList'
import { usePokemonDetail } from '@/features/pokemon/hooks/usePokemonDetail'
import { iPokemon } from '@/features/pokemon/types'
import { PokedexContainer, PokemonCard, TypeChip, PokemonImage } from './StyledComponents'

const Pokedex: React.FC = () => {
  const { pokemons, loading, error, totalCount, currentPage, setCurrentPage } = usePokemonList()
  const [selectedPokemonId, setSelectedPokemonId] = useState<string | null>(null)
  const { pokemon: selectedPokemon } = usePokemonDetail(selectedPokemonId || '')
  const { pokemon, loading: loadingDetail } = usePokemonDetail(selectedPokemon?.id)

  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE)

  const handlePageChange = (_: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handlePokemonClick = (pokemonId: string) => {
    setSelectedPokemonId(pokemonId)
  }

  const handleCloseModal = () => {
    setSelectedPokemonId(null)
  }

  return (
    <PokedexContainer>
      <Typography variant="h4" sx={{ textAlign: 'center', mb: 4, fontWeight: 800 }}>
        PokéDex
      </Typography>
      <Typography variant="subtitle1" sx={{ textAlign: 'center', mb: 4 }}>
        All Generation totaling {totalCount} Pokemon
      </Typography>

      {error && (
        <Typography variant="h4" sx={{ textAlign: 'center' }}>
          Whoops Error...
        </Typography>
      )}

      {loading ? (
        <Typography variant="h4" sx={{ textAlign: 'center' }}>
          Loading...
        </Typography>
      ) : (
        <>
          <Grid container spacing={10}>
            {pokemons.map((pokemon: iPokemon) => (
              <Grid item xs={12} sm={6} md={4} key={pokemon.id}>
                <PokemonCard onClick={() => handlePokemonClick(pokemon.id)}>
                  <PokemonImage>
                    {pokemon.imageUrl ? (
                      <Image
                        src={pokemon.imageUrl}
                        alt={pokemon.name}
                        height={100}
                        width={100}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                        }}
                      />
                    ) : (
                      <Typography variant="h6" sx={{ color: '#fff' }}>
                        Pokemon Picture Placeholder
                      </Typography>
                    )}
                  </PokemonImage>
                  <Typography variant="h6" sx={{ mb: 1, fontWeight: 600, color: '#b1b6b7' }}>
                    #{pokemon.id.padStart(3, '0')}
                  </Typography>
                  <Typography variant="h4" sx={{ mb: 1, fontWeight: 800, color: '#42494c' }}>
                    {pokemon.name}
                  </Typography>

                  <Grid container spacing={1}>
                    {pokemon.types.map((type) => (
                      <Grid item key={type.id}>
                        <TypeChip label={type.name} typecolor={type.color} size="medium" />
                      </Grid>
                    ))}
                  </Grid>
                </PokemonCard>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
              size="large"
              disabled={loading}
            />
          </Box>
        </>
      )}

      <PokemonModal
        open={!!selectedPokemonId}
        onClose={handleCloseModal}
        pokemon={pokemon}
        loading={loadingDetail}
      />
    </PokedexContainer>
  )
}

export default Pokedex

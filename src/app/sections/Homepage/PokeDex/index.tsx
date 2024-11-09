'use client'
import React from 'react'
import Image from 'next/image'
import { Box, Grid, Pagination, Typography } from '@mui/material'
import { ITEMS_PER_PAGE } from '@/features/pokemon/constants'
import { Pokemon } from '@/features/pokemon/types'
import { usePokemonData } from '@/features/pokemon/hooks/usePokemonData'
import { PokedexContainer, PokemonCard, TypeChip, PokemonImage } from './StyledComponents'

const Pokedex: React.FC = () => {
    const { pokemons, loading, error, totalCount, currentPage, setCurrentPage } = usePokemonData()

    console.log('pokemons POKEDEX DATA', pokemons)
    console.log('loading POKEDEX DATA', loading)
    console.log('error POKEDEX DATA', error)

    const handlePageChange = (_: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE)

    return (
        <PokedexContainer>
            <Typography variant="h4" sx={{ textAlign: 'center', mb: 4, fontWeight: 800 }}>
                PokéDex
            </Typography>
            <Typography variant="subtitle1" sx={{ textAlign: 'center', mb: 4 }}>
                All Generation totaling {totalCount} Pokemon
            </Typography>

            <Grid container spacing={10}>
                {pokemons.map((pokemon: Pokemon) => (
                    <Grid item xs={12} sm={6} md={4} key={pokemon.id}>
                        <PokemonCard>
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
                            <Typography
                                variant="h6"
                                sx={{ mb: 1, fontWeight: 600, color: '#b1b6b7' }}
                            >
                                #{pokemon.id.padStart(3, '0')}
                            </Typography>
                            <Typography
                                variant="h4"
                                sx={{ mb: 1, fontWeight: 800, color: '#42494c' }}
                            >
                                {pokemon.name}
                            </Typography>

                            <Grid container spacing={1}>
                                {pokemon.types.map((type) => (
                                    <Grid item key={type.id}>
                                        <TypeChip
                                            label={type.name}
                                            typecolor={type.color}
                                            size="medium"
                                        />
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
        </PokedexContainer>
    )
}

export default Pokedex

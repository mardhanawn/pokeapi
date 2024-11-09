"use client"
import React from 'react';
import { Box, Grid, Pagination, Typography } from '@mui/material';
import { Pokemon, PokedexProps } from './interfaces';
import {
  PokedexContainer,
  PokemonCard,
  TypeChip,
  PokemonImage,
} from './StyledComponents';
import Image from 'next/image';

const ITEMS_PER_PAGE = 9;

const Pokedex: React.FC<PokedexProps> = ({
  // pokemons,
  totalCount,
  currentPage,
  onPageChange,
}) => {
  const mockPokemon = Array.from({ length: 9 }, (_, i) => ({
    id: String(i + 1),
    name: `Poke Name ${i + 1}`,
    types: [
      { id: 1, name: 'Type 1', color: '#FF5733' },
      { id: 2, name: 'Type 2', color: '#4A90E2' },
    ]
  }));

  
  const handlePageChange = (_: React.ChangeEvent<unknown>, page: number) => {
    onPageChange(page);
  };

  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

  return (
    <PokedexContainer>
      <Typography variant="h4" sx={{ textAlign: 'center', mb: 4, fontWeight: 800 }}>
        PokéDex
      </Typography>
      <Typography variant="subtitle1" sx={{ textAlign: 'center', mb: 4 }}>
        All Generation totaling {totalCount} Pokemon
      </Typography>

      <Grid container spacing={10}>
        {mockPokemon.map((pokemon: Pokemon) => (
          <Grid item xs={12} sm={6} md={4} key={pokemon.id}>
            <PokemonCard>
              <PokemonImage>
                {pokemon.imageUrl ? (
                  <Image
                    src={pokemon.imageUrl}
                    alt={pokemon.name}
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                ) : (
                  <Typography variant="h6" sx={{ color: '#fff' }}>Pokemon Picture Placeholder</Typography>
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
        />
      </Box>
    </PokedexContainer>
  );
};

export default Pokedex;

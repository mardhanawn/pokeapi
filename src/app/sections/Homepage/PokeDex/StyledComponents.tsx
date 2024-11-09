'use client'
import { styled } from '@mui/material/styles'
import { Box, Card, Chip } from '@mui/material'

export const PokedexContainer = styled(Box)(({ theme }) => ({
    backgroundColor: '#ffd64d',
    minHeight: '100vh',
    padding: theme.spacing(4, 20),
}))

export const PokemonCard = styled(Card)(({ theme }) => ({
    backgroundColor: '#fff',
    borderRadius: '16px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: theme.spacing(8, 4),
    transition: 'transform 0.2s',
    '&:hover': {
        transform: 'translateY(-4px)',
    },
}))

export const TypeChip = styled(Chip)<{ typecolor: string }>(({ typecolor, theme }) => ({
    backgroundColor: typecolor,
    color: '#fff',
    fontWeight: 600,
    fontSize: '1rem',
    padding: theme.spacing(2),
}))

export const PokemonImage = styled(Box)({
    alignItems: 'center',
    aspectRatio: '1',
    backgroundColor: '#b2b6b7',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '0.5rem',
})

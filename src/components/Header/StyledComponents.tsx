'use client'
import Link from 'next/link'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

export const PokedexContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 20),
}))

export const NavLink = styled(Link)`
  color: #2e2e2e;
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-weight: 500;
  font-size: 1rem;
  transition: color 0.2s ease;

  &:hover {
    color: #ffb800;
  }
`

import React from 'react'
import { Box, Toolbar } from '@mui/material'
import Image from 'next/image'
import { NavLink, PokedexContainer } from './StyledComponents'

const Header = () => {
  return (
    <PokedexContainer>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box display="flex" alignItems="center" gap={4}>
          <Image src="/pokemon-logo.png" alt="Pokemon Logo" width={100} height={40} priority />
          <Box display="flex" gap={2}>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/pokemon-type">Pokemon Type</NavLink>
          </Box>
        </Box>
      </Toolbar>
    </PokedexContainer>
  )
}

export default Header

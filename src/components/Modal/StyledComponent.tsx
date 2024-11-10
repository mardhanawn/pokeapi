'use client'
import { styled } from '@mui/material/styles'
import { Box, Dialog } from '@mui/material'

export const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    maxWidth: '600px',
    width: '100%',
    margin: theme.spacing(2),
    borderRadius: theme.spacing(2),
  },
}))

export const PokemonImageDetail = styled(Box)({
  width: '200px',
  height: '200px',
  position: 'relative',
  margin: '0 auto',
  backgroundColor: '#f5f5f5',
  borderRadius: '8px',
})

export const TypeChip = styled(Box)<{ typecolor: string }>(({ typecolor }) => ({
  backgroundColor: typecolor,
  color: '#fff',
  padding: '4px 12px',
  borderRadius: '16px',
  display: 'inline-block',
  margin: '0 4px',
  fontSize: '0.875rem',
  fontWeight: 'bold',
}))

import React from 'react'
import { DialogContent, Typography, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { StyledDialog } from '../StyledComponent'

interface iWelcomeModalProps {
  open: boolean
  onClose: () => void
}

const WelcomeModal: React.FC<iWelcomeModalProps> = ({ open, onClose }) => {
  return (
    <StyledDialog open={open} onClose={onClose} maxWidth="md">
      <IconButton onClick={onClose} sx={{ position: 'absolute', right: 8, top: 8 }}>
        <CloseIcon />
      </IconButton>
      <DialogContent sx={{ p: 4 }}>
        <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 'bold' }}>
          Welcome to Pokemon pokeapi
        </Typography>
      </DialogContent>
    </StyledDialog>
  )
}

export default WelcomeModal

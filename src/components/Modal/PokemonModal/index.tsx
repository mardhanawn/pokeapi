import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { DialogContent, Typography, Box, IconButton, Button } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { iPokemon } from '@/features/pokemon/types'
import { PokemonImageDetail, StyledDialog, TypeChip } from '../StyledComponent'

interface iPokemonModalProps {
  open: boolean
  onClose: () => void
  pokemon: iPokemon | null
  loading: boolean
}

const PokemonModal: React.FC<iPokemonModalProps> = ({ open, onClose, pokemon, loading }) => {
  const router = useRouter()

  if (!pokemon && !loading) return null

  const handleMoreDetails = () => {
    router.push(`/pokemon/${pokemon?.id}`)
    onClose()
  }

  return (
    <StyledDialog open={open} onClose={onClose} maxWidth="md">
      <IconButton onClick={onClose} sx={{ position: 'absolute', right: 8, top: 8 }}>
        <CloseIcon />
      </IconButton>
      <DialogContent sx={{ p: 4 }}>
        {loading ? (
          <Typography sx={{ p: 4 }}>Loading...</Typography>
        ) : (
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 4 }}>
            <PokemonImageDetail>
              {pokemon?.imageUrl && (
                <Image
                  src={pokemon.imageUrl}
                  alt={pokemon.name}
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                />
              )}
            </PokemonImageDetail>
            <Box sx={{ flex: 1 }}>
              <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>
                {pokemon?.name}
              </Typography>
              <Box sx={{ mb: 2, display: 'flex', gap: 4 }}>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  <strong>Weight:</strong> {pokemon?.weight}
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  <strong>Height:</strong> {pokemon?.height}
                </Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  <strong>Abilities:</strong>
                </Typography>
                {pokemon?.abilities?.map((ability, index) => (
                  <Typography key={index} variant="body2" sx={{ ml: 2 }}>
                    • {ability.name} {ability.isHidden && '(Hidden)'}
                  </Typography>
                ))}
              </Box>
              <Box sx={{ mb: 3, display: 'flex' }}>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  <strong>Type:</strong>
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {pokemon?.types.map((type) => (
                    <TypeChip key={type.id} typecolor={type.color}>
                      {type.name}
                    </TypeChip>
                  ))}
                </Box>
              </Box>
              <Button
                variant="contained"
                color="primary"
                onClick={handleMoreDetails}
                sx={{
                  width: 'fit-content',
                  backgroundColor: '#e6ab09',
                  textTransform: 'none',
                }}
              >
                More Detail
              </Button>
            </Box>
          </Box>
        )}
      </DialogContent>
    </StyledDialog>
  )
}

export default PokemonModal

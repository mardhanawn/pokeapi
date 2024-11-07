"use client"
import Image from "next/image";
import { Box, Typography, Button } from './StyledComponents';
import { styles } from './styles';

export default function Landing() {
  return (
    <Box styles={styles.container}>
      <Box styles={styles.flexRow}>
        <Box styles={styles.flexColumn}>
          <Typography variant="h1" styles={styles.heading}>
            {`All the Pokemon data you'll ever need in one place!`}
          </Typography>
          <Typography variant="h4" styles={styles.subheading}>
            Thousands of data compiled into one place
          </Typography>
          <Button 
            variant="contained" 
            styles={styles.button}
          >
            Check PokeDex
          </Button>
        </Box>
        <Box styles={styles.imageContainer}>
          <Image
            src="/pokemon.png"
            alt="Pokemon Landing"
            width={600}
            height={100}
            priority
          />
        </Box>
      </Box>
    </Box>
  );
}
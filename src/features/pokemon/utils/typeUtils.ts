import { TYPE_COLORS } from '../constants'

export const getPokemonTypeColor = (typeName: string): string => {
    return TYPE_COLORS[typeName as keyof typeof TYPE_COLORS] || '#777777'
}

export interface iPokemon {
  id: string
  name: string
  imageUrl: string
  types: iPokemonType[]
  height?: string
  weight?: string
  abilities?: iPokemonAbility[]
}

export interface iPokemonType {
  id: number
  name: string
  color: string
}

export interface iPokemonAbility {
  name: string
  isHidden: boolean
}

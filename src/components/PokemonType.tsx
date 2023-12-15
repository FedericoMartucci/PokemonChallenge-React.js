import { PokemonTypeProps } from '../utils/types'

export default function PokemonType({ type }: PokemonTypeProps) {
    
  return (
    <span className={`pokemon-type ${type}-pokemon-type`}>
        {type}
    </span>
  )
}

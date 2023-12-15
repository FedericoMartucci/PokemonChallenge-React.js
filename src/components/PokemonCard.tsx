import PokemonType from './PokemonType';

import { PokemonCardProps } from '../utils/types';

import { Link } from 'react-router-dom';

export default function PokemonCard({ id, types, name, img }: PokemonCardProps) {
  
  return (
    <div>
      <Link className='pokemon-card-link' to={{pathname: `/pokemon/${id}`}}>
        <div className={`${types[0]}-type pokemon`}>
            <img className='pokemon-img' src={img} alt={`Pokemon ${name}`} />
            <span className="pokemon-name">{name}</span>
            <div className="pokemon-types">
                {types.map((type: string, index: number) => (
                  <PokemonType type={type} key={index}/>
                  ))}
            </div>
        </div>
      </Link>
    </div>
  )
}
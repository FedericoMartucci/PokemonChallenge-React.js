import React from 'react'
import PokemonType from './PokemonType';

export default function PokemonCard(props: any) {
   const { types, name, sprites } = props

  return (
    <div>
        <div className={`${types[0].type.name}-type pokemon`}>
            <img className='pokemon-img' src={sprites.other.dream_world.front_default} alt="Pokemon" />
            <span className="pokemon-name">{name}</span>
            <div className="pokemon-types">
                {types.map((type: { type: { name: string; }; }, index: number) => (
                    <PokemonType type={type.type.name} key={index}/>
                ))}
            </div>
        </div>
    </div>
  )
}

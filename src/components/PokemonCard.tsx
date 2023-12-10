import React, { useEffect, useState } from 'react'
import PokemonType from './PokemonType';
import PokemonInfo from './PokemonInfo';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';

export default function PokemonCard(props: any) {
   const { id, types, name, sprites, weight, height, stats, base_experience } = props
   const pokemonInfoProps = {
    id,
    stats,
    exp: base_experience,
    type: types[0].type.name,
    weight,
    height,
    name,
    img: sprites.other.dream_world.front_default,
  };
   
  return (
    <div>
      <Link to={{pathname: `/pokemon/${id}`}}>
        <div className={`${types[0].type.name}-type pokemon`}>
            <img className='pokemon-img' src={sprites.other.dream_world.front_default} alt={`Pokemon ${name}`} />
            <span className="pokemon-name">{name}</span>
            <div className="pokemon-types">
                {types.map((type: { type: { name: string; }; }, index: number) => (
                  <PokemonType type={type.type.name} key={index}/>
                  ))}
            </div>
        </div>
      </Link>
    </div>
  )
}
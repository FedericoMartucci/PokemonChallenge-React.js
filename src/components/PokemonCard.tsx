import React, { useEffect, useState } from 'react'
import PokemonType from './PokemonType';
import PokemonInfo from './PokemonInfo';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';

export default function PokemonCard(props: any) {
   const { id, types, name, img } = props;
  
  return (
    <div>
      <Link to={{pathname: `/pokemon/${id}`}}>
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
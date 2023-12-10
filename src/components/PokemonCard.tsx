import React, { useEffect, useState } from 'react'
import PokemonType from './PokemonType';
import PokemonInfo from './PokemonInfo';
import { createPortal } from 'react-dom';

export default function PokemonCard(props: any) {
   const { types, name, sprites, weight, height, stats, base_experience } = props
   const [showInfo, setShowInfo] = useState<boolean>(false);
   const handleToggleInfo = () => {
    setShowInfo(!showInfo);
  };
  return (
    <div>
        <div onClick={handleToggleInfo} className={`${types[0].type.name}-type pokemon`}>
            <img className='pokemon-img' src={sprites.other.dream_world.front_default} alt={`Pokemon ${name}`} />
            <span className="pokemon-name">{name}</span>
            <div className="pokemon-types">
                {types.map((type: { type: { name: string; }; }, index: number) => (
                    <PokemonType type={type.type.name} key={index}/>
                ))}
            </div>
            {showInfo && createPortal(
                <PokemonInfo stats={stats} exp={base_experience} type={types[0].type.name} weight={weight} height={height} name={name} img={sprites.other.dream_world.front_default} onClose={handleToggleInfo} />,
                document.body
            )}
        </div>
    </div>
  )
}
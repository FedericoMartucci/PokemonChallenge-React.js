import React from 'react'

export default function PokemonType(props: any) {
    const { type } = props;
    
  return (
    <span className={`pokemon-type ${type}-pokemon-type`}>
        {type}
    </span>
  )
}

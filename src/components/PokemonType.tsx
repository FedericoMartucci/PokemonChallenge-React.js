import React from 'react'

export default function PokemonType(props: any) {
    const { type } = props;
    
    console.log(type)
  return (
    <span className={`pokemon-type ${type}-pokemon-type`}>
        {type}
    </span>
  )
}

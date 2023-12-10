import React, { useEffect, useState } from 'react'
import WaveImg1 from '../wave-1.svg'
import WaveImg2 from '../wave-2.svg'
import WaveImg3 from '../wave-3.svg'
import WaveImg4 from '../wave-4.svg'
import WaveImg5 from '../wave-5.svg'
import '../Animation.css'
import { useParams } from 'react-router-dom'
import { getPokemonInfo } from '../utils/pokemon-utils'
type PokemonInfo = {
    id: number;
    name: string;
    stats: any[];
    type: string;
    height: number;
    base_experience: number;
    weight: number;
  }
type Stat = {
    stat: {name: string};
    base_stat: number;
}

export default function PokemonInfo() {
    const { id } = useParams()
    const [pokemonInfo, setPokemonInfo] = useState<any | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getPokemonInfo(Number(id));
                setPokemonInfo(response);
            } catch (error) {
                console.error('Error fetching data:', error);
            } 
        };
        fetchData();
    }, [id]);

    if (!pokemonInfo) {
        return <div>Loading...</div>;
    }
    
    
      return (
        <div className='pokemon-info-bg'>
            <div className={`${pokemonInfo.type}-pokemon-type pokemon-info-type`}>
                <div className='pokemon-id'>
                    #{id?.toString().padStart(2, '0')}
                </div>
                <img className="pokemon-img-info" src={pokemonInfo.img} alt={`Pokemon ${pokemonInfo.name}`} />
                <span className='pokemon-text-info'>{pokemonInfo.name}</span>
            </div>
            <div className='pokemon-info'>
                <img className='wave-img' src={WaveImg1} />
                <img className='wave-img' src={WaveImg2} />
                <img className='wave-img' src={WaveImg3} />
                <img className='wave-img' src={WaveImg4} />
                <img className='wave-img' src={WaveImg5} id='shape' />
                <div className='pokemon-weight-height'>
                    <div className='pokemon-weight'>
                        <span>{pokemonInfo.weight/10} kg.</span>
                        <span><strong>Weight</strong></span>
                    </div>
                    <div className='pokemon-height'>
                        <span>{pokemonInfo.height/10} m.</span>
                        <span><strong>Height</strong></span>
                    </div>
                </div>
                <ul>
                    { pokemonInfo.stats.map((statType: any, index: number) => (
                            (
                            <li className='pokemon-stat' key={index}>
                                <span>{statType.pokemon_v2_stat.name}</span>
                                <div className={`${pokemonInfo.type}-pokemon-type progress-bar`} data-text={`${statType.base_stat}/300`} style={{'--to-width':`${statType.base_stat/3}%`} as React.CSSProperties}></div>
                            </li> )
                            ))
                    }
                    <li className='pokemon-stat'>
                        <span >Experience</span>
                        <div className={`${pokemonInfo.type}-pokemon-type progress-bar`} data-text={`${pokemonInfo.base_experience}/300`} style={{'--to-width':`${pokemonInfo.base_experience/3}%`} as React.CSSProperties}></div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

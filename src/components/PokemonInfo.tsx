import React, { useEffect, useState } from 'react'
import WaveImg1 from '../images/wave-1.svg'
import WaveImg2 from '../images/wave-2.svg'
import WaveImg3 from '../images/wave-3.svg'
import WaveImg4 from '../images/wave-4.svg'
import WaveImg5 from '../images/wave-5.svg'
import BackIcon from '../images/BackIcon.png'
import { Link, NavLink, useParams } from 'react-router-dom'
import { getPokemonById } from '../utils/pokemon-utils'
import Loader from './Loader'


export default function PokemonInfo() {
    const { id } = useParams()
    const [pokemonInfo, setPokemonInfo] = useState<any | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getPokemonById(Number(id));
                setPokemonInfo(response);
            } catch (error) {
                console.error('Error fetching data:', error);
            } 
        };
        fetchData();
    }, [id]);
    
      return !pokemonInfo? (<Loader />) : (
        <div className='pokemon-info-bg'>
            <div className='evolution-chain'>
                {pokemonInfo.evolution.map((evolution: {id: string, name: string}) => (
                    <NavLink key={evolution.id} className={({isActive}) => isActive? `active-evolution ${pokemonInfo.type}-pokemon-type` : 'evolution'} to={`/pokemon/${evolution.id}`}>{evolution.name}</NavLink>
                ))}
            </div>
            <div className={`${pokemonInfo.type}-pokemon-type pokemon-info-type`}>
                <div className='pokemon-id'>
                    <Link className='home-link' to={'/home'}>
                        <img className='home-icon' src={BackIcon} alt="HomeIcon"/>
                    </Link>
                    <span>
                        #{id?.toString().padStart(2, '0')}
                    </span>
                </div>
                
                <img className="pokemon-img-info" src={pokemonInfo.img} alt={`Pokemon ${pokemonInfo.name}`} />
                <span className='pokemon-text-info'>{pokemonInfo.name}</span>
            </div>
            <div className='pokemon-info'>
                <img className='wave-img' src={WaveImg1} alt='WaveImg1'/>
                <img className='wave-img' src={WaveImg2} alt='WaveImg2'/>
                <img className='wave-img' src={WaveImg3} alt='WaveImg3'/>
                <img className='wave-img' src={WaveImg4} alt='WaveImg4'/>
                <img className='wave-img' src={WaveImg5} alt='WaveImg5' id='shape' />
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

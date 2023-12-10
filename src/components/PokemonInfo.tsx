import React from 'react'
import WaveImg1 from '../wave-1.svg'
import WaveImg2 from '../wave-2.svg'
import WaveImg3 from '../wave-3.svg'
import WaveImg4 from '../wave-4.svg'
import WaveImg5 from '../wave-5.svg'
import '../Animation.css'

type Stat = {
    stat: {name: string};
    base_stat: number;
}

export default function PokemonInfo(props: any) {
    const {id,name, type, img, weight, height, stats, exp, onClose} = props;
    const statsType: Stat[] = stats.filter((stat: Stat) => stat.stat.name !== 'special-attack' && stat.stat.name !== 'special-defense')
    
      return (
        <div className='pokemon-info-bg'>
            <div className={`${type}-pokemon-type pokemon-info-type`}>
                <div className='pokemon-id'>
                    #{id.toString().padStart(2, '0')}
                </div>
                <img className="pokemon-img-info" src={img} alt={`Pokemon ${name}`} />
                <span className='pokemon-text-info'>{name}</span>
            </div>
            <div className='pokemon-info'>
                <img className='wave-img' src={WaveImg1} />
                <img className='wave-img' src={WaveImg2} />
                <img className='wave-img' src={WaveImg3} />
                <img className='wave-img' src={WaveImg4} />
                <img className='wave-img' src={WaveImg5} id='shape' />
                <div className='pokemon-weight-height'>
                    <div className='pokemon-weight'>
                        <span>{weight/10} kg.</span>
                        <span><strong>Weight</strong></span>
                    </div>
                    <div className='pokemon-height'>
                        <span>{height/10} m.</span>
                        <span><strong>Height</strong></span>
                    </div>
                </div>
                <ul>
                    { statsType.map((statType: Stat, index: number) => (
                            (
                            <li className='pokemon-stat' key={index}>
                                <span>{statType.stat.name}</span>
                                <div className={`${type}-pokemon-type progress-bar`} data-text={`${statType.base_stat}/300`} style={{'--to-width':`${statType.base_stat/3}%`} as React.CSSProperties}></div>
                            </li> )
                            ))
                    }
                    <li className='pokemon-stat'>
                        <span >Experience</span>
                        <div className={`${type}-pokemon-type progress-bar`} data-text={`${exp}/300`} style={{'--to-width':`${exp/3}%`} as React.CSSProperties}></div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

import React from 'react'
import WaveImg1 from '../wave-1.svg'
import WaveImg2 from '../wave-2.svg'
import WaveImg3 from '../wave-3.svg'
import WaveImg4 from '../wave-4.svg'
import WaveImg5 from '../wave-5.svg'

type Stat = {
    stat: {name: string};
    base_stat: number;
}

export default function PokemonInfo(props: any) {
    const {name, type, img, weight, height, stats, exp, onClose} = props;
    const statsType: Stat[] = stats.filter((stat: Stat) => stat.stat.name !== 'special-attack' && stat.stat.name !== 'special-defense')
    return (
        <div className='pokemon-info-bg'>
            <div className={`${type}-pokemon-type pokemon-info-type`}>
                <img className="pokemon-img-info" src={img} alt={`Pokemon ${name}`} />
                <span className='pokemon-text-info'>{name}</span>
            </div>
            <div className='pokemon-info'>
                <img className='wave-img' src={WaveImg1} />
                <img className='wave-img' src={WaveImg2} />
                <img className='wave-img' src={WaveImg3} />
                <img className='wave-img' src={WaveImg4} />
                <img className='wave-img' src={WaveImg5} id='shape' />
                <div className=''>

                </div>
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
                            <li key={index}>
                                <span>{statType.stat.name}</span>
                                <span>{statType.base_stat}</span>
                            </li> )
                            ))
                    }
                    <li>
                        <span>Experience</span>
                        <span>{exp}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

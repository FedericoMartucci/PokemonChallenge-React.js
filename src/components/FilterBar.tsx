import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { FormEvent, useState } from 'react';
import { FilterBarProps, MAX_VALUE, MIN_VALUE } from '../utils/types';

function valuetext(value: number) {
    return `${value}kg`;
  }

export default function FilterBar({ handleFilters, colors, pokemonTypes }: FilterBarProps) {
    const [weight, setWeight] = useState<number[]>([MIN_VALUE, MAX_VALUE]);
    const [isBaby, setIsBaby] = useState<boolean>(false);
    const [color, setColor] = useState<string>('');
    const [types, setTypes] = useState<string[]>([]);

    const handleChange = (event: Event, newValue: number | number[]): void => {
        setWeight(newValue as number[]);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        handleFilters({ isBaby, color, weight, types });
    }

  return (
    <form className="filter-items" onSubmit={ handleSubmit }>
        <div className="filter-item">
            <span>Baby <input type="checkbox" name="isBaby" onChange={(e) => setIsBaby(e.target.checked)} /></span>
        </div>
        <div className="filter-item">
                Colors
                <select onChange={(e) => { setColor(e.target.value) }} name="colors">
                    <option value="">All</option>
                    {colors.map((color: string) => (<option key={color}>{color}</option>))}
                </select>
        </div>
        <div className="filter-item">
            <Box className='box-item' sx={{ width: 200 }}>
                <div>
                    <span>{MIN_VALUE}kg</span>
                    <span className="box-title">Weight</span>
                    <span>{MAX_VALUE}kg</span>
                </div>
                <Slider
                    min={MIN_VALUE}
                    max={MAX_VALUE}
                    getAriaLabel={() => 'Weight range'}
                    value={weight}
                    onChange={ handleChange }
                    valueLabelDisplay="auto"
                    getAriaValueText={ valuetext }
                    size="small"
                    disableSwap
                    color="error"
                    />
            </Box>
        </div>
        <div className="filter-item">
            <span>Types</span>
            <select onChange={(e) => {setTypes(Array.from(e.target.options).filter(o => o.selected).map(o => o.value))}} multiple name="types">
                <option value="">All</option>
                {pokemonTypes.map((type: string) => (<option key={type}>{type}</option>))}
            </select>
        </div>
        <button className="filter apply-filters" type="submit">Apply</button>
    </form>
  )
}

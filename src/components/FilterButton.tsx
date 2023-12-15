import { ReactComponent as FilterSvg } from '../images/FilterBar.svg';
import { ReactComponent as CrossSvg } from '../images/Cross.svg';

import { FilterButtonProps } from '../utils/types';

import { useState } from 'react';

export default function FilterButton ({ handleFilter }: FilterButtonProps) {
    const [isFiltering, setIsFiltering] = useState<boolean>(false);

    const handleClick = (): void => {
        setIsFiltering(!isFiltering);
        handleFilter(isFiltering);
    }

    return isFiltering? (
        <button onClick={ handleClick } className='filter'>
            <CrossSvg className='filter-icon' />
        </button>
    ) : (
        <button onClick={ handleClick } className='filter'>
            <FilterSvg className='filter-icon'/>
        </button>
    );
}
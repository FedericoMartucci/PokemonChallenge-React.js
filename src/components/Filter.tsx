import {ReactComponent as FilterSvg} from '../FilterBar.svg';
import {ReactComponent as Cross} from '../Cross.svg';
import '../Filter.css'
import { useState } from 'react';

function Filter () {
    const [isFiltering, setIsFiltering] = useState<boolean>(false);
    const handleClick = () => {
        setIsFiltering(!isFiltering);
    }
    return isFiltering? (
        <button onClick={handleClick} className='filter'>
            <Cross className='filter-icon' />
        </button>
    ) : (
        <button onClick={handleClick} className='filter'>
            <FilterSvg className='filter-icon'/>
        </button>
    );
}

export default Filter;
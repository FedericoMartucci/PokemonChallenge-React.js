import {ReactComponent as FilterSvg} from '../FilterBar.svg';
import {ReactComponent as Cross} from '../Cross.svg';
import '../Filter.css'
import { useState } from 'react';

function FilterButton (props: any) {
    const [isFiltering, setIsFiltering] = useState<boolean>(false);
    const handleClick = () => {
        setIsFiltering(!isFiltering);
        props.handleFilter(isFiltering);
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

export default FilterButton;
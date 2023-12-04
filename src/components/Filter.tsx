import { ReactComponent as FilterSvg } from '../FilterBar.svg';

function Filter () {
    return (
        <div className='filter'>
            <FilterSvg></FilterSvg>
            <span>Filter</span>
        </div>
    );
}

export default Filter;
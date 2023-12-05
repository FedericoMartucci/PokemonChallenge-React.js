import { ReactComponent as FilterSvg } from '../FilterBar.svg';

function Filter () {
    return (
        <div className='filter'>
            <FilterSvg className='filter-icon'></FilterSvg>
            <span className='filter-text'>Filter</span>
        </div>
    );
}

export default Filter;
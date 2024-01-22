import { ReactComponent as FilterSvg } from '../../assets/FilterBar.svg';
import { ReactComponent as CrossSvg } from '../../assets/Cross.svg';

import { FilterButtonProps } from '../../utils/types';

import { useState } from 'react';
import { StyledButton } from '../button/StyledButton';

export default function FilterButton({ handleFilter }: FilterButtonProps) {
    const [isFiltering, setIsFiltering] = useState<boolean>(false);

    const handleClick = (): void => {
        setIsFiltering(!isFiltering);
        handleFilter(isFiltering);
    }

    return (
        <StyledButton
        onClick={handleClick}
        >
            {isFiltering ? <CrossSvg className='filter-icon' /> : <FilterSvg className='filter-icon' />}
        </StyledButton>
    )
}
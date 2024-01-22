import { ReactComponent as FilterSvg } from '../../assets/FilterBar.svg';
import { ReactComponent as CrossSvg } from '../../assets/Cross.svg';

import { ButtonType, FilterButtonProps, Sizes } from '../../utils/types';

import { useState } from 'react';
import { StyledButton } from '../common/Button';

export default function FilterButton({ handleFilter }: FilterButtonProps) {
    const [isFiltering, setIsFiltering] = useState<boolean>(false);

    const handleClick = (): void => {
        setIsFiltering(!isFiltering);
        handleFilter(isFiltering);
    }

    return (
        <StyledButton
        onClick={handleClick}
        buttonType={ButtonType.FILTER}
        size={Sizes.SMALL}
        >
            {isFiltering ? <CrossSvg className='filter-icon' /> : <FilterSvg className='filter-icon' />}
        </StyledButton>
    )
}
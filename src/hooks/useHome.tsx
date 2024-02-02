import { useState } from 'react'

import { Filter } from '../utils/types';
import { DEFAULT_FILTERS } from '../utils/constants';

export default function useHome() {
    const [value, setValue] = useState<string>('');
    const [filters, setFilters] = useState<Filter>(DEFAULT_FILTERS);
    const handleValueSearched = (value: string): void => {
        setValue(value)
    }
    const handleSearchWithFilters = (filters: Filter): void => {
        setFilters(filters);
    }
    return { handleValueSearched, handleSearchWithFilters, value, filters }
}

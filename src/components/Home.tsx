import React, { useState } from 'react'
import Main from './Main'
import NavBar from './NavBar'

export type Filter = {
  isBaby: boolean,
  color: string,
  weight: number[],
  types: string[]
}

export default function Home() {
  const [value, setValue] = useState<string>('');
  const [filters, setFilters] = useState<Filter>({isBaby: false,
                                                  color: '',
                                                  weight: [0, 1000],
                                                  types: []});
  const handleValueSearched = (value: string) => {
    setValue(value)
  }
  const handleSearchWithFilters = (isBaby: boolean, color: string, weight: number[], types: string[]) => {
    const filters: Filter = { isBaby, color, weight, types };
    setFilters(filters);
  }
  return (
    <div>
        <NavBar handleValueSearched={handleValueSearched} handleSearchWithFilters={handleSearchWithFilters}/>
        <Main value={value} filters={filters}/>
    </div>
  )
}

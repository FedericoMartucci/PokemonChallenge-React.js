import Main from './Main'
import NavBar from './NavBar'

import useHome from '../hooks/useHome';

export default function Home() {
  const { handleValueSearched, handleSearchWithFilters, value, filters } = useHome();
  return (
    <>
        <NavBar handleValueSearched={handleValueSearched} handleSearchWithFilters={handleSearchWithFilters}/>
        <Main value={value} filters={filters}/>
    </>
  )
}

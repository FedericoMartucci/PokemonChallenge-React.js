import React, { useState } from 'react'
import Main from './Main'
import NavBar from './NavBar'

export default function Home() {
  const [value, setValue] = useState<string>('');
  const handleValueSearched = (value: string) => {
    setValue(value)
  }
  return (
    <div>
        <NavBar handleValueSearched={handleValueSearched}/>
        <Main value={value}/>
    </div>
  )
}

import { ChangeEvent, FormEvent, useState } from "react";
import Lupe from "../images/LupeIcon.png"

import { SearchBarProps } from "../utils/types";

export default function SearchBar ({ handleSearch }: SearchBarProps) {
    const [value, setValue] = useState<string>('')

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        handleSearch(value);
        setValue('');
    }
    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const searched = e.target.value;
        setValue(searched);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="toogle-bar">
                <input className='search-input' onChange={handleChange} value={value} type="text" placeholder="Search..." />
                <button className="search-button"><img id="lupe-icon" src={Lupe} alt="Lupe"/></button>
            </div>
        </form>
    );
}
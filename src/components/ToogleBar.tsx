import { useState } from "react";
import Lupe from "../LupeIcon.png"
import '../ToogleBar.css'
function ToogleBar (props: any) {
    const [value, setValue] = useState<string>('')

    const handleSubmit = (e: any) => {
        e.preventDefault();
        props.handleSearch(value);
        setValue('');
    }
    const handleChange = (e: any) =>{
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

export default ToogleBar;
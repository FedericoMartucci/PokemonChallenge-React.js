import PokedexLogo from "../images/Logo.png"

export default function Logo () {
    return (
        <a className='pokemon-card-link' href="/">
            <img id="logo" src={PokedexLogo} alt="logo"/>
        </a>
    );
}
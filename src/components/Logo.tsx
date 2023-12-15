import PokedexLogo from "../logo.png"
function Logo () {
    return (
        <a className='pokemon-card-link' href="/">
            <img id="logo" src={PokedexLogo} alt="logo"/>
        </a>
    );
}

export default Logo;
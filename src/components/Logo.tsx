import PokedexLogo from "../assets/Logo.png"
import { StyledA } from "./common/A";
import { StyledImage } from "./common/Image";

export default function Logo () {
    return (
        <StyledA className='pokemon-card-link' href="/">
            <StyledImage
            width="100%"
            height="100%"
            src={PokedexLogo}
            alt="logo"/>
        </StyledA>
    );
}
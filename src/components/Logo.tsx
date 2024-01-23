import PokedexLogo from "../assets/Logo.png"
import { StyledA } from "./common/A";
import { StyledImage } from "./common/Image";

export default function Logo () {
    return (
        <StyledA href="/">
            <StyledImage
            width="100%"
            maxheight="100%"
            src={PokedexLogo}
            alt="logo"/>
        </StyledA>
    );
}
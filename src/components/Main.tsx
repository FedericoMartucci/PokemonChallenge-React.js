import { MainProps } from "../utils/types";

import Pokemon from "./Pokemon";
import { StyledMain } from "./common/Main";

export default function Main ({ value, filters }: MainProps) {
    return (
        <StyledMain>
            <Pokemon value={value} filters={filters}></Pokemon>
        </StyledMain>
    );
}
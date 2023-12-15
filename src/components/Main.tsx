import { MainProps } from "../utils/types";

import Pokemon from "./Pokemon";

export default function Main ({ value, filters }: MainProps) {
    return (
        <main>
            <Pokemon value={value} filters={filters}></Pokemon>
        </main>
    );
}
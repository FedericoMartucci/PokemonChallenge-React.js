import { Filter } from "./Home";
import Pokemon from "./Pokemon";
interface MainProps {
    value: string;
    filters: Filter;
  }
function Main ({value, filters}: MainProps) {
    return (
        <main>
            <Pokemon value={value} filters={filters}></Pokemon>
        </main>
    );
}

export default Main;
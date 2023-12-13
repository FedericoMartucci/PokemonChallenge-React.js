import Pokemon from "./Pokemon";
interface MainProps {
    value: string;
  }
function Main ({value}: MainProps) {
    return (
        <main>
            <Pokemon value={value}></Pokemon>
        </main>
    );
}

export default Main;
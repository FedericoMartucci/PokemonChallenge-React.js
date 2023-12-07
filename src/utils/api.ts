import axios from 'axios';

const api = axios.create({
    baseURL: "http://pokeapi.co/api/v2/pokemon"
})

type Result = {
    name: string;
    url: string;
}

export async function getPokemons (): Promise<any[]> {
    const axiosRes = await api.get('?limit=8&offset=0.')
    const results: Result[] = await axiosRes.data.results;

    const pokemons: any[] = await Promise.all(results.map(async result => {
            const response = await api.get(result.url);
            return response.data;
        })
    );

    return pokemons;
}


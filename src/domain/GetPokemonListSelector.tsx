import {selectorFamily} from 'recoil';
import Pokemon from '../ui/model/Pokemon';

const getPokemonListSelector = selectorFamily({
    key: 'getPokemons',
    get: (params) => async ({get}) => {
        try {
            console.debug(`getPokemonListSelector() params.limit=${params.limit}, params.offset = ${params.offset}`);
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${params.limit}&offset=${params.offset}`);
            const result = await response.json();
            return result.results.map((e) => new Pokemon(
                e.url.split('/')[6],
                e.name,
                e.url
            ));
        } catch(e) {
            console.error(e);
        }
    }
});

export default getPokemonListSelector;
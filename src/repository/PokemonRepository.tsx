import Pokemon from '../ui/model/Pokemon';
import Species from '../ui/model/Species';

interface PokemonRepository {
    getPokemonList(offset: number): Promise<Pokemon[]>;
    getSpecies(id: integer): Promise<Species>;
}
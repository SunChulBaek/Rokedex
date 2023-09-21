import Pokemon from '../ui/model/Pokemon';
import PokemonDetail from '../ui/model/PokemonDetail';
import Species from '../ui/model/Species';

interface PokemonRepository {
    getPokemonList(offset: number): Promise<Pokemon[]>;
    getSpecies(id: integer): Promise<Species>;
    getPokemonDetail(id: integer): Promise<PokemonDetail>;
}
import Pokemon from '../ui/model/Pokemon';
import PokemonDetail from '../ui/model/PokemonDetail';
import Species from '../ui/model/Species';
import Type from '../ui/model/Type';
import EvolutionChain from '../ui/model/EvolutionChain';

interface PokemonRepository {
    getPokemonList(offset: number): Promise<Pokemon[]>;
    getSpecies(sId: integer): Promise<Species>;
    getType(tId: integer): Promise<Type>;
    getEvolutionChain(ecId: integer): Promise<EvolutionChain>;
    getPokemonDetail(id: integer): Promise<PokemonDetail>;
}
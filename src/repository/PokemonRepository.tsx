import Pokemon from '../ui/model/Pokemon';
import PokemonDetail from '../ui/model/PokemonDetail';
import Species from '../ui/model/Species';
import Type from '../ui/model/Type';
import EvolutionChain from '../ui/model/EvolutionChain';
import Form from '../ui/model/Form';

interface PokemonRepository {
    getPokemonList(offset: number): Promise<Pokemon[]>;
    getSpecies(sId: integer): Promise<Species>;
    getType(tId: integer): Promise<Type>;
    getEvolutionChain(ecId: integer): Promise<EvolutionChain>;
    getForm(fId: integer): Promise<Form>;
    getPokemonDetail(id: integer): Promise<PokemonDetail>;
}
import {View} from 'react-native';
import {LinearGradient} from 'react-native-linear-gradient';
import Cross from '../common/Cross';

const PokemonDetailBg = () => {
    return (
        <LinearGradient style={{flex: 1}} colors={['#61dafb33', '#61dafbaa']}>
        </LinearGradient>
    );
}

export default PokemonDetailBg;
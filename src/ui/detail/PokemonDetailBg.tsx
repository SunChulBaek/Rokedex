import {Text, View} from 'react-native';
import {LinearGradient} from 'react-native-linear-gradient';
import Cross from '../common/Cross';

const rowCount = 20;
const columnCount = 10;

const PokemonDetailBg = () => {
    return (
        <LinearGradient style={{flex: 1}} colors={['#61dafb33', '#61dafbaa', '#90CAF9']}>
            <Tiles style={{width: '100%', height: '100%'}} rowCount={rowCount} columnCount={columnCount} />
        </LinearGradient>
    );
}

const Tiles = ({style, rowCount, columnCount}) => {
    var rows = [];
    for (var i = 0; i < rowCount; i++) {
        rows.push(<Row style={{flex: 1}} columnCount={columnCount} />);
    }
    return (
        <View style={[style, {width: '100%', flexDirection: 'column'}]}>
            {rows}
        </View>
    );
}

const Row = ({style, columnCount}) => {
    var column = [];
    for (var i = 0; i < columnCount; i++) {
        column.push(<Cross style={{flex: 1}} color={'#ffffff22'} width={2} />);
    }
    return (
        <View style={[style, {width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems:'center'}]}>
            {column}
        </View>
    );
}

export default PokemonDetailBg;
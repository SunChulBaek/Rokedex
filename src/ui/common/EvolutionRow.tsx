import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import MyImage from './MyImage';
import EvolutionPair from '../model/EvolutionPair';
import Utils from '../../util/Utils.tsx';

const styles = StyleSheet.create({
    evolution: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 50,
        paddingRight: 50
    }
});

const EvolutionRow = ({navigation, pair}) => {
    return (
        <View style={[styles.evolution]}>
            <MyImage
                style={{width: 100, aspectRatio: '1/1'}}
                source={{uri: Utils.getImageUrl(pair.from.id)}}
                onClick={() => {
                    navigation.push('PokemonDetail', {id: pair.from.id});
                }}
            />
            <Text>=></Text>
            <MyImage
                style={{width: 100, aspectRatio: '1/1'}}
                source={{uri: Utils.getImageUrl(pair.to.id)}}
                onClick={() => {
                    navigation.push('PokemonDetail', {id: pair.to.id});
                }}
            />
        </View>
    );
}

export default EvolutionRow;
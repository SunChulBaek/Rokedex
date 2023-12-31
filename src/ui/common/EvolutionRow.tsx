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

const EvolutionRow = ({navigation, pId, pair}) => {
    return (
        <View style={[styles.evolution]}>
            <MyImage
                style={{width: 100, aspectRatio: '1/1'}}
                source={{uri: Utils.getImageUrl(pair.from.id)}}
                onClick={pId != pair.from.id ? () =>  {
                    navigation.push('PokemonDetail', {id: pair.from.id, name: pair.from.name});
                } : undefined }
            />
            <Text>=></Text>
            <MyImage
                style={{width: 100, aspectRatio: '1/1'}}
                source={{uri: Utils.getImageUrl(pair.to.id)}}
                onClick={pId != pair.to.id ? () => {
                    navigation.push('PokemonDetail', {id: pair.to.id, name: pair.to.name});
                } : undefined }
            />
        </View>
    );
}

export default EvolutionRow;
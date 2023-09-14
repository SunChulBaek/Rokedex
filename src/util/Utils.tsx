import NetworkName from '../network/model/NetworkName';
import NetworkFlavorText from '../network/model/NetworkFlavorText';

function getIdFromUrl(url: string) {
    return url.split('/')[6];
}

function getImageUrl(id: number) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
}

function findName(names: NetworkName[], locale: string) {
    var fallbackName;
    for (var i = 0; i < names.length; i++) {
        const name = names[i];
        if (name.language.name == locale) {
            return name.name;
        } else if (name.language.name == 'en') {
            fallbackName = name.name;
        }
    }
    return fallbackName;
}

function findFlavor(flavors: NetworkFlavorText[], locale: string) {
    var fallbackFlavor;
    for (var i = 0; i < flavors.length; i++) {
        const flavor = flavors[i];
        if (flavor.language.name == locale) {
            return flavor.flavor_text;
        } else if (flavor.language.name == 'en') {
            fallbackFlavor = flavor.flavor_text;
        }
    }
    return fallbackFlavor;
}

export default {
    getIdFromUrl: getIdFromUrl,
    getImageUrl: getImageUrl,
    findName: findName,
    findFlavor: findFlavor
};
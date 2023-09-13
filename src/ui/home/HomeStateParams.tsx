import {atom} from 'recoil';

const homeStateParams = atom({
    key: 'homeStateParams',
    default: {
        limit: 50,
        offset: 0
    }
})

export default homeStateParams;
const Frisbee = require('frisbee');
import {AsyncStorage} from 'react-native';

const instance =  new Frisbee({
    baseURI: 'http://172.20.10.5:3000',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

const putToken = async () => {
    const token = await AsyncStorage.getItem('token');
    instance.jwt(token);
};

putToken();

export default instance;
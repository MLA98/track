import React, {useState} from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
import Spacer from '../components/spacer';

const AuthFrom = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
    const [email, setEmail] = useState('');
    const [password, setPwd] = useState('');

    return (<>
        <Spacer>
        <Text h4> {headerText} </Text>
        </Spacer>
        <Spacer>
            <Input label="Email" 
                    value={email} 
                    onChangeText={(newemail) => setEmail(newemail)}
                    autoCapitalize="none"
                    autoCorrect={false}
            />
        </Spacer>
        <Spacer>
            <Input 
                secureTextEntry={true}
                label="Password" 
                value={password}
                onChangeText={(newPwd) => setPwd(newPwd)}
                autoCapitalize="none"
                autoCorrect={false}
            />
        </Spacer>
        {headerText ? <Text style={styles.errorMsg}> {errorMessage} </Text> : null}
        <Spacer>
            <Button title={submitButtonText} onPress={()=>onSubmit({email, password})}/>
        </Spacer>
    </>);
}; 

const styles = StyleSheet.create({
    errorMsg:{
        fontSize: 15,
        color: 'red',
        marginLeft: 15,
    },
});

export default AuthFrom;
import React, {useContext} from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
import {Context as AuthContext} from '../context/AuthContext';
import Spacer from '../components/spacer';
import {SafeAreaView} from 'react-navigation';
import {FontAwesome} from '@expo/vector-icons';


const AccountScreen = () => {
    const {signout} = useContext(AuthContext);

    return (<SafeAreaView forceInset={{top : 'always'}}>
                <Text h4>AccountScreen</Text>
                <Spacer>
                    <Button title="Sign Out" onPress={signout}/>
                </Spacer>
            </SafeAreaView>
    );
};

const styles = StyleSheet.create({

});

AccountScreen.navigationOptions = {
    title: 'Account',
    tabBarIcon: <FontAwesome name="gear" size={20}/>
};

export default AccountScreen;
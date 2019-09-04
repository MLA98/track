import React, {useContext, useEffect} from 'react';
import { View, StyleSheet } from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import {NavigationEvents} from 'react-navigation';

const SignupScreen = ({ navigation }) => {
    const {state, signup, clearErrorMessage} = useContext(AuthContext);
    return (<View style={styles.container}>
        <NavigationEvents 
            onWillBlur={clearErrorMessage}
        />
        <AuthForm
            headerText="注册"
            errorMessage={state.errorMessage}
            onSubmit={signup}
            submitButtonText="注册"
        />
        <NavLink
            routeName="SignIn"
            text="有账号了？请登陆" 
        />
    </View>)
};


SignupScreen.navigationOptions = () => {
    return{
        header: null
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    },
});

export default SignupScreen;
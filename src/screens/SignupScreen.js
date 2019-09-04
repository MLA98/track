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
            headerText="Sign up for Tracker"
            errorMessage={state.errorMessage}
            onSubmit={signup}
            submitButtonText="Sign Up"
        />
        <NavLink
            routeName="SignIn"
            text="Already have an account, sign in instead" 
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
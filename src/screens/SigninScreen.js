import React, {useContext} from 'react';
import { View, StyleSheet } from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import {NavigationEvents} from 'react-navigation';

const SigninScreen = ({ navigation }) => {
    const {state, signin, clearErrorMessage} = useContext(AuthContext);

    console.log(state);

    return (<View style={styles.container}>
        <NavigationEvents 
            onWillBlur={clearErrorMessage}
        />
        <AuthForm
            headerText="Sign in for Tracker"
            errorMessage={state.errorMessage}
            onSubmit={signin}
            submitButtonText="Sign In"
        />
        <NavLink
            routeName="SignUp"
            text="Don't have an account, sign up instead" 
        />
    </View>)
};


SigninScreen.navigationOptions = () => {
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

export default SigninScreen;
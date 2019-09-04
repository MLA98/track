import React, {useState} from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import Spacer from '../components/spacer';
import {withNavigation} from 'react-navigation';

const NavLink = ({navigation, text, routeName}) => {
    return (
        <TouchableOpacity onPress={()=>navigation.navigate(routeName)}>
            <Text style={styles.link}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    link:{
        color: 'blue',
        marginLeft: 15
    }
});

export default withNavigation(NavLink);

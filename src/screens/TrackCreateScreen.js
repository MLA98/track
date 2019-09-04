// import '../_mockLocations';
import React, {useContext, useCallback} from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
import {SafeAreaView, withNavigationFocus} from 'react-navigation';
import Map from '../components/Map';
import {Context as LocationContext} from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';
import {FontAwesome} from '@expo/vector-icons';

const TrackCreateScreen = ({isFocused}) => {
    const { state, addLocation } = useContext(LocationContext);
    const callback = useCallback((location) => addLocation(location, state.recording), [state.recording]);
    const [err] = useLocation(isFocused, callback);

    return (
        <SafeAreaView>
            <Text h4>Create Track</Text>
            <Map/>
            {err ? <Text> Please enable location services. </Text> : null}
            <TrackForm/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

});

TrackCreateScreen.navigationOptions = {
    title: 'Add Tracks',
    tabBarIcon: <FontAwesome name="plus" size={20}/>
};

export default withNavigationFocus(TrackCreateScreen);
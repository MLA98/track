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
            <Text h4>创建路线</Text>
            <Map/>
            {err ? <Text> 请开启定位服务 </Text> : null}
            <TrackForm/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

});

TrackCreateScreen.navigationOptions = {
    title: '添加路线',
    tabBarIcon: <FontAwesome name="plus" size={20}/>
};

export default withNavigationFocus(TrackCreateScreen);
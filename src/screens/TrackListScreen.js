import React, {useContext} from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
import {NavigationEvents} from 'react-navigation';
import {Context as TrackContext} from '../context/TrackContext';
import {ListItem} from 'react-native-elements';

const TrackListScreen = ({navigation}) => {
    const {state, fetchTracks} = useContext(TrackContext);

    // console.log(state);
    if(!state){
        state_ = [];
    }
    else{
        state_ = state;
    }

    return (<>
        <NavigationEvents onWillFocus={()=>fetchTracks()}/>
        {/* <Button title="Go to track detail" onPress={() => navigation.navigate('TrackDetail')}/> */}
        <FlatList
            data={state_}
            keyExtractor={item=>item._id}
            renderItem={({item}) => {
                return <TouchableOpacity onPress={() => 
                    navigation.navigate('TrackDetail', {_id: item._id})
                }>
                    <ListItem chevron title={item.name}/>
                </TouchableOpacity>
            }} 
        />
    </>)
};

TrackListScreen.navigationOptions = {
    title: '路线',
};

const styles = StyleSheet.create({

});

export default TrackListScreen;
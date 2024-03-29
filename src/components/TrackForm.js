import React, {useContext} from 'react';
import { Input, Button, Text } from 'react-native-elements';
import Spacer from './spacer';
import {Context as LocationContext} from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {
    const {state : {name, recording, locations}, 
        startRecording, 
        stopRecording, 
        changeName
    } = useContext(LocationContext);

    const [saveTrack] = useSaveTrack();

    // console.log(locations.length);

    return (<>
        <Spacer>
            <Input value={name} onChangeText={changeName} placeholder="Enter Name"/>
        </Spacer>
        {recording
            ? (<Button title="Stop Tracking" onPress={stopRecording}/>) 
            : (<Button title="Start Tracking" onPress={startRecording}/>)
        }
        <Spacer>
        {!recording && locations.length
            ? <Button title="Save Recording" onPress={saveTrack}/>
            : null
        }
        </Spacer>
    </>);
}; 


export default TrackForm;
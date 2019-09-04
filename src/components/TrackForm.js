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
            <Input value={name} onChangeText={changeName} placeholder="添加名字"/>
        </Spacer>
        {recording
            ? (<Button title="停止追踪" onPress={stopRecording}/>) 
            : (<Button title="开始追踪" onPress={startRecording}/>)
        }
        <Spacer>
        {!recording && locations.length
            ? <Button title="保存路线" onPress={saveTrack}/>
            : null
        }
        </Spacer>
    </>);
}; 


export default TrackForm;
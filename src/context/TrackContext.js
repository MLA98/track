import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const trackReducer = (state, action) => {
    switch(action.type){
        case 'fetch_tracks':
            return action.payload;
        default:
            return state;
    }
};

const fetchTracks = (dispatch) => {
    return async () => {
        const response = await trackerApi.get('/tracks');
        dispatch({type:'fetch_tracks', payload: response.body}); 
    }
}

const createTrack = (dispatch) => {
    return async (name, locations) => {
        try{
            const response = await trackerApi.post('/tracks', {
            body:{
                name: name,
                locations: locations
            }
        });
            console.log(response);
        }
        catch(e){
            console.log(e.message);
        }
    }
}

export const { Context, Provider } = createDataContext(
    trackReducer,
    {fetchTracks, createTrack},
    []
)
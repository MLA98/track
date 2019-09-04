import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import {AsyncStorage} from 'react-native';
import {navigate} from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type){
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        case 'signin':
            return { errorMessage: '', token: action.payload};
        case 'signout':
            return { errorMessage: '', token: null};
        case 'clear_error_message':
            return {...state, errorMessage:''};
        default:
            return state;
    }
};

const tryLocalSignin = dispatch => {
    return async () => {
        const token = await AsyncStorage.getItem('token');
        if(token){
            dispatch({type:'siginin', payload: token});
            navigate('TrackList');
        }
        else{
            navigate('SignUp');
        }
    }
}

const signup = (dispatch) => {
    return async ({email, password}) => {
        try{
            console.log(email, password);
            // const response = await trackerApi.post('/signup', {email, password});
            const response = await trackerApi.post('/signup', {
                body:{
                    email: email,
                    password: password
                }
            });

            if(response.body.errmsg){ 
                console.log('error in try');
                dispatch({type:'add_error', payload:'Something went wrong with sign up'});
            }
            else if(response.error){
                console.log('error in try');
                dispatch({type:'add_error', payload:'Something went wrong with sign up'});
            }
            else{
                await AsyncStorage.setItem('token', response.body.token);
                dispatch({type:'signin', payload:response.body.token}); 
                navigate('TrackList');
            }
        }
        catch(e){
            dispatch({type:'add_error', payload:'Something went wrong with sign up'});
            console.error(e.message);
        }
    }
}

const signin = (dispatch) =>{
    return async ({email, password}) => {
        try{
            console.log(email, password);
            // const response = await trackerApi.post('/signup', {email, password});
            const response = await trackerApi.post('/signin', {
                body:{
                    email: email,
                    password: password
                }
            });

            if(response.body.errmsg){ 
                console.log('error in try');
                dispatch({type:'add_error', payload:'Something went wrong with sign in'});
            }
            else if(response.body.error){
                console.log('error in try');
                dispatch({type:'add_error', payload:response.body.error});
            }
            else{
                console.log(response);
                await AsyncStorage.setItem('token', response.body.token);
                dispatch({type:'signin', payload:response.body.token}); 
                navigate('TrackList');
            }
        }
        catch(e){
            dispatch({type:'add_error', payload:'Something went wrong with sign in'});
            console.log(e.message);
        }
    }
}

const clearErrorMessage = (dispatch) => {
    return ({}) => {
        dispatch({type:'clear_error_message'});
    }
}

const signout = (dispatch) =>{
    return async ({}) => {
        await AsyncStorage.removeItem('token');
        dispatch({type:'signout'});
        navigate('ResolveAuth');
    }
}

export const {Provider, Context} = createDataContext(
    authReducer,
    {signin, signout, signup, clearErrorMessage, tryLocalSignin},
    {token: null, errorMessage: ''}
)
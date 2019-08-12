import axois from 'axios';
import { GET_MOVIES } from './types';

//code
export const getMovies = () => dispatch => {
    axois.get('/api/movies/')
        .then(res => {
            dispatch({
                type: GET_MOVIES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
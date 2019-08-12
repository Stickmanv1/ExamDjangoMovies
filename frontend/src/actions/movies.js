import axois from 'axios';
import { GET_MOVIES, DELETE_MOVIES, ADD_MOVIES } from './types';

//code Get_movie
export const getMovies = () => dispatch => {
    axois.get('/api/movies/')
        .then(res => {
            dispatch({
                type: GET_MOVIES,
                payload: res.data
            });
        }).catch(err => console.log(err));
};

//Delete MOvies
export const deleteMovies = id => dispatch => {
    axois.delete(`/api/movies/${id}/`)
        .then(res => {
            dispatch({
                type: DELETE_MOVIES,
                payload: id
            });
        }).catch(err => console.log(err));
};

//add movies
export const addMovie = (movie) => dispatch => {
    axois.post('/api/movies/', movie)
        .then(res => {
            dispatch({
                type: ADD_MOVIES,
                payload: res.data
            });
        }).catch(err => console.log(err));
};
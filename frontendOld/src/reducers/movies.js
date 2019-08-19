import { GET_MOVIES, DELETE_MOVIES, ADD_MOVIES } from '../actions/types.js';

const initialState = {
    movies: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_MOVIES:
            return {
                ...state,
                movies: action.payload
            }
        case DELETE_MOVIES:
            return {
                ...state,
                movies: state.movies.filter(movie => movie.id !== action.payload)
            };
        case ADD_MOVIES:
            return {
                ...state,
                movies: [...state.movies, action.payload]
            };

        default:
            return state;
    }
}
import { SEARCH_START_ARTISTS, SEARCH_FAILURE_ARTISTS , ADD_ARTISTS_DATA} from '../actions/types';
const initialState = {
    artistData: null,
    error: false,
    isLoading: false,
}

const initialReducerState= {
    tokens: null,
}

//type
const GET_TOKEN = 'GET_TOKEN';

export const tokenReducer = (state = initialReducerState, action) => {
    switch(action.type) {
        case 'GET_TOKEN':
            return {
                ...state,
                tokens: action.tokens,
            }
        default: return state
    }
}

const SEARCH_SUCCESS_ARTISTS = 'SEARCH_SUCCESS_ARTISTS';


export const artistsReducer = (state = initialState, action) => {
    switch(action.type) {
        
        case 'SEARCH_SUCCESS_ARTISTS':
            return {
                ...state, // copy
                artistData: action.artistData,
                isLoading: false,
                error: false
            }
        case SEARCH_START_ARTISTS:
            return {
                ...state,
                isLoading: true,
                error: false
            }
        case SEARCH_FAILURE_ARTISTS:
            return {
                ...state,
                error: true,
                isLoading: false,
            }
        case ADD_ARTISTS_DATA: 
        return {
            ...state,
            artistData: action.payload
        }

        default: return state
    }
}

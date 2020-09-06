//action creators
import {SEARCH_SUCCESS_ARTISTS, SEARCH_FAILURE_ARTISTS, ADD_SEARCH_INPUT, ADD_ARTISTS_DATA, SEARCH_START_ARTISTS }  from './types';
import {searchEndpoint} from '../../config';




  




























// export function addSearchInput(input) {
//     return {
//         type: ADD_SEARCH_INPUT,
//         payload: input
//     }
// }

// // //artist
// export function getArtistData(artists) {
//     return {
//         type: SEARCH_SUCCESS_ARTISTS,
//         payload: artists //payload
//     }
// }

// export function fetchArtistsError () {
//     return {
//         type: SEARCH_FAILURE_ARTISTS
//     }
// }




// //helper
// export function userSearchEndpoint(searchInput, type) {
//     return `https://api.spotify.com/v1/search?q=${searchInput}&type=${type}`;
// }



// export function fetchedData(searchInput, accessToken) {
//     console.log("searchInput", accessToken)

//     return (dispatch) => {
//         // dispatch({type: SEARCH_START_ARTISTS})
//         fetch(userSearchEndpoint(searchInput, 'artist', accessToken), {
//             headers: {
//                 "Authorization":" Bearer " + accessToken,
//             }
//         })
//         .then(response => response.json())
//         .then(data => {
//             dispatch({
//                         type: ADD_ARTISTS_DATA,
//                         payload: data,
//                         });
//             setTimeout(() => {
//                 dispatch({type: SEARCH_SUCCESS_ARTISTS})
//             }, 3000)
//                 })
//         .catch(error => {dispatch({type: SEARCH_FAILURE_ARTISTS})})
//     }
// }


// export function getArtistData(accessToken, searchInput) {
//     //const searchLink = `${searchEndpoint + '?q=' + this.state.value.replace(/\s/g, '+')+ '&type=' + this.props.type + '&limit=' + this.props.limit;
//     return  dispatch => {
//         // const response = await fetch( )
//         // const json = await response.json()
//         // dispatch({type: SEARCH_SUCCESS_ARTISTS, payload: json})
       
//     }
// }

//fetchedData()
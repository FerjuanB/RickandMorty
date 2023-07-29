import axios from 'axios';
export const ADD_FAV = "ADD_FAV"
export const REMOVE_FAV = "REMOVE_FAV"
export const GET_FAVORITES = "GET_FAVORITES"
export const GET_DETAIL = "GET_DETAIL"
// export const addFav = (personaje)=>{
//     return{type: ADD_FAV,
//         payload:personaje
//     }
// }

// export const addFav = (character) => {
//     const endpoint = 'http://localhost:3001/rickandmorty/fav';
//     return (dispatch) => {
//        axios.post(endpoint, character).then(({ data }) => {
//           return dispatch({
//              type: ADD_FAV,
//              payload: data,
//           });
//        });
//     };
//  };


 export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
       axios.delete(endpoint).then(({ data }) => {
          return dispatch({
             type: REMOVE_FAV,
             payload: data,
       });
       });
    };
 };

 export const getFavorites = () =>{
   return async function (dispatch){
      const URL = "http://localhost:3001/rickandmorty/fav/"
      const response = await axios.get(`${URL}`)
      dispatch({type: GET_FAVORITES, payload: response.data} )
   }
 }

 export const getCharDetal = (id)=>{
   return async function (dispatch){
      const URL = "http://localhost:3001/rickandmorty/"
      const response = await axios.get(`${URL}${id}`)
      dispatch({type:GET_DETAIL, payload: response.data})
   }
 }
// export const removeFav = (id)=>{
//     return{type: REMOVE_FAV,
//         payload: id   
//     }
// }


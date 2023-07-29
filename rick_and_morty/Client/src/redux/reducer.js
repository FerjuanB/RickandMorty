import { ADD_FAV, REMOVE_FAV, GET_DETAIL, GET_FAVORITES } from "./actions"

const initialState = {
    myFavorites: [],
    CharacterDetail :{}
}
const reducer = (state = initialState, {type,payload}) =>{
    switch(type){
      
    //     case ADD_FAV:
    //   return { ...state, myFavorites: payload, allCharacters: payload };
        
      case REMOVE_FAV:
            return { ...state, myFavorites: payload };
        
            case GET_FAVORITES:
            return{...state, myFavorites: payload}
           
        default:
                return{...state}

        // case ADD_FAV: {
        //     return{...state, myFavorites:[...state.myFavorites,payload]}
        // }
        // case REMOVE_FAV: 
        //  return{...state, myFavorites: state.myFavorites.filter(e => e.id !== Number(payload))}
        
        // default:
        //     return{...state}
    }
}

export default reducer;
import style from './Card.module.css'
import { Link } from 'react-router-dom';
import { getFavorites, removeFav } from '../../redux/actions';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';



export function Card(props) {
   const {character, onClose, getFavorites, removeFav, myFavorites} = props;
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   const [isFav, setIsFav] = useState(false)
   const handleFavorite = ()=>{
      if(isFav) {
         setIsFav(false); 
         removeFav(character.id); 
      }else{
            setIsFav(true); 
            getFavorites({
               id: character.id,
               
               
            })}
   }
   return (
      <div className={style.div}>
            <div className={style.div2}>   {
                  isFav ? (
            <button className={style.buttonfav1}onClick={handleFavorite}>❤️</button>
                  ) : (
            <button className={style.buttonfav2}onClick={handleFavorite}>🤍</button>
                  )}

         <button className={style.button} onClick={()=> onClose(character.id)}>X</button>
            </div>
          <img className={style.img} src={character.image} alt='image of character selected' /> 
          <Link to={`/detail/${character.id}`}>
            <h2 className={style.h2}><b> {character.name}</b></h2>
            </Link>

       
       <h4 className={style.h4}>{character.gender}</h4>
       <h4 className={style.h4}>{character.origin.name}</h4>

      </div>
   );
}
export const mapStateToProps =(state)=>{
   return{
      myFavorites: state.myFavorites,
   }
}
export const mapDispatchToProps = (dispatch) =>{
   return{
      getFavorites:(personaje)=>{
         dispatch(getFavorites(personaje))
      },
      removeFav:(id)=>{
         dispatch(removeFav(id))
      }
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(Card);
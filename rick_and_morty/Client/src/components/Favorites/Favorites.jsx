import style from './Favorites.module.css'
import { MapStateToProps, useDispatch, useSelector } from 'react-redux'
import Card from '../Card/Card'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import {  getFavorites } from '../../redux/actions'

export const Fav = ()=>{
   
    const dispatch = useDispatch();
    const favorites = useSelector((state)=> state.myFavorites)

    useEffect(()=>{
        dispatch(getFavorites())
    },[]);
return(
    <div> 
    {favorites.map(({id, name, image, status, species, gender, origin }) =><Card 
        key={id}
        id={id}
        image={image}
        name={name}
        status={status}
        species={species}
        gender={gender}
        origin={origin.name}
 
    />
)}
</div>
    )}


export default connect(MapStateToProps, null)(Fav)
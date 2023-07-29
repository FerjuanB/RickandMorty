import style from './Detail.module.css'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
const Detail = ()=>{
    const {id} = useParams(); 
    const [character, setCharacter] = useState({})
useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
    .then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);

    return (
        <div className={style.div}>
            {character.name && <h1 className={style.h1}>{character.name}</h1>}
            {character.status && <h3 className={style.h3}>{character.status}</h3>}
            {character.gender && <h3 className={style.h3}>{character.gender}</h3>}
            {character.species && <h3 className={style.h3}>{character.species}</h3>}
            {character.origin && <h3 className={style.h3}>{character.origin.name}</h3>}
            <img className={style.img} src={character.image} alt='' /> 

        </div>
    )
}

export default Detail;
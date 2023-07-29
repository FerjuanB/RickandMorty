import { useState } from 'react';
import style from './SearchBar.module.css'


 export default function SearchBar({onSearch}) {
   const[id,setId] = useState('')
const handleChange = (event) => {
   setId(event.target.value)
} 
   return (
       <div className={style.button2}>
          <input className={style.input} type='search' onChange={handleChange} value={id} placeholder='Add any id number!'/>
          <button  className={style.button} onClick={()=> onSearch(id)}>Agregar</button>
       </div>
    );
 }

//  const example = {
//    id: 1,
//    name: 'Rick Sanchez',
//    status: 'Alive',
//    species: 'Human',
//    gender: 'Male',
//    origin: {
//       name: 'Earth (C-137)',
//       url: 'https://rickandmortyapi.com/api/location/1',
//    },
//    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
// };
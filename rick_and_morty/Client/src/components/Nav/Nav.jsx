import SearchBar from '../SearchBar/SearchBar.jsx'
import style from './Nav.module.css'
import { Link, Routes } from 'react-router-dom'
import About from '../About/About.jsx'

const Nav = ({onSearch}) => {
   return(
      <nav className={style.nav}>
         <img className={style.img1} src="https://i5.walmartimages.com/asr/a89ed403-fd86-4332-8efc-fdd96f1af74d.c9ebf9f1ed9c6f26964513ae14595c9d.png" alt="" />
         <Link to='/home' >
         <button className={style.but}>Home</button>

         </Link>

         <Link to='/about'>
         <button className={style.but}>About</button>
         </Link>
         <Link to='/favorites'>
         <button className={style.but}>Favorites</button>

         </Link>
      <SearchBar onSearch={onSearch} />
      
      
    

   </nav>
   )

}
export default Nav;




// export default 
// function Nav(props) {
//    const[id, setId] = useState('');
//     const handleChange = (event) => {
//         setId(event.target.value)
//     }
//    return (
//      <nav className={style.nav}>
//          <input className={style.input} type='search' placeholder='Add anyone'/>
//          <button className={style.button} onClick={props.onSearch(id)}>ADD</button>
//       </nav>
//    );
// }
{/* < SearchBar onSearch = {props.onSearch} /> */}


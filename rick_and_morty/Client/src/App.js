import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx'
import {useState, useEffect} from "react";
import axios from "axios";
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom'
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Fav from './components/Favorites/Favorites';

function App() {
  
   const[characters, setCharacters] = useState([])
   // const onSearch = (newChar) => {
   // setCharacters([...characters, newChar])       
   // }
   function onSearch(id) {
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      }).catch(error => window.alert('¡No hay personajes con este ID!') )
      
   }
   const onClose = (id) =>{
      const filtrar = characters.filter((character)=> character.id !== Number(id));
      setCharacters(filtrar);
   }
   const location = useLocation();
   
   const navigate = useNavigate();
   const[access,setAccess] = useState(false)
   
   function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      });
   }
   // const Email = "fbatres@gmail.com"
   // const Password = "unaPassw1"
   // const login = (userData) => {
   //    if(userData.password === Password && userData.email === Email){
   //       setAccess(true)
   //       navigate("/home");
   //    }else{
   //       alert("Usuario o contraseña INVALIDOS")
   //    }

   // }
   useEffect(() => {
      !access && navigate('/');
   }, [access]);
   return (
      <div className='App'>
   {location.pathname !== "/" && <Nav onSearch={onSearch} />}
<Routes>
   <Route path='/' element={<Form login={login}/>}/>

   <Route path="/home" element={ <Cards characters={characters} onClose={onClose}/>} />
     
   
   <Route path='/About' element={<About/>}  />
  
   
   <Route path='/detail/:id' element={<Detail/>} /> 

   <Route path='/Favorites' element={<Fav />} />

</Routes>
      </div>   
      // element={<Detail/>}>
  
);
}

export default App;

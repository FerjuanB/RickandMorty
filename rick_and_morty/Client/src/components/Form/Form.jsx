import style from './Form.module.css'
import image from '../Form/ricky.png'
import validation from './validation'
import { useState } from 'react'
const Form = ({login}) => {
    const [userData,setUserdata] = useState({
        email:"",
        password:""
    })
    const [errors,setErrors] = useState({
        email:"",
        password:""
    })
    const handleChange = (event) =>{
        const property = event.target.name;
        const value = event.target.value;

    setUserdata({...userData, [property]: value})
    validation({...userData, [property]: value}, errors, setErrors)
    } 
    
    const handleSubmit =(e)=>{
        e.preventDefault();
        login(userData)
    }
    return(
<form className={style.form} onSubmit={handleSubmit}>
        <img src={ image } alt="forms" className={style.img}/>
        <label htmlFor="email" className={style.emaillab}>Email</label>
        <input type="text" name="email" className={style.emailinp} value={userData.email} onChange={handleChange}/>
        <p>{errors.email}</p>
        <label htmlFor="password" className={style.passwlab}>Password</label>
        <input type="password" name="password" className={style.passwinp} value={userData.password} onChange={handleChange}/>
        <button type="submit" className={style.submit} >Login</button>
        <p className={style.msg}>{errors.password}</p>
</form>
    )
}

export default Form;
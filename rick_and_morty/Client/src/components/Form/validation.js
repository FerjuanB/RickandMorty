   
const validate = (userData, errors, setErrors) => {
  
    if(!userData.email) 
    setErrors({...errors, email:"Email vacío"})
     else if(userData.email.length >35) 
     setErrors ({...errors, email: "El email no debe tener más de 35 caracteres"});
      else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.email)) 
      setErrors({...errors, email:"Email invalido"}) 
    else{
        setErrors({...errors, email:""}) 
    }

    if(userData.password.length <6 || userData.password.length >10 ) setErrors({...errors, password: "Password incorrecto, debe tener entre 6 y 10caracteres"})
    else if(!/\d/.test(userData.password)) setErrors({...errors, password: "el password debe tener al menos un numero"})
    else{
        setErrors({...errors, password:""}) 
}
}

export default validate
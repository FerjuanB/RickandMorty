import style from './About.module.css'
import Image from "./About"
const About = () => {
    return(
<div className={style.div}>
    <hr />

<h2 className ={style.titulo}>Este es el primer proyecto que realizo con React.</h2>


 <p className={style.p}>Hola! Mi nombre es Fernando Batres, antetodo gracias por visitar este espacio, 
    Quiero contar que, al momento tengo 34 años, y este es mi primer proyecto trabajando con React, hace ya unos meses que comencé la carrera el Henry, allí, realizando el Prep-Course y adentrandome en un mundo ajeno y a la vez familiar, dado que estaba entrando a un lugar nuevo, desde la silla de mi casa, donde leo las noticias, realizo compras y calculo cuentas, (obvio que también juego). hoy, desde esa comodidad, estoy escribiendo estas líneas. con mucho camino recorrido, muchos tropezones y muchas ganas de continuar aprendiendo; continuo realizando mis homeworks y yendo siempre para adelante.

    Si sos un estudiante el que lee esto, en este punto quiero decirte que continúes, mirá siempre para atrás, para que entiendas el camino recorrido que es un montón. Te puede parecer que aún no sabés nada y que sos un chapuzas, pero tranquilo, La enseñanza de Henry nos empuja a más y siempre más, porque sabe que si estamos aquí, hoy, ahora, él, Henry, nos exige para empujarnos afuera de la zona de comfort, ese lugar tan lindo pero tan nocivo. 
    Nuevamente, adelante, continuá, mejorá esto que estás viendo y elevalo a la n potencia.
 </p>
<p className={style.p2}>
    Si estás evaluando mi proyecto para el ingreso a un trabajo, quiero que sepas que todo lo que hice lo hice a pulmón, como decían los viejos, que te contaban que las cosas costaban mucho, esfuerzo, tiempo y dinero. A mí sobretodo tiempo y esfuerzo, estoy acá porque disfruté y sigo disfrutando el camino. Soy Enfermero (a punto de recibirme de Licenciado) y además hace 10 años que soy bombero voluntario, por lo que tengo mucha experiencia tratando con gente, sobretodo con gente que necesita ayuda, por lo que estoy muy comodo en ambientes de trabajo con personas, sé dirigirme tanto a mis superiores, como eventualmente si debo manejar personal. 

    Hago esto porque me gusta, no hay otra manera de entender todo el tiempo invertido en la carrera.

    Gracias por leerme! dejo una pic mía!
</p>
<img src={Image} alt="Fernando Batres, estudia programacion" className={style.img}/>


        <hr />
</div>


    )
}

export default About;
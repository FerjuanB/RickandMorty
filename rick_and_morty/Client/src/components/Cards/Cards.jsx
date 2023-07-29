import Card from '../Card/Card';
import style from './Cards.module.css'

export default function Cards(props) {
   const {characters, onClose} = props;
   return (
   <div className={style.div}>
      {characters.map((character, index)=> <Card 
      // image={c.image}
      // name={c.name}
      // status={c.status}
      // species={c.species}
      // gender={c.gender}
      // origin={c.origin}
      // key={c.id}
      onClose={onClose}
      character={character}
      key={index}
      id={character.id}
      />)}  
   </div>
   );
}
const axios = require("axios")

const URL = "https://rickandmortyapi.com/api/character/"
async function getCharById (req, res){
    try {
        const id = parseInt(req.params.id)
    const getUrl = await axios(`${URL}${id}`).then(response =>{
            const {name, gender, species, origin, image, status} = response.data
            const character = {id, name, gender, species, origin, image, status}
            return character.name ? res.status(200).json(character):res.status(404).send("not found..")
          
        })
        return getUrl
    } catch (error){ 
        res.status(500).json({error :error.message})
    }
}
// function getCharById (req, res){
// const id = parseInt(req.params.id)
//      axios(`${URL}${id}`)   //! tener en cuenta q si no funciona, chequear el tipo de dato, si es string o number
// .then(response =>{
//     const {name, gender, species, origin, image, status} = response.data
//     const character = {id, name, gender, species, origin, image, status}
//     return character.name ? res.status(200).json(character):res.status(404).send("not found..")
//     // if(response.data)res.status(200).json(character);
//     // if(!response.data)res.status(404).send("Not found...")
// })
// .catch((error)=>{
//     res.status(500).json({error :error.message})})
// }






module.exports = getCharById
// const axios = require("axios")

// const getCharById = (res, id)=>{
//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(response => {
//         // {id: response.id;
//         // name:response.name;
//         // gender: response.gender;
//         // species: response.species;
//         // origin: response.origin.name;
//         // image: response.image;
//         // status: response.status}
//         const {id, name, gender, species, origin, image, status} = response.data
//     res.writeHead(200, {"Content-Type":"application/json"})
//     res.end(JSON.stringify( {id, name, gender, species, origin, image, status}))
//     })
//     .catch(error =>{
//         res.writeHead(500, {"Content-Type":"text/plain"})
//         res.end(error.message)
//     })
// }

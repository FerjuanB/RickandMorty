let myFavorites = []

function postFav (req, res){
    const {Fav} = req.body
myFavorites.push(Fav)
return res.status(201).json(myFavorites)
}
function deleteFav(req, res){
const {id} = req.params
myFavorites = myFavorites.filter(c => c.id !== id)
return res.status(200).json(myFavorites)
}
module.exports = {
    postFav, 
    deleteFav
};

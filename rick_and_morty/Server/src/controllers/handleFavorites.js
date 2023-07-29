let myFavorites = []

function postFav (req, res){
    const {body} = req
myFavorites.push(body)
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

var Movie = require('../../models/movie');
var Performer = require('../../models/performer')

module.exports = {
    index,
    create,
    show,
    update,
    delete: delOne
};

function index(req, res, next){

    Movie.find({}).populate('cast').then(function(movies){
        console.log(movies)
        res.status(200).json(movies);
    }).catch(function(err){
        res.status(500).json(err);
    })
}


function create(req, res){
    Movie.create(req.body).then(function(movie){
        res.status(201).json(movie);
    })
}

function show(req, res){
    Movie.findById(req.params.id).populate('cast').then(function(movie){
        res.status(200).json(movie)
    })
}

function update(req, res){
    Movie.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(function(puppy){
        res.status(200).json(movie);
    })
}

function delOne(req, res){
    Movie.findByIdAndDelete(req.params.id).then(function(movie){
        res.status(200).json(movie);
    })
}
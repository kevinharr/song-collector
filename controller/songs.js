import { Song } from "../models/song.js"

function newSong(req, res) {
    res.render("songs/new", {
        title: "Add Song",
    })
}

function create(req, res) {
    for (const key in req.body) {
        if(req.body[key] === "") delete req.body[key]
    }
    Song.create(req.body)
    .then(song => {
        res.redirect('/songs/new')
    })
    .catch(err => {
        console.log(err)
        res.redirect('/songs/new')
    })
}

export {
    newSong as new,
    create,
}
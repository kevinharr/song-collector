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
        res.redirect('/songs')
    })
    .catch(err => {
        console.log(err)
        res.redirect('/songs/new')
    })
}

function index(req, res) {
    Song.find({})
    .then(songs => {
      res.render('songs/index', {
        songs,
        title: "All Songs",
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect("/")
    })
  }

export {
    newSong as new,
    create,
    index,
}
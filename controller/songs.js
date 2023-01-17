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

  function show(req, res) {
    Song.findById(req.params.id)
    .then(song => {
      res.render('songs/show', {
        title: "Song Detail",
        song: song,
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect("/")
    })
  }

  function deleteSong(req, res) {
    Song.findByIdAndDelete(req.params.id)
    .then(song => {
        res.redirect("/songs")
    })
    .catch(err => {
        console.log(err)
        res.redirect("/songs")
    })
  }



export {
    newSong as new,
    create,
    index,
    show,
    deleteSong as delete,
}
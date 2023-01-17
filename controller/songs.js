import { Song } from "../models/song.js"
import { Venue } from "../models/venue.js"

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
        res.redirect('/songs')
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
    .populate('tour')
    .then(song => {
        Venue.find({_id: {$nin: song.tour}})
        .then(venues => {
          res.render('songs/show', {
            title: 'Song Detail',
            song: song,
            venues: venues,
          })
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

  function edit(req, res) {
    Song.findById(req.params.id)
    .then(song => {
        res.render("songs/edit", {
            song,
            title: "Edit Song"
        })
    })
    .catch(err => {
        console.log(err)
        res.redirect("/")
    })
  }

  function update(req, res) {
    for (let key in req.body) {
      if(req.body[key] === "") delete req.body[key]
    }
    Song.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(song => {
      res.redirect(`/songs`)
    })
    .catch(err => {
      console.log(err)
      res.redirect("/")
    })
  }

  function addToTour(req, res) {
    Song.findById(req.params.id)
    .then(song => {
      song.tour.push(req.body.venueId)
      song.save()
          .then(() => {
            res.redirect(`/songs/${song._id}`)
          })
      .catch(err => {
        console.log(err);
        res.redirect("/songs")
      })
    })
    .catch(err => {
      console.log(err);
      res.redirect("/songs")
    })
  }
  
export {
    newSong as new,
    create,
    index,
    show,
    deleteSong as delete,
    edit,
    update,
    addToTour,
}
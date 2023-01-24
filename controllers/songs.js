import { Song } from "../models/song.js"

function newSong(req, res) {
  res.render("songs/new", {
    title: "Add Songs",
  })
}

function create(req, res) {
  for (const key in req.body) {
    if(req.body[key] === "") delete req.body[key]
  }
  req.body.owner = req.user.profile._id
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
        title: "Songs",
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
      title: 'Tour Dates',
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
    if (song.owner.equals(req.user.profile._id))
    res.redirect(`/songs`)
  })
  } else {
    throw new Error("Not authorized")
  }
  .catch(err => {
    console.log(err)
    res.redirect("/")
  }
}

function createTour(req, res) {
  Song.findById(req.params.id)
  .then(song => {
    song.tours.push(req.body)
    song.save()
    .then(() => {
      res.redirect(`/songs/${song._id}`)
    })
      catch(err => {
      console.log(err)
      res.redirect('/')
      })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
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
  createTour,
}
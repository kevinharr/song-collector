import { Song } from "../models/song"

function newSong(req, res) {
    res.render("songs/new", {
        title: "Add Song",
    })
}

export {
    newSong as new
}
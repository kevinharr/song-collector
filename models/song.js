import mongoose from 'mongoose'

const Schema = mongoose.Schema

const songSchema = new Schema({
    title: String,
    artist: String,
    album: String,
    year: String,
    genre: String,
        
}, {
    timestamps: true
})

const Song = mongoose.model('Song', songSchema)

export {
    Song
}
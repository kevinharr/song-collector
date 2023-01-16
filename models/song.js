import mongoose from 'mongoose'

const Schema = mongoose.Schema

const songSchema = new Schema({
    song: String,
    artist: String,
    tour: [{ObjectId, ref 'Tour'}],
    album: String,
    year: String,
    genre: String,
    owner: [{ObjectId, ref 'Profile'}]
}), {
    timestamps: true
}

const Song = mongoose.model('Song', songSchema)

export {
    Song
}
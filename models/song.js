import mongoose from 'mongoose'

const Schema = mongoose.Schema

const songSchema = new Schema({
    song: { 
        type: String,
        required: true},
    artist: String,
    album: String,
    year: String,
    genre: {
        type: String,
        enum: ['Pop', 'Alternative', 'Rock', 'Rap', 'Country', 'Dance']
}}, {
    timestamps: true
})

const Song = mongoose.model('Song', songSchema)

export {
    Song
}
import mongoose from 'mongoose'

const Schema = mongoose.Schema

const songSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    artist: String,
    tour: [{type: Schema.Types.ObjectId, ref: 'Venue'}],
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
import mongoose from 'mongoose'

const Schema = mongoose.Schema

const tourSchema = new Schema({
  day: String,
  date: Date,
  start: String,
  venue: String,
    
})

const songSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  artist: String,
  album: String,
  year: Number,
  genre: String,
  tours: [tourSchema], 
  owner: {type: Schema.Types.ObjectId, ref: "Profile"}
}, {
  timestamps: true
})

const Song = mongoose.model('Song', songSchema)

export {
  Song
}
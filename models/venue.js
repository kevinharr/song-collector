import mongoose from 'mongoose'

const Schema = mongoose.Schema

const venueSchema = new Schema({
  name: { type: String, required: true },
  city: String,
  state: String,
}, {
  timestamps: true
})

const Venue = mongoose.model('Venue', venueSchema)

export {
  Venue
}
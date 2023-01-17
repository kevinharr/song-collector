import { Venue } from '../models/venue.js'

function newVenue(req, res) {
    Venue.find({})
    .then(venues => {
        res.render('venues/new', {
            title: 'Add Venue',
            venues: venues,
        })
    })
    .catch(err => {
        res.redirect('/songs')
    })
}

function create(req, res) {
    Venue.create(req.body)
    .then(venue => {
       res.redirect('/venues/new')        
    })
}

export {
  newVenue as new,
  create,
}
import { Router} from 'express'
import * as songsCtrl from '../controllers/songs.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', songsCtrl.index)

router.get('/new', songsCtrl.new)

router.get('/:id', songsCtrl.show)

router.get('/:id/edit', isLoggedIn, songsCtrl.edit)

router.post('/', isLoggedIn, songsCtrl.create)

router.post('/:id/tours', isLoggedIn,  songsCtrl.createTour)

router.delete('/:id', isLoggedIn, songsCtrl.delete)

router.put('/:id', isLoggedIn, songsCtrl.update)

export {
  router
}
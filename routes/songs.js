import { Router} from 'express'
import * as songsCtrl from '../controller/songs.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', songsCtrl.index)

router.get('/new', songsCtrl.new)

router.get('/:id', songsCtrl.show)

router.get('/:id/edit', songsCtrl.edit)

router.post('/', isLoggedIn, songsCtrl.create)

router.post('/:id/tours', isLoggedIn,  songsCtrl.createTour)

router.delete('/:id', songsCtrl.delete)

router.put('/:id', songsCtrl.update)

export {
    router
}
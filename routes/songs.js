import { Router} from 'express'
import * as songsCtrl from '../controller/songs.js'

const router = Router()

router.get('/', songsCtrl.index)

router.get('/new', songsCtrl.new)

router.get('/:id', songsCtrl.show)

router.get('/:id/edit', songsCtrl.edit)

router.post('/', songsCtrl.create)

router.post('/:id/venues', songsCtrl.addToTour)

router.delete('/:id', songsCtrl.delete)

router.put('/:id', songsCtrl.update)

export {
    router
}
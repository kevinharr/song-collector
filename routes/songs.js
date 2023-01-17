import { Router} from 'express'
import * as songsCtrl from '../controller/songs.js'

const router = Router()

router.get('/', songsCtrl.index)

router.get('/new', songsCtrl.new)

router.get('/:id', songsCtrl.show)

router.post('/', songsCtrl.create)

router.delete("/:id", songsCtrl.delete)

export {
    router
}
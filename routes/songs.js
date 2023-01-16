import { Router} from 'express'
import * as songsCtrl from '../controller/songs.js'

const router = Router()

router.get('/new', songsCtrl.new)

router.get('/:id', songsCtrl.show)

router.post('/', songsCtrl.create)

export {
    router
}
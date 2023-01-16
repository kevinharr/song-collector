import { Router} from 'express'
import * as songsCtrl from '../controllers/songs.js'

const router = Router()

router.get('/new', songsCtrl.new)

router.post('/', songsCtrl.create)

export {
    router
}
import { Router} from 'express'
import * as songsCTRL from '../controllers/songs.js'

const router = Router()

router.get('/new', songsCtrl.new)

export {
    router
}
import { Router } from 'express'
import * as venuesCtrl from '../controller/venues.js'

const router = Router()

router.get('/new', venuesCtrl.new)

router.post('/', venuesCtrl.create)

export {
  router
}
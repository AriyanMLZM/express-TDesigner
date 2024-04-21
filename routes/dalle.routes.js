import express from 'express'
import * as dotenv from 'dotenv'
import { OpenAI } from 'openai'

dotenv.config()

const router = express.Router()

router.route('/').get((req, res) => {
  res.status(200).json({ msg: 'Hello DALL.E?' })
})

export default router

import express from 'express'
import * as dotenv from 'dotenv'
import { OpenAI } from 'openai'

dotenv.config()

const router = express.Router()

const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY,
})

router.route('/').get((req, res) => {
  res.status(200).json({ msg: 'Hello DALL.E Route?' })
})

router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body
    const resp = await openai.createImage({
      prompt,
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json',
    })

    const image = resp.data.data[0].b64_json

    res.status(200).json({ photo: image })
  } catch (error) {
    console.error(error)
    res.status(500).json({ msg: 'Sth went wrong!' })
  }
})

export default router

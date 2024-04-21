import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'

import router from './routes/dalle.routes.js'

dotenv.config()

const port = 8080

const app = express()
app.use(cors())
app.use(express.json({ limit: '50mg' }))

app.use('/api/v1/dalle', router)

app.get('/', (req, res) => {
  res.status(200).json({ msg: 'Hello?' })
})

app.listen(port, () => {
  console.log(`Server is running on ${port}`)
})

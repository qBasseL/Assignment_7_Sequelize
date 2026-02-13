import express from 'express'
import { PORT } from '../config/config.service.js'
import { authenticateDB } from './DB/db.connection.js'


const bootstrap = async () => {

    const app = express()

    app.use(express.json())
    await authenticateDB()

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })

}

export default bootstrap
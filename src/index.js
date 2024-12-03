
import app from './app.js'
import 'dotenv/config'
import logger from './logs/logger.js'

import { sequelize } from './database/database.js'

//Funcion para ejecutar el servidor
async function main() {
    //Iniciar sequelize
    //await sequelize.sync({ force:true })
    await sequelize.sync({ force:true })

    const port = process.env.PORT
    app.listen(port)
    console.log('Listening on port', port)
    logger.info(`Listening on port ${port}`)
    logger.warn(`Listening on port ${port}`)
}

main()


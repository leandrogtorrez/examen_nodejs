
import pino from "pino"

const logger = pino({
    transport:{
        target: 'pino-pretty',
        options: {
            translate : true
        }
    },
})


export default logger
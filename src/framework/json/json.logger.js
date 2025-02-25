/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

export class HALogger {

    log =
        (message) => {
            console.log(`yesferal: log: ${message}`)
        }

    logObject =
        (obj) => {
            console.log(`yesferal: obj: ${JSON.stringify(obj)}`)
        }
}

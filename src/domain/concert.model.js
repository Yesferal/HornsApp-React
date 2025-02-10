/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

class ConcertModel {
    EMPTY_MODEL = {
        name: null,
        about: {
            en: null,
            es: null
        },
        dateTime: null,
        images: Yup.object().shape({
            headliner: null,
            poster: null,
        }),
        genre: null,
        ticketing: {
            name: null,
            url: null
        },
        trailer: {
            image: null,
            url: null
        }
    }
}

export default ConcertModel

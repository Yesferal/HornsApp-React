/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

class ConcertModel {
    EMPTY_MODEL = {
        name: null,
        about: {
            en: null,
            es: null
        },
        dateTime: null,
        headliner: {
            name: null,
            url: null
        },
        ticketing: {
            name: null,
            url: null
        },
        links: [],
        tags: [],
        venue: null,
        state: null,
        bands: [],
    }
}

export default ConcertModel

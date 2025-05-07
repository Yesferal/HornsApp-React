/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

class ConcertModel {
    EMPTY_MODEL = {
        name: null,
        about: {
            en: null,
            es: null
        },
        dateTime: null,
        totalDays: null,
        headliner: {
            name: null,
            url: null
        },
        ticketing: {
            name: null,
            url: null
        },
        isLiveMusicEvent: false,
        links: [],
        categories: [],
        venue: null,
        state: null,
        activities: [],
        lineup: null,
    }
}

export default ConcertModel

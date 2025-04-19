/* Copyright © 2024 Yesferal Cueva. All rights reserved. */

import axios from "axios";
import { Environment } from "../env/env.datasource";

export class AxiosDataSource {
    HTTP_BAND_REQUEST_PATH = "admin_activity"
    HTTP_CONCERT_REQUEST_PATH = "admin_event"
    HTTP_VENUE_REQUEST_PATH = "admin_venue"
    HTTP_STATE_REQUEST_PATH = "admin_state"
    HTTP_REVIEW_REQUEST_PATH = "admin_screen_render"
    HTTP_DRAWER_REQUEST_PATH = "admin_app_render"

    baseUrl = new Environment().BASE_URL;
    auth = new Environment().APP_AUTH;

    config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Origin': window.location.href,
            'Authorization': this.auth,
        },
        referrerPolicy: 'origin',
    }

    makeGetRequest(path, onSuccess, onError) {
        const url = `${this.baseUrl}/${path}`
        axios
            .get(url, this.config)
            .then((response) => {
                console.log(`YESFERAL: HornsAppAxios: Get: response: ${response}`);
                onSuccess(response);
            })
            .catch((error) => {
                console.log(`YESFERAL: HornsAppAxios: Get: error: ${error}`);
                onError(error);
            });
    }

    makePostRequest(path, object, onSuccess, onError) {
        axios.post(`${this.baseUrl}/${path}`, object, this.config)
            .then(response => {
                console.log(`YESFERAL: HornsAppAxios: Post: response: ${response}`);
                onSuccess(response)
            })
            .catch((error) => {
                console.log(`YESFERAL: HornsAppAxios: Post: error: ${error}`);
                onError(error);
            });
    }

    makePutRequest(path, object, onSuccess, onError) {
        axios
            .put(`${this.baseUrl}/${path}`, object, this.config)
            .then((response) => {
                console.log(`YESFERAL: HornsAppAxios: Put: response: ${response}`);
                onSuccess(response)
            })
            .catch((error) => {
                console.log(`YESFERAL: HornsAppAxios: Put: error: ${error}`);
                onError(error);
            });
    }

    makeDeleteRequest(path, onSuccess, onError) {
        axios
            .delete(`${this.baseUrl}/${path}`, this.config)
            .then((response) => {
                console.log(`YESFERAL: HornsAppAxios: Delete: response: ${response.data}`);
                onSuccess(response)
            })
            .catch((error) => {
                console.log(`YESFERAL: HornsAppAxios: Delete: error: ${error}`);
                onError(error);
            });
    }
}

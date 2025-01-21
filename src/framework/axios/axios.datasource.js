/* Copyright © 2024 Yesferal Cueva. All rights reserved. */

import axios from "axios";
import { Environment } from "../env/env.datasource";

export class AxiosDataSource {
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
        axios
            .get(`${this.baseUrl}/${path}`, this.config)
            .then((response) => {
                console.log(`YESFERAL: HornsAppAxios: response: ${response}`);
                onSuccess(response);
            })
            .catch((error) => {
                console.log(`YESFERAL: HornsAppAxios: error: ${error}`);
                onError(error);
            });
    }

    makePostRequest(path, object, onSuccess, onError) {
        axios.post(`${this.baseUrl}/${path}`, object, this.config)
            .then(response => {
                console.log(`YESFERAL: HornsAppAxios: response: ${response}`);
                onSuccess(response)
            })
            .catch((error) => {
                console.log(`YESFERAL: HornsAppAxios: error: ${error}`);
                onError(error);
            });
    }

    makePutRequest(path, object, onSuccess, onError) {
        axios
            .put(`${this.baseUrl}/${path}`, object, this.config)
            .then((response) => {
                console.log(`YESFERAL: HornsAppAxios: response: ${response}`);
                onSuccess(response)
            })
            .catch((error) => {
                console.log(`YESFERAL: HornsAppAxios: error: ${error}`);
                onError(error);
            });
    }

    makeDeleteRequest(path, onSuccess, onError) {
        axios
            .delete(`${this.baseUrl}/${path}`, this.config)
            .then((response) => {
                console.log(`YESFERAL: HornsAppAxios: response: ${response.data}`);
                onSuccess(response)
            })
            .catch((error) => {
                console.log(`YESFERAL: HornsAppAxios: error: ${error}`);
                onError(error);
            });
    }
}

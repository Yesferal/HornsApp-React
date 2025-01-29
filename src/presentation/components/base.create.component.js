/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AxiosDataSource } from "../../framework/axios/axios.datasource";

export function BaseCreateComponent(path, emptyModel, redirect, initForm) {
    const axiosDataSource = new AxiosDataSource()
    const myNavigate = useNavigate()
    const [formValues] = useState(emptyModel)
    const onSubmit = bandObject => {
        axiosDataSource.makePostRequest(path, bandObject, (response) => {
            if (response.status === 200) {
                alert(`${path} successfully created`)
                myNavigate(redirect)
            } else {
                Promise.reject();
            }
        }, (error) => {
            console.log(`YESFERAL: ${path}: error: ${error}`);
        });
    }

    return initForm(formValues, onSubmit, "Create")
}

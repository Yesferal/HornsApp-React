/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

import { useNavigate } from "react-router-dom";
import { AxiosDataSource } from "../../framework/axios/axios.datasource";
import { useEffect, useState } from "react";

export function BaseEditComponent(path, emptyModel, redirect, initForm) {
    const axiosDataSource = new AxiosDataSource()
    const myNavigate = useNavigate()

    const [formValues, setFormValues] = useState(emptyModel);

    useEffect(() => {
        new AxiosDataSource().makeGetRequest(path, (response) => {
            setFormValues(response.data);
        }, (error) => {
            console.log(`YESFERAL: BandList: error: ${error}`);
        });
    }, []);

    const onSubmit = (bandObject) => {
            axiosDataSource.makePutRequest(path, bandObject, (response) => {
                if (response.status === 200) {
                    alert("Band successfully updated");
                    myNavigate(redirect)
                } else {
                    Promise.reject();
                }
            }, (error) => {
                console.log(`YESFERAL: BandList: error: ${error}`);
            });
        };

    return initForm(formValues, onSubmit, "Edit")
}

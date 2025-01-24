/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

// Import Modules
import React,
{
    useState,
} from "react";
import BandForm from "./BandForm";
import { AxiosDataSource } from "../../../framework/axios/axios.datasource";
import { RouterNavigatorDataSource } from "../../../framework/react_router/router.datasource";
import { useNavigate } from "react-router-dom";
import BandModel from "../../../domain/band.model";

const CreateBand = () => {
    const bandModel = new BandModel()
    const axiosDataSource = new AxiosDataSource()
    const myNavigate = useNavigate()
    const router = new RouterNavigatorDataSource()

    const [formValues] = useState(bandModel.EMPTY_MODEL)

    const onSubmit = bandObject => {
        axiosDataSource.makePostRequest(axiosDataSource.HTTP_REQUEST_PATH, bandObject, (response) => {
            if (response.status === 200) {
                alert('Band successfully created')
                myNavigate(router.BAND_LIST)
            } else {
                Promise.reject();
            }
        }, (error) => {
            console.log(`YESFEERAL: BandList: error: ${error}`);
        });
    }

    return (
        <BandForm initialValues={formValues}
            onSubmit={onSubmit}
            enableReinitialize>
            Create Band
        </BandForm>
    )
}

export default CreateBand

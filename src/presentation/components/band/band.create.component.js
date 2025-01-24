/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

// Import Modules
import React,
{
    useState,
} from "react";
import BandForm from "./BandForm";
import { AxiosDataSource } from "../../../framework/axios/axios.datasource";
import { RouterNavigatorDataSource } from "../../../framework/react_router/router.datasource";
import BandConstant from "./band.constant";
import { useNavigate } from "react-router-dom";

const CreateBand = () => {
    const bandConstant = new BandConstant()
    const myNavigate = useNavigate()
    const router = new RouterNavigatorDataSource()

    const [formValues] = useState(bandConstant.EMPTY_MODEL)

    const onSubmit = bandObject => {
        new AxiosDataSource().makePostRequest(bandConstant.HTTP_REQUEST_PATH, bandObject, (response) => {
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

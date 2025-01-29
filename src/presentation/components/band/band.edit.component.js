/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

// Import Modules
import React,
{
    useState,
    useEffect
} from "react";
import { useNavigate, useParams } from "react-router-dom";
import BandForm from "./BandForm";
import { AxiosDataSource } from "../../../framework/axios/axios.datasource";
import { RouterNavigatorDataSource } from "../../../framework/react_router/router.datasource";
import BandModel from "../../../domain/band.model";

const EditBand = (props) => {
    const { id } = useParams();
    const bandModel = new BandModel()
    const axiosDataSource = new AxiosDataSource()
    const myNavigate = useNavigate()
    const router = new RouterNavigatorDataSource()

    const [formValues, setFormValues] =
        useState(bandModel.EMPTY_MODEL);

    const onSubmit = (bandObject) => {
        axiosDataSource.makePutRequest(`${axiosDataSource.HTTP_BAND_REQUEST_PATH}/${id}`, bandObject, (response) => {
            if (response.status === 200) {
                alert("Band successfully updated");
                myNavigate(router.BAND_LIST)
            } else {
                Promise.reject();
            }
        }, (error) => {
            console.log(`YESFERAL: BandList: error: ${error}`);
        });
    };

    useEffect(() => {
        new AxiosDataSource().makeGetRequest(`${axiosDataSource.HTTP_BAND_REQUEST_PATH}/${id}`, (response) => {
            const {
                name,
                genre,
                formerIn,
                about,
                country,
                images
            } = response.data;
            setFormValues(
                {
                    name,
                    genre,
                    formerIn,
                    about,
                    country,
                    images
                });
        }, (error) => {
            console.log(`YESFEERAL: BandList: error: ${error}`);
        });
    }, []);

    return (
        <BandForm
            initialValues={formValues}
            onSubmit={onSubmit}
            enableReinitialize>
            Update Band
        </BandForm>
    );
};

export default EditBand;

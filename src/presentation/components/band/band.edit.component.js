/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

import { useParams } from "react-router-dom";
import { initBandForm } from "./BandForm";
import { AxiosDataSource } from "../../../framework/axios/axios.datasource";
import { RouterNavigatorDataSource } from "../../../framework/react_router/router.datasource";
import BandModel from "../../../domain/band.model";
import { BaseEditComponent } from "../base.edit.component";

const EditBand = (props) => {
    const { id } = useParams();
    const axiosDataSource = new AxiosDataSource()
    const path = `${axiosDataSource.HTTP_BAND_REQUEST_PATH}/${id}`
    const bandModel = new BandModel()
    const router = new RouterNavigatorDataSource()

    return BaseEditComponent(path, bandModel.EMPTY_MODEL, router.BAND_LIST, initBandForm)
};

export default EditBand;

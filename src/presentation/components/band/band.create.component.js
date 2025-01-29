/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

import { AxiosDataSource } from "../../../framework/axios/axios.datasource";
import { RouterNavigatorDataSource } from "../../../framework/react_router/router.datasource";
import BandModel from "../../../domain/band.model";
import { BaseCreateComponent } from "../base.create.component";
import { initBandForm } from "./BandForm";

const CreateBand = () => {
    const axiosDataSource = new AxiosDataSource()
    const path = axiosDataSource.HTTP_BAND_REQUEST_PATH
    const bandModel = new BandModel()
    const emptyModel = bandModel.EMPTY_MODEL
    const router = new RouterNavigatorDataSource()
    const redirect = router.BAND_LIST
    const initForm = initBandForm

    return BaseCreateComponent(path, emptyModel, redirect, initForm)
}

export default CreateBand

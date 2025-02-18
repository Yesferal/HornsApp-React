/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

import { AxiosDataSource } from "../../../framework/axios/axios.datasource";
import { RouterNavigatorDataSource } from "../../../framework/react_router/router.datasource";
import { BaseCreateComponent } from "../base.create.component";
import VenueModel from "../../../domain/venue.model";
import { initVenueForm } from "./VenueForm";

const CreateVenue = () => {
    const axiosDataSource = new AxiosDataSource()
    const path = axiosDataSource.HTTP_VENUE_REQUEST_PATH
    const model = new VenueModel()
    const emptyModel = model.EMPTY_MODEL
    const router = new RouterNavigatorDataSource()
    const redirect = router.VENUE_LIST

    return BaseCreateComponent(path, emptyModel, redirect, initVenueForm)
}

export default CreateVenue

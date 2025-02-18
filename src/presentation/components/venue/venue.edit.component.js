/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

import { useParams } from "react-router-dom";
import { AxiosDataSource } from "../../../framework/axios/axios.datasource";
import { RouterNavigatorDataSource } from "../../../framework/react_router/router.datasource";
import { BaseEditComponent } from "../base.edit.component";
import VenueModel from "../../../domain/venue.model";
import { initVenueForm } from "./VenueForm";

const EditVenue = (props) => {
    const { id } = useParams();
    const axiosDataSource = new AxiosDataSource()
    const path = `${axiosDataSource.HTTP_VENUE_REQUEST_PATH}/${id}`
    const model = new VenueModel()
    const router = new RouterNavigatorDataSource()

    return BaseEditComponent(path, model.EMPTY_MODEL, router.VENUE_LIST, initVenueForm)
};

export default EditVenue;

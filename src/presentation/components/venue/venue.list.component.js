/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

import { AxiosDataSource } from "../../../framework/axios/axios.datasource";
import { RouterNavigatorDataSource } from "../../../framework/react_router/router.datasource";
import { BaseListComponent } from "../base.list.component";
import { initVenueTable } from "./VenueTableRow";

const VenueList = () => {
    const axiosDataSource = new AxiosDataSource()
    const path = axiosDataSource.HTTP_VENUE_REQUEST_PATH
    const router = new RouterNavigatorDataSource()
    const redirect = router.VENUE_CREATE

    return BaseListComponent(path, redirect, initVenueTable)
};

export default VenueList;

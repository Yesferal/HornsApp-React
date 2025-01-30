/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

import { initBandTable } from "./BandTableRow";
import { AxiosDataSource } from "../../../framework/axios/axios.datasource";
import { RouterNavigatorDataSource } from "../../../framework/react_router/router.datasource";
import { BaseListComponent } from "../base.list.component";

const BandList = () => {
    const axiosDataSource = new AxiosDataSource()
    const path = axiosDataSource.HTTP_BAND_REQUEST_PATH
    const router = new RouterNavigatorDataSource()
    const redirect = router.BAND_CREATE

    return BaseListComponent(path, redirect, initBandTable)
};

export default BandList;

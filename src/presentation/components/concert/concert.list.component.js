/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

import { AxiosDataSource } from "../../../framework/axios/axios.datasource";
import { RouterNavigatorDataSource } from "../../../framework/react_router/router.datasource";
import { BaseListComponent } from "../base.list.component";
import { initConcertTable } from "./ConcertTableRow";

const ConcertList = () => {
    const axiosDataSource = new AxiosDataSource()
    const path = axiosDataSource.HTTP_CONCERT_REQUEST_PATH
    const router = new RouterNavigatorDataSource()
    const redirect = router.CONCERT_CREATE

    return BaseListComponent(path, redirect, initConcertTable)
};

export default ConcertList;

/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

import { AxiosDataSource } from "../../../framework/axios/axios.datasource";
import { RouterNavigatorDataSource } from "../../../framework/react_router/router.datasource";
import { BaseListComponent } from "../base.list.component";
import { initDrawerTable } from "./DrawerTableRow";

const DrawerList = () => {
    const axiosDataSource = new AxiosDataSource()
    const path = axiosDataSource.HTTP_DRAWER_REQUEST_PATH
    const router = new RouterNavigatorDataSource()
    const redirect = router.DRAWER_CREATE

    return BaseListComponent(path, redirect, initDrawerTable)
};

export default DrawerList;

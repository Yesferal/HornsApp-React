/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

import { DrawerModel } from "../../../domain/drawer.model";
import { AxiosDataSource } from "../../../framework/axios/axios.datasource";
import { RouterNavigatorDataSource } from "../../../framework/react_router/router.datasource";
import { BaseCreateComponent } from "../base.create.component";
import { initDrawerForm } from "./DrawerForm";

const CreateDrawer = () => {
    const axiosDataSource = new AxiosDataSource()
    const path = axiosDataSource.HTTP_DRAWER_REQUEST_PATH
    const model = new DrawerModel()
    const emptyModel = model.EMPTY_MODEL
    const router = new RouterNavigatorDataSource()
    const redirect = router.DRAWER_LIST

    return BaseCreateComponent(path, emptyModel, redirect, initDrawerForm)
}

export default CreateDrawer

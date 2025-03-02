/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

import { useParams } from "react-router-dom";
import { AxiosDataSource } from "../../../framework/axios/axios.datasource";
import { RouterNavigatorDataSource } from "../../../framework/react_router/router.datasource";
import { BaseEditComponent } from "../base.edit.component";
import { DrawerModel } from "../../../domain/drawer.model";
import { initDrawerForm } from "./DrawerForm";

const EditDrawer = (props) => {
    const { id } = useParams();
    const axiosDataSource = new AxiosDataSource()
    const path = `${axiosDataSource.HTTP_DRAWER_REQUEST_PATH}/${id}`
    const model = new DrawerModel()
    const router = new RouterNavigatorDataSource()

    return BaseEditComponent(path, model.EMPTY_MODEL, router.DRAWER_LIST, initDrawerForm)
};

export default EditDrawer;

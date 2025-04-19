/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

import { AxiosDataSource } from "../../../framework/axios/axios.datasource";
import { RouterNavigatorDataSource } from "../../../framework/react_router/router.datasource";
import { BaseListComponent } from "../base.list.component";
import { initCategoryTable } from "./CategoryTableRow";

const CategoryList = () => {
    const axiosDataSource = new AxiosDataSource()
    const path = axiosDataSource.HTTP_CATEGORY_REQUEST_PATH
    const router = new RouterNavigatorDataSource()
    const redirect = router.CATEGORY_CREATE

    return BaseListComponent(path, redirect, initCategoryTable)
};

export default CategoryList;

/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

import { AxiosDataSource } from "../../../framework/axios/axios.datasource";
import { RouterNavigatorDataSource } from "../../../framework/react_router/router.datasource";
import { BaseCreateComponent } from "../base.create.component";
import CategoryModel from "../../../domain/category.model";
import { initCategoryForm } from "./CategoryForm";

const CreateCategory = () => {
    const axiosDataSource = new AxiosDataSource()
    const path = axiosDataSource.HTTP_CATEGORY_REQUEST_PATH
    const model = new CategoryModel()
    const emptyModel = model.EMPTY_MODEL
    const router = new RouterNavigatorDataSource()
    const redirect = router.CATEGORY_LIST

    return BaseCreateComponent(path, emptyModel, redirect, initCategoryForm)
}

export default CreateCategory

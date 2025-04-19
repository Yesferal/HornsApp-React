/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

import { useParams } from "react-router-dom";
import { AxiosDataSource } from "../../../framework/axios/axios.datasource";
import { RouterNavigatorDataSource } from "../../../framework/react_router/router.datasource";
import { BaseEditComponent } from "../base.edit.component";
import CategoryModel from "../../../domain/category.model";
import { initCategoryForm } from "./CategoryForm";

const EditCategory = (props) => {
    const { id } = useParams();
    const axiosDataSource = new AxiosDataSource()
    const path = `${axiosDataSource.HTTP_CATEGORY_REQUEST_PATH}/${id}`
    const model = new CategoryModel()
    const router = new RouterNavigatorDataSource()

    return BaseEditComponent(path, model.EMPTY_MODEL, router.CATEGORY_LIST, initCategoryForm)
};

export default EditCategory;

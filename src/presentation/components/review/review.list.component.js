/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

import { AxiosDataSource } from "../../../framework/axios/axios.datasource";
import { RouterNavigatorDataSource } from "../../../framework/react_router/router.datasource";
import { BaseListComponent } from "../base.list.component";
import { initReviewTable } from "./ReviewTableRow";

const ReviewList = () => {
    const axiosDataSource = new AxiosDataSource()
    const path = axiosDataSource.HTTP_REVIEW_REQUEST_PATH
    const router = new RouterNavigatorDataSource()
    const redirect = router.REVIEW_CREATE

    return BaseListComponent(path, redirect, initReviewTable)
};

export default ReviewList;

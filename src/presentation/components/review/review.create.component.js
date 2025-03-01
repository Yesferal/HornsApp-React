/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

import { AxiosDataSource } from "../../../framework/axios/axios.datasource";
import { RouterNavigatorDataSource } from "../../../framework/react_router/router.datasource";
import { BaseCreateComponent } from "../base.create.component";
import { initReviewForm } from "./ReviewForm";
import { ReviewModel } from "../../../domain/review.model"

const CreateReview = () => {
    const axiosDataSource = new AxiosDataSource()
    const path = axiosDataSource.HTTP_REVIEW_REQUEST_PATH
    const model = new ReviewModel()
    const emptyModel = model.EMPTY_MODEL
    const router = new RouterNavigatorDataSource()
    const redirect = router.REVIEW_LIST

    return BaseCreateComponent(path, emptyModel, redirect, initReviewForm)
}

export default CreateReview

/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

import { useParams } from "react-router-dom";
import { AxiosDataSource } from "../../../framework/axios/axios.datasource";
import { RouterNavigatorDataSource } from "../../../framework/react_router/router.datasource";
import { BaseEditComponent } from "../base.edit.component";
import { initReviewForm } from "./ReviewForm";
import { ReviewModel } from "../../../domain/review.model"

const EditReview = (props) => {
    const { id } = useParams();
    const axiosDataSource = new AxiosDataSource()
    const path = `${axiosDataSource.HTTP_REVIEW_REQUEST_PATH}/${id}`
    const model = new ReviewModel()
    const router = new RouterNavigatorDataSource()

    return BaseEditComponent(path, model.EMPTY_MODEL, router.REVIEW_LIST, initReviewForm)
};

export default EditReview;

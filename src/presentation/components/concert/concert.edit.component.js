/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

import { useParams } from "react-router-dom";
import { AxiosDataSource } from "../../../framework/axios/axios.datasource";
import { RouterNavigatorDataSource } from "../../../framework/react_router/router.datasource";
import { BaseEditComponent } from "../base.edit.component";
import ConcertModel from "../../../domain/concert.model";
import { initConcertForm } from "./ConcertForm";

const EditConcert = (props) => {
    const { id } = useParams();
    const axiosDataSource = new AxiosDataSource()
    const path = `${axiosDataSource.HTTP_CONCERT_REQUEST_PATH}/${id}`
    const model = new ConcertModel()
    const router = new RouterNavigatorDataSource()

    return BaseEditComponent(path, model.EMPTY_MODEL, router.CONCERT_LIST, initConcertForm)
};

export default EditConcert;

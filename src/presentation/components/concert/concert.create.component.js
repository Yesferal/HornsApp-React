/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

import ConcertModel from "../../../domain/concert.model";
import { AxiosDataSource } from "../../../framework/axios/axios.datasource";
import { RouterNavigatorDataSource } from "../../../framework/react_router/router.datasource";
import { BaseCreateComponent } from "../base.create.component";
import { initConcertForm } from "./ConcertForm";

const CreateConcert = () => {
    const axiosDataSource = new AxiosDataSource()
    const path = axiosDataSource.HTTP_CONCERT_REQUEST_PATH
    const concertModel = new ConcertModel()
    const emptyModel = concertModel.EMPTY_MODEL
    const router = new RouterNavigatorDataSource()
    const redirect = router.CONCERT_LIST

    return BaseCreateComponent(path, emptyModel, redirect, initConcertForm)
}

export default CreateConcert

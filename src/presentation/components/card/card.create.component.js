/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

import { AxiosDataSource } from "../../../framework/axios/axios.datasource";
import { RouterNavigatorDataSource } from "../../../framework/react_router/router.datasource";
import { BaseCreateComponent } from "../base.create.component";
import CardModel from "../../../domain/card.model";
import { initCardForm } from "../card/CardForm";

const CreateCard = () => {
    const axiosDataSource = new AxiosDataSource()
    const path = axiosDataSource.HTTP_CARD_REQUEST_PATH
    const model = new CardModel()
    const emptyModel = model.EMPTY_MODEL
    const router = new RouterNavigatorDataSource()
    const redirect = router.CARD_LIST

    return BaseCreateComponent(path, emptyModel, redirect, initCardForm)
}

export default CreateCard

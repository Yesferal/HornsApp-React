/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

import { useParams } from "react-router-dom";
import { AxiosDataSource } from "../../../framework/axios/axios.datasource";
import { RouterNavigatorDataSource } from "../../../framework/react_router/router.datasource";
import { BaseEditComponent } from "../base.edit.component";
import CardModel from "../../../domain/card.model";
import { initCardForm } from "../card/CardForm";

const EditCard = (props) => {
    const { id } = useParams();
    const axiosDataSource = new AxiosDataSource()
    const path = `${axiosDataSource.HTTP_CARD_REQUEST_PATH}/${id}`
    const model = new CardModel()
    const router = new RouterNavigatorDataSource()

    return BaseEditComponent(path, model.EMPTY_MODEL, router.CARD_LIST, initCardForm)
};

export default EditCard;

/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

import { AxiosDataSource } from "../../../framework/axios/axios.datasource";
import { RouterNavigatorDataSource } from "../../../framework/react_router/router.datasource";
import { BaseListComponent } from "../base.list.component";
import { initCardTable } from "../card/CardTableRow";

const CardList = () => {
    const axiosDataSource = new AxiosDataSource()
    const path = axiosDataSource.HTTP_CARD_REQUEST_PATH
    const router = new RouterNavigatorDataSource()
    const redirect = router.CARD_CREATE

    return BaseListComponent(path, redirect, initCardTable)
};

export default CardList;

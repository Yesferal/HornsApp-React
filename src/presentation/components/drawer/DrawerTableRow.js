/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AxiosDataSource } from "../../../framework/axios/axios.datasource";
import { RouterNavigatorDataSource } from "../../../framework/react_router/router.datasource";

export function initDrawerTable(res, i) {
    return <DrawerTableRow obj={res} key={i} />
}

const DrawerTableRow =
    (props) => {
        const {
            _id,
            docVersion,
            appVersion,
            platform,
        } = props.obj;
        const axiosDataSource = new AxiosDataSource()
        const router = new RouterNavigatorDataSource()

        const deleteObject = () => {
            axiosDataSource.makeDeleteRequest(`${axiosDataSource.HTTP_DRAWER_REQUEST_PATH}/${_id}`, (response) => {
                if (response.status === 200) {
                    alert("Object successfully deleted");
                    window.location.reload();
                } else {
                    Promise.reject();
                }
            }, (error) => {
                console.log(`YESFERAL: List: error: ${error}`);
            });
        };

        return (
            <tr>
                <td>Version #{docVersion}</td>
                <td>{platform} (Build #{appVersion})</td>
                <td>
                    <Link className="edit-link"
                        to={router.DRAWER_EDIT + "/" + _id}>
                        Edit
                    </Link>
                    <Button
                        onClick={deleteObject}
                        size="sm" variant="danger">
                        Delete
                    </Button>
                </td>
            </tr>
        );
    };

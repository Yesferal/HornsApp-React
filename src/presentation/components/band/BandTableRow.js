/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AxiosDataSource } from "../../../framework/axios/axios.datasource";
import { RouterNavigatorDataSource } from "../../../framework/react_router/router.datasource";

const BandTableRow =
    (props) => {
        const {
            _id,
            name,
            genre
        } = props.obj;
        const axiosDataSource = new AxiosDataSource()
        const router = new RouterNavigatorDataSource()

        const deleteBand = () => {
            axiosDataSource.makeDeleteRequest(`${axiosDataSource.HTTP_BAND_REQUEST_PATH}/${_id}`, (response) => {
                if (response.status === 200) {
                    alert("Band successfully deleted");
                    window.location.reload();
                } else {
                    Promise.reject();
                }
            }, (error) => {
                console.log(`YESFERAL: BandList: error: ${error}`);
            });
        };

        return (
            <tr>
                <td>{name}</td>
                <td>{genre}</td>
                <td>
                    <Link className="edit-link"
                        to={router.BAND_EDIT + "/" + _id}>
                        Edit
                    </Link>
                    <Button
                        onClick={deleteBand}
                        size="sm" variant="danger">
                        Delete
                    </Button>
                </td>
            </tr>
        );
    };

export default BandTableRow;

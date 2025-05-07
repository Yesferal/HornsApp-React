/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AxiosDataSource } from "../../../framework/axios/axios.datasource";
import { RouterNavigatorDataSource } from "../../../framework/react_router/router.datasource";

export function initConcertTable(res, i) {
    return <ConcertTableRow obj={res} key={i} />
}

const ConcertTableRow =
    (props) => {
        const {
            _id,
            name,
            dateTime,
            isLiveMusicEvent,
        } = props.obj;
        const axiosDataSource = new AxiosDataSource()
        const router = new RouterNavigatorDataSource()

        const deleteObject = () => {
            axiosDataSource.makeDeleteRequest(`${axiosDataSource.HTTP_CONCERT_REQUEST_PATH}/${_id}`, (response) => {
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

        const eventTime = new Date(dateTime);
        const now = new Date()
        const hasPassed = eventTime < now;
        const backgroundColor = hasPassed ? 'red' : 'white';

        var includeHornsApp = ""
        if (isLiveMusicEvent) {
            includeHornsApp = "(*)"
        }

        return (
            <tr style={{ backgroundColor: backgroundColor, padding: '20px' }}>
                <td>{name} {includeHornsApp}</td>
                <td>{(eventTime.toLocaleDateString()) + " " + (eventTime.toLocaleTimeString())}</td>
                <td>
                    <Link className="edit-link"
                        to={router.CONCERT_EDIT + "/" + _id}>
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

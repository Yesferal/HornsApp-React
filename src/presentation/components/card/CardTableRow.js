/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AxiosDataSource } from "../../../framework/axios/axios.datasource";
import { RouterNavigatorDataSource } from "../../../framework/react_router/router.datasource";

export function initCardTable(res, i) {
    return <CardTableRow obj={res} key={i} />
}

const CardTableRow =
    (props) => {
        const {
            _id,
            key,
            data
        } = props.obj;
        const axiosDataSource = new AxiosDataSource()
        const router = new RouterNavigatorDataSource()

        const deleteObject = () => {
            axiosDataSource.makeDeleteRequest(`${axiosDataSource.HTTP_CARD_REQUEST_PATH}/${_id}`, (response) => {
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
                <td>{key}</td>
                <td>{data?.title.en} / {data?.title.es}</td>
                <td>
                    <Link className="edit-link"
                        to={router.CARD_EDIT + "/" + _id}>
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

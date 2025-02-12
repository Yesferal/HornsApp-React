/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AxiosDataSource } from "../../framework/axios/axios.datasource";
import { Button, Table } from "react-bootstrap";

export function BaseListComponent(path, redirect, initTable) {
    const axiosDataSource = new AxiosDataSource()
    const [myObjects, setMyObjects] = useState([])

    useEffect(() => {
        axiosDataSource.makeGetRequest(path, (response) => {
            setMyObjects(response.data);
        }, (error) => {
            console.log(`YESFERAL: List: error: ${error}`);
        });
    });

    const DataTable = () => {
        return myObjects.map((res, i) => {
            return initTable(res, i)
        });
    };

    const navigate = useNavigate();

    const handleCreateNavigation = () => {
        navigate(redirect);
    };

    return (
        <div className="table-wrapper">
            <Button onClick={handleCreateNavigation} className="float-right" variant="primary">
                Create
            </Button>
            <div>
                &nbsp;
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{DataTable()}</tbody>
            </Table>
        </div>
    );
}

/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
import BandTableRow from "./BandTableRow";
import { AxiosDataSource } from "../../../framework/axios/axios.datasource";
import { useNavigate } from "react-router-dom";
import { RouterNavigatorDataSource } from "../../../framework/react_router/router.datasource";

const BandList = () => {
    const [bands, setBands] = useState([])
    const axiosDataSource = new AxiosDataSource()
    const router = new RouterNavigatorDataSource()

    useEffect(() => {
        axiosDataSource.makeGetRequest(axiosDataSource.HTTP_BAND_REQUEST_PATH, (response) => {
            setBands(response.data);
        }, (error) => {
            console.log(`YESFERAL: BandList: error: ${error}`);
        });
    }, []);

    const DataTable = () => {
        return bands.map((res, i) => {
            return <BandTableRow
                obj={res} key={i} />;
        });
    };

    const navigate = useNavigate();

    const handleCreateNavigation = () => {
        navigate(router.BAND_CREATE);
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
                        <th>Genre</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{DataTable()}</tbody>
            </Table>
        </div>
    );
};

export default BandList;

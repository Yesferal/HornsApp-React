/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

import { Field } from "formik";
import { FormLabel } from "react-bootstrap";
import { FieldWithErrorMessageComponent } from "../field.with.error.message.component";
import { AxiosDataSource } from "../../../../framework/axios/axios.datasource";
import { MultiSelectComponent } from "../select/select.multi.component";
import { useEffect, useState } from "react";

export const ChildrenRenderComponent = ({
    field, // { name, value, onChange, onBlur }
    form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
}) => {
    const [eventOptions, setEventOptions] = useState([]);
    const [categoriesOptions, setCategoriesOptions] = useState([]);

    useEffect(() => {
        const axiosDataSource = new AxiosDataSource()

        axiosDataSource.makeGetRequest(axiosDataSource.HTTP_CONCERT_REQUEST_PATH, (response) => {
            setEventOptions(response.data.map((res, i) => {
                const {
                    _id,
                    name
                } = res;
                return { value: _id, label: name }
            }))
        }, (error) => {
            console.log(`YESFERAL: List: error: ${error}`);
        });

        axiosDataSource.makeGetRequest(axiosDataSource.HTTP_CATEGORY_REQUEST_PATH, (response) => {
            setCategoriesOptions(response.data.map((res, i) => {
                const {
                    _id,
                    name,
                } = res;
                return { value: _id, label: `${name?.en} / ${name?.es}` }
            }))
        }, (error) => {
            console.log(`YESFERAL: List: error: ${error}`);
        });
    }, []);

    return (
        <div>
            <FormLabel for={`Children`}>Children Section</FormLabel>
            <Field name={`${field.name}.key`} component={FieldWithErrorMessageComponent} />
            <FormLabel for={`${field.name}.filter`}>Filter</FormLabel>
            <Field
                name={`${field.name}.filter.events`}
                options={eventOptions}
                component={MultiSelectComponent}
            />
            <Field
                name={`${field.name}.filter.categories`}
                options={categoriesOptions}
                component={MultiSelectComponent}
            />
            <FormLabel for={`${field.name}.sort`}>Sort</FormLabel>
            <Field name={`${field.name}.sort`}
                options={eventOptions}
                component={MultiSelectComponent} />
            <Field name={`${field.name}.take`} component={FieldWithErrorMessageComponent} />
        </div>
    )
};

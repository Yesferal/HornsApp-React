/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import {
    Formik, Form,
    Field
} from "formik";
import {
    FormGroup, Button, FormLabel
} from "react-bootstrap";
import { ArrayCategoryRenderComponent } from "../common/render/array.category.render.component";
import { AxiosDataSource } from "../../../framework/axios/axios.datasource";
import { MultiSelectObjectComponent } from "../common/select/select.multi.object.component";
import { FieldWithErrorMessageComponent } from "../common/field.with.error.message.component";

export function initDrawerForm(formValues, onSubmit, title) {
    return (
        <DrawerForm initialValues={formValues}
            onSubmit={onSubmit}
            enableReinitialize>
            {title}
        </DrawerForm>
    )
}

const DrawerForm = (props) => {

    const validationSchema =
        Yup.object().shape({
            platform: Yup.string().required("Required"),
            appId: Yup.string().required("Required"),
            docVersion: Yup.number().required("Required"),
            appVersion: Yup.number().required("Required"),
            screens: Yup.array(),
            categories: Yup.array(),
        });

    const [screensOptions, setScreensOptions] = useState([]);
    const [categoriesOptions, setCategoriesOptions] = useState([]);

    useEffect(() => {
        const axiosDataSource = new AxiosDataSource()

        axiosDataSource.makeGetRequest(axiosDataSource.HTTP_REVIEW_REQUEST_PATH, (response) => {
            setScreensOptions(response.data.map((res, i) => {
                const {
                    key,
                    title,
                } = res;
                return { value: res, label: `${key}: ${title?.en} / ${title?.es}` }
            }))
        }, (error) => {
            console.log(`YESFERAL: List: error: ${error}`);
        });

        axiosDataSource.makeGetRequest(axiosDataSource.HTTP_CATEGORY_REQUEST_PATH, (response) => {
            setCategoriesOptions(response.data.map((res, i) => {
                const {
                    key,
                    name,
                } = res;
                return { value: res, label: `${key}: ${name?.en} / ${name?.es}` }
            }))
        }, (error) => {
            console.log(`YESFERAL: List: error: ${error}`);
        });
    }, []);

    return (
        <div className="form-wrapper">
            <Formik {...props}
                validationSchema={validationSchema}>
                {({ values }) => (
                    <Form>
                        <Field name="platform" component={FieldWithErrorMessageComponent} />
                        <Field name="appId" component={FieldWithErrorMessageComponent} />
                        <Field name="docVersion" component={FieldWithErrorMessageComponent} />
                        <Field name="appVersion" component={FieldWithErrorMessageComponent} />
                        <FormGroup>
                            <FormLabel for="screens">Screens</FormLabel>
                            <Field name="screens" component={MultiSelectObjectComponent} options={screensOptions} />
                        </FormGroup>
                        <FormGroup>
                            <hr />
                            <FormLabel for="categories">Categories</FormLabel>
                            <Field name="categories" component={MultiSelectObjectComponent} options={categoriesOptions} />
                        </FormGroup>
                        <div>
                            &nbsp;
                        </div>
                        <Button variant="danger" size="lg"
                            block="block" type="submit">
                            {props.children}
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default DrawerForm;

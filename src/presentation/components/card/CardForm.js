/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

import * as Yup from "yup";
import {
    Formik, Form,
    Field,
    ErrorMessage,
} from "formik";
import {
    Button,
    FormGroup,
    FormLabel
} from "react-bootstrap";
import { SingleSelectComponent } from "../common/select/select.single.component";
import { DataRenderComponent } from "../common/render/data.render.component";
import { NavigationRenderComponent } from "../common/render/navigation.render.component";

export function initCardForm(formValues, onSubmit, title) {
    return (
        <CardForm initialValues={formValues}
            onSubmit={onSubmit}
            enableReinitialize>
            {title}
        </CardForm>
    )
}

const CardForm = (props) => {
    const validationSchema =
        Yup.object().shape({
            key: Yup.string().required("Required"),
            data: Yup.object().shape({
                title: Yup.object().shape({
                    en: Yup.string().nullable(),
                    es: Yup.string()
                }),
                subtitle: Yup.object().shape({
                    en: Yup.string().nullable(),
                    es: Yup.string()
                }),
                icon: Yup.string(),
                imageUrl: Yup.string()
            }),
            navigation: Yup.object().shape({
                key: Yup.string(),
            }),
        });

    const viewsOptions = [
        { value: 'CARD_VIEW', label: 'Card View' }
    ]

    return (
        <div className="form-wrapper">
            <Formik {...props}
                validationSchema={validationSchema}>
                <Form>
                    <FormGroup>
                        <FormLabel for="key">Key</FormLabel>
                        <Field name="key" component={SingleSelectComponent} options={viewsOptions} />
                        <ErrorMessage
                            name="tags"
                            className="d-block 
                                invalid-feedback"
                            component="span"
                        />
                    </FormGroup>
                    <div>
                        &nbsp;
                    </div>
                    <Field name="data" component={DataRenderComponent} />
                    <div>
                        &nbsp;
                    </div>
                    <Field name="navigation" component={NavigationRenderComponent} />
                    <div>
                        &nbsp;
                    </div>
                    <Button variant="danger" size="lg"
                        block="block" type="submit">
                        {props.children}
                    </Button>
                </Form>
            </Formik>
        </div>
    );
};

export default CardForm;

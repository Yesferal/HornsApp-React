/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

import { Field } from 'formik';
import { DataRenderComponent } from './data.render.component';
import { StyleRenderComponent } from './style.render.component';
import { ChildrenRenderComponent } from './children.render.component';
import { NavigationRenderComponent } from './navigation.render.component';
import { FieldWithErrorMessageComponent } from '../field.with.error.message.component';
import { Button } from 'react-bootstrap';

export const EditViewItem = ({
    onCancel,
    field, // { name, value, onChange, onBlur }
    form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
}) => {

    return (
        <div className="edit-view-wrapper">
            <h3>Edit View Item</h3>

            <Field name={`${field.name}.key`} component={FieldWithErrorMessageComponent} />
            <div>
                &nbsp;
            </div>
            <Field name={`${field.name}.data`} component={DataRenderComponent} />
            <div>
                &nbsp;
            </div>
            <Field name={`${field.name}.style`} component={StyleRenderComponent} />
            <div>
                &nbsp;
            </div>
            <Field name={`${field.name}.children`} component={ChildrenRenderComponent} />
            <div>
                &nbsp;
            </div>
            <Field name={`${field.name}.navigation`} component={NavigationRenderComponent} />
            <div>
                &nbsp;
            </div>

            <Button type="button" variant="danger" size="lg"
                block="block" onClick={onCancel}>
                Close
                <span class="close-button">&times;</span>
            </Button>
        </div>
    );
};

/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

import { ErrorMessage, Field } from 'formik';
import { DataRenderComponent } from './data.render.component';
import { StyleRenderComponent } from './style.render.component';
import { ChildrenRenderComponent } from './children.render.component';
import { NavigationRenderComponent } from './navigation.render.component';
import { Button, FormGroup, FormLabel } from 'react-bootstrap';
import { SingleSelectComponent } from '../select/select.single.component';

export const EditViewItem = ({
    onCancel,
    field, // { name, value, onChange, onBlur }
    form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
}) => {

    const viewsOptions = [
        { value: 'ROW_VIEW', label: 'Row View' },
        { value: 'COLUMN_VIEW', label: 'Column View' },
        { value: 'CARD_VIEW', label: 'Card View' },
        { value: 'ICON_CARD_VIEW', label: 'Card View with Icon' },
        { value: 'AD_VIEW', label: 'Ad View' },
        { value: 'CAROUSEL_VIEW', label: 'Carousel View' },
        { value: 'TITLE_REVIEW_CARD_VIEW', label: 'Title for Screen' },
        { value: 'SUBTITLE_REVIEW_CARD_VIEW', label: 'Subtitle for Screen' },
        { value: 'DESCRIPTION_REVIEW_CARD_VIEW', label: 'Description for Screen' },
        { value: 'IMAGE_REVIEW_CARD_VIEW', label: 'Image for Screen' },
        { value: 'BUTTON_CARD_VIEW', label: 'Button for Screen' },
        { value: 'VISIBILITY_GONE_CARD_VIEW', label: 'Invisible Card' },
    ]

    return (
        <div className="edit-view-wrapper">
            <h3>Edit View Item</h3>
            <FormGroup>
                <FormLabel for={`${field.name}.key`}>Key</FormLabel>
                <Field name={`${field.name}.key`} component={SingleSelectComponent} options={viewsOptions} />
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

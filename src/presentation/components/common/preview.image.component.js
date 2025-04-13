/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

export const PreviewImageComponent = ({
    field, // { name, value, onChange, onBlur }
    form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
}) => {
    return (
        <div>
            <img src={field.value} alt={field.name} width="100%" />
        </div>
    )
};

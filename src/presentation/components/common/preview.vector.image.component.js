/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

export const PreviewVectorImageComponent = ({
    field, // { name, value, onChange, onBlur }
    form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
}) => {
    const images = require.context('../../../../assets', true)
    let asset = images('./ic_music_note.svg');
    if (field.value) {
        asset = images('./ic_' + field.value + '.svg');
    }

    return (
        <img src={asset} alt={field.value} width="100%" height="100%" />
    )
};

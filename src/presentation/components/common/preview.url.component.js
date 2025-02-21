/* Copyright © 2025 Yesferal Cueva. All rights reserved. */

import { useFormikContext } from "formik";
import React, { useEffect } from "react";

export const PreviewUrlComponent = (props) => {
    const {
        values: { latitude, longitude },
        touched,
        setFieldValue,
    } = useFormikContext();
    var url = `https://maps.google.com/?q=${latitude},${longitude}`

    useEffect(() => {
        if (
            latitude != null &&
            longitude != null &&
            (touched.latitude ||
            touched.longitude)
        ) {
            url = `https://maps.google.com/?q=${latitude},${longitude}`
            setFieldValue(props.name, url);
        }
    }, [longitude, latitude, setFieldValue, props.name]);

    return (
        <div>
            <a href={url}>Go to Map</a>
        </div>
    );
};

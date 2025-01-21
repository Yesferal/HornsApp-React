/* Copyright © 2024 Yesferal Cueva. All rights reserved. */

import { useNavigate } from "react-router-dom";

export class RouterDataSource {
    navigate = useNavigate();

    navigateTo(path) {
        this.navigate(path);
    }
}

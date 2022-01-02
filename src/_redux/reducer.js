import { SET_LANGUAGE } from "./actions";

/*-- 
SPDX-FileCopyrightText: © 2021 Hyun Uk Lee <as0266@naver.com>

SPDX-License-Identifier: MIT
--*/  


const initialState = {
    language: window.localStorage.getItem("language") ? window.localStorage.getItem("language") : "kor",
}

const counter = (state=initialState, action) => {
    switch(action.type) {
        case SET_LANGUAGE:
            return {
                ...state,
                language: action.language
            }
        default: 
            return state;
    }
}

export default counter;
import {LOAD} from "./actionTypes";

export const setloading = (bool) => (dispatch) => {
    dispatch({
        type: LOAD,
        payload: bool
    })
}

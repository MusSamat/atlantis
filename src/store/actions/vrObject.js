import {VR_OBJECT} from "./actionTypes";

export const setVrObject = (obj) => (dispatch) => {
    dispatch({
        type: VR_OBJECT,
        payload: obj
    })
}

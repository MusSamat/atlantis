import {OPEN_MODAL} from "./actionTypes";

export const setOpenModal = (bool) => (dispatch) => {
    dispatch({
        type: OPEN_MODAL,
        payload: bool
    })
}

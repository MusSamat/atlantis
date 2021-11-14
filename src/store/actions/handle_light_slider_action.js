import {IMAGE_INDEX, LOAD, OPEN_lIGHT_SLIDER} from "./actionTypes";

export const setOpenLightSlider = (bool) => (dispatch) => {
    dispatch({
        type: OPEN_lIGHT_SLIDER,
        payload: bool
    })
}

export const setIndex = (i) => (dispatch) => {
    dispatch({
        type: IMAGE_INDEX,
        payload: i
    })
}
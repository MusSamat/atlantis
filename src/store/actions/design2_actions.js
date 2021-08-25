import { FETCH_DESIGN2} from "./actionTypes";
import {setloading} from "./laod_action";
import AccessWithBack from "../../service/AccessWithBack";

export const getDesign2 = (id) => (dispatch) => {
    dispatch(setloading(true))
    new AccessWithBack().getData("/api/design/" + id).then(res => {
        dispatch(setloading(false))
        dispatch({
            type: FETCH_DESIGN2,
            payload: res
        })
    })
}

import { FETCH_DESIGN1} from "./actionTypes";
import {setloading} from "./laod_action";
import AccessWithBack from "../../service/AccessWithBack";

export const getDesign1 = (id) => (dispatch) => {
    dispatch(setloading(true))
    new AccessWithBack().getData("/api/design/" + id).then(res => {
        dispatch(setloading(false))
        dispatch({
            type: FETCH_DESIGN1,
            payload: res
        })
    })
}

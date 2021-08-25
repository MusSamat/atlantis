import {FETCH_ARCHITECTUREITEMS2} from "./actionTypes";
import {setloading} from "./laod_action";
import AccessWithBack from "../../service/AccessWithBack";

export const getArchitecture2 = (id) => (dispatch) => {
    dispatch(setloading(true))
    new AccessWithBack().getData("/api/architecture/" + id).then(res => {
        dispatch(setloading(false))
        dispatch({
            type: FETCH_ARCHITECTUREITEMS2,
            payload: res
        })
    })
}

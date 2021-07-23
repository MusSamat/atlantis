import AccessWithBack from "./AccessWithBack";
import {toast} from "react-toastify";

export const  setBackCall = (name, phoneNumber) => (dispatch) => {
    let body = JSON.stringify(
        {
            name: name,
            phone: phoneNumber,
        }
    )
    new AccessWithBack().setData("/api/backcall/", body).then(() => {
        document.getElementById('nameInput').value=" "
        toast.success("Ваша команда успешно выполнено!")
    })
}
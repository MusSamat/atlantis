import React, {useState} from "react";
import Modal from "react-modal";
import VrImage from "../vr_image/VrImage";
import "./../vr_image/_vr_image.css"
import {useDispatch, useSelector} from "react-redux";
import {setOpenModal} from "../../store/actions/_openModal";

const ModalVr = (props) => {
    const obj = props.obj
    const dispatch = useDispatch()
    const openModal = useSelector(state => state.openModal.openModal)
    return(
        <div>
            <Modal isOpen={openModal} className="modalWindow">
                <VrImage
                    obj={obj}
                />
                <i className="fa fa-close fa-2x closeModal" onClick={() => dispatch(setOpenModal(false)) }></i>
            </Modal>
        </div>
    )
}

export default ModalVr
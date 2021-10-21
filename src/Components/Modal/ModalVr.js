import React, {useState} from "react";
import {Modal} from "antd";
import 'antd/dist/antd.css';
import VrImage from "../vr_image/VrImage";
import "./../vr_image/_vr_image.css"
import {useDispatch, useSelector} from "react-redux";
import {setOpenModal} from "../../store/actions/_openModal";


const ModalVr = (props) => {
    const obj = props.obj
    const dispatch = useDispatch()
    const openModal = useSelector(state => state.openModal.openModal)
    console.log(openModal)
    return(
        <div>
                <Modal
                    bodyStyle={{ height: "598px",
                        padding: 0,
                        border: "1px solid white"
                    }}
                           centered
                           visible={openModal}
                           onOk={() => dispatch(setOpenModal(false))}
                           onCancel={() => dispatch(setOpenModal(false))}
                           width={898}
                            footer={null}
            >
                <VrImage
                    obj={obj}
                />
                {/*<i className="fa fa-close fa-2x closeModal" onClick={() => dispatch(setOpenModal(false)) }></i>*/}
            </Modal>
        </div>
    )
}

export default ModalVr
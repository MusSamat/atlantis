import React, {useState} from "react";
import 'antd/dist/antd.css';
import {Modal} from "antd";
import VrImage from "../vr_image/VrImage";
import "./../vr_image/_vr_image.css"
import {useDispatch, useSelector} from "react-redux";
import {setOpenModal} from "../../store/actions/vrObject";


const ModalVr = (props) => {
    const obj = props.obj
    const dispatch = useDispatch()
    const openModal = useSelector(state => state.openModal.openModal)
    console.log(openModal)
    return(
        <div>
            <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog"
                 aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" >
                    <div className="modal-content" style={{width: 900, height: 700, margin: "100px auto"}}>
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body" style={{padding: 1}}>
                            <VrImage/>
                        </div>
                    </div>
                </div>
            </div>
            {/*    <Modal*/}
            {/*        bodyStyle={{ height: "598px",*/}
            {/*            padding: 0,*/}
            {/*            border: "1px solid white",*/}
            {/*        }}*/}
            {/*               centered*/}
            {/*               visible={openModal}*/}
            {/*               onCancel={() => dispatch(setOpenModal(false))}*/}
            {/*               width={898}*/}
            {/*                footer={null}*/}
            {/*>*/}
            {/*    <VrImage*/}
            {/*        obj={obj}*/}
            {/*    />*/}
            {/*    /!*<i className="fa fa-close fa-2x closeModal" onClick={() => dispatch(setOpenModal(false)) }></i>*!/*/}
            {/*</Modal>*/}
        </div>
    )
}

export default ModalVr
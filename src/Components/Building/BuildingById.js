import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import BackCall from "../BackCall/BackCall";
import {setloading} from "../../store/actions/laod_action";
import AccessWithBack from "../../service/AccessWithBack";
import "./building.css"
import Gallery from "../Gallery/Gallery";
import ObjectInfo from "../ObjectInfo";
import {toast} from "react-toastify";


const BuildingById = (props) => {
    const apiImage = new AccessWithBack()._apiBase
    const id = parseInt(props.match.params.id)
    const [object, setObject] = useState([])
    const dispatch = useDispatch()
    const getArchitectureById = () => {
        dispatch(setloading(true))
        new AccessWithBack().getData("/api/building/" + id).then(res => {
            dispatch(setloading(false))
            setObject(res)
        })
    }

    function copy() {
        const el = document.createElement('input');
        el.value = window.location.href;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        toast.success("Ссылка скопировано")
    }

    useEffect(() => {
        getArchitectureById()
        window.scrollTo(0, 0)
    }, [])
    return (

        <>
            <div className="page">
                <div className="ArchitectureTitle">
                    {object.title}
                </div>

                <div className="description">
                    {object.description}</div>
                <div className="copyDiv">
                    <ObjectInfo
                        location={object?.address}
                        architect={object?.architect}
                        area={object?.square}
                        year={object?.year}
                    />
                    <div className="copyButton">
                        <button className="more" onClick={copy} style={{width: "4rem"}} title="Копировать ссылку"> <i className='fa fa-copy fa' style={{color: "white"}}></i></button>
                    </div>
                </div>
                <div className="row" style={{
                    marginTop: 24
                }}>
                    <div className="col-12">
                        {
                            object?.images?.filter((img, i) => i === 0 ? img : null).map((img, i) => (
                                <img src={apiImage + img} alt="atlantis kg" key={i}
                                     style={{margin: "0 auto"}}
                                />
                            ))
                        }
                    </div>
                    <div className="row">
                        {
                            object?.images?.map((img, i) => (
                                <div className="col-4 archImages">
                                    <img src={apiImage + img} alt="atlantis kg" key={i}/>
                                </div>

                            ))
                        }
                    </div>

                </div>
                {/*<div>*/}
                {/*    <div className="advantageTitle">{object.advantage}</div>*/}
                {/*    <div className="row" style={{*/}
                {/*        marginTop: 60*/}
                {/*    }}>*/}
                {/*        {*/}
                {/*            object?.icons?.map((item, i) => (*/}
                {/*                <div className="col-lg-4 col-md-2 col-sm-12" style={{*/}
                {/*                    padding: 15*/}
                {/*                }}>*/}
                {/*                    <div className="iconsImage">*/}
                {/*                        <img src={apiImage + item.images} alt="atlantis kg" key={i}*/}
                {/*                             style={{margin: "0 auto"}}*/}
                {/*                        />*/}
                {/*                    </div>*/}
                {/*                    <div className="iconTitle">*/}
                {/*                        {item.name}*/}
                {/*                    </div>*/}

                {/*                </div>*/}
                {/*            ))*/}
                {/*        }*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>


            <div style={{
                marginTop: 120
            }}>
                <Gallery/>
                <BackCall/>
            </div>


        </>
    )
}

export default BuildingById
import React, {useEffect, useState} from "react";
import "./backCall.css"
import PhoneInput from "react-phone-input-2";
import AccessWithBack from "../../service/AccessWithBack";
import {toast} from "react-toastify";

const BackCallModal = () => {

    const [showModal, setShowModal] = useState(false)
    const [name, setName] = useState(null)
    const [phoneNumber, setPhoneNumber] = useState()
    const [showError, setShowError] = useState(false)

    const setCallBack = () => {
        if( name !== null && phoneNumber.length > 11){
            let body = JSON.stringify(
                {
                    name: name,
                    phone: phoneNumber,
                }
            )
            new AccessWithBack().setData("/api/backcall/", body).then(() => {
                // document.getElementById('nameInput').value=" "
                document.getElementById('nameInput').style.border = "1px solid #253B59"
                setPhoneNumber(null)
                setShowError(false)
                toast.success("Ваша команда успешно выполнено!")
            })
        }else{
            toast.error("Проверьте в правильности")
            document.getElementById('nameInput').style.border = "1px solid red"
            setShowError(true)
            timeOver()
        }
    }

    function timeOver() {
        if(showError){
            setTimeout(() => {
                setShowError(false)
            }, 4000)
        }
    }

    useEffect(() => {
    }, [])

    return (
        <>
            {
                showModal ?
                    <div className="backCallModal">
                        <div className="backCallModalHeader">
                            <div className="backCallModalTitle">
                                <img src="/images/logo2.png" alt="atlantis kg"/>
                                <div>
                                    <i className="fa fa-times-circle fa-2x" style={{
                                        color: "white",
                                        padding: 17,
                                        cursor: "pointer",
                                        fontSize: 30
                                    }}
                                       onClick={() => setShowModal(false)}
                                    ></i>
                                </div>
                            </div>

                        </div>
                        <div className="modalText">
                            * Оставьте свои данные и мы <br/>
                            обязательно с Вами свяжемся!
                        </div>
                        <div>
                            <div className="modalInputs">
                                <div style={{
                                    display: "flex",
                                    flexDirection: "column",

                                }}>
                                    <input type="text"
                                           style={{
                                               paddingLeft: 10,
                                               fontSize: 16
                                           }}
                                           id="nameInput"
                                           placeholder="Ваше имя"
                                           onChange={(e) => setName(e.target.value)}
                                    />
                                    {
                                        showError ?
                                            <div className="errorInfo">
                                                Ошибка! Поля обязательные для заполнения.
                                            </div>
                                            : null
                                    }
                                </div>
                                <div style={{
                                    width: "100%"
                                }}>
                                    <PhoneInput
                                        country="kg"
                                        defaultCountry="kg"
                                        onlyCountries={['kg', 'kz', 'ru']}
                                        masks={{kg: '(...) ..-..-..', kz: '(....) ...-....'}}
                                        priority={{kg: 0, ru: 1, kz: 2}}
                                        value={phoneNumber}
                                        onChange={phoneNumber => setPhoneNumber(phoneNumber)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src="/svg/send.svg" alt="atlantis kg"
                                 style={{
                                     padding: 20,
                                     float: "right"
                                 }}
                                 onClick={() => setCallBack(name, phoneNumber)}
                            />
                        </div>
                    </div>
                    : null
            }
            <div className="radiowave">
                {/*to={{pathname: 'https://wa.me/996552180305'}} target="_blank"*/}
                <div className="btn-data"
                     onClick={() => setShowModal(!showModal)}
                >
                    <div className="btn-text">
                        <svg style={{
                            paddingTop: 5
                        }} width="90" height="90" viewBox="0 0 109 109" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d)">
                                <circle cx="54.5" cy="54.5" r="47.5" fill="#679ED8"/>
                            </g>
                            <path
                                d="M40.75 38.4848C40.1201 38.4848 39.516 38.7466 39.0706 39.2126C38.6252 39.6786 38.375 40.3106 38.375 40.9696V60.8481C38.375 61.5072 38.6252 62.1392 39.0706 62.6052C39.516 63.0712 40.1201 63.333 40.75 63.333H63.5168C64.7764 63.3332 65.9844 63.857 66.875 64.7891L71.625 69.7587V40.9696C71.625 40.3106 71.3748 39.6786 70.9294 39.2126C70.484 38.7466 69.8799 38.4848 69.25 38.4848H40.75ZM69.25 36C70.5098 36 71.718 36.5236 72.6088 37.4556C73.4996 38.3876 74 39.6516 74 40.9696V72.7579C74 73.0037 73.9302 73.244 73.7996 73.4483C73.6689 73.6527 73.4833 73.8119 73.2661 73.9058C73.049 73.9997 72.8101 74.0241 72.5797 73.9759C72.3493 73.9277 72.1377 73.809 71.9717 73.635L65.1959 66.5458C64.7506 66.0798 64.1466 65.8179 63.5168 65.8178H40.75C39.4902 65.8178 38.282 65.2942 37.3912 64.3622C36.5004 63.4302 36 62.1662 36 60.8481V40.9696C36 39.6516 36.5004 38.3876 37.3912 37.4556C38.282 36.5236 39.4902 36 40.75 36H69.25Z"
                                fill="white"/>
                            <path
                                d="M43.125 44.6968C43.125 44.3673 43.2501 44.0513 43.4728 43.8183C43.6955 43.5853 43.9976 43.4544 44.3125 43.4544H65.6875C66.0024 43.4544 66.3045 43.5853 66.5272 43.8183C66.7499 44.0513 66.875 44.3673 66.875 44.6968C66.875 45.0264 66.7499 45.3424 66.5272 45.5754C66.3045 45.8084 66.0024 45.9393 65.6875 45.9393H44.3125C43.9976 45.9393 43.6955 45.8084 43.4728 45.5754C43.2501 45.3424 43.125 45.0264 43.125 44.6968ZM43.125 50.9089C43.125 50.5794 43.2501 50.2634 43.4728 50.0304C43.6955 49.7974 43.9976 49.6665 44.3125 49.6665H65.6875C66.0024 49.6665 66.3045 49.7974 66.5272 50.0304C66.7499 50.2634 66.875 50.5794 66.875 50.9089C66.875 51.2384 66.7499 51.5544 66.5272 51.7874C66.3045 52.0204 66.0024 52.1513 65.6875 52.1513H44.3125C43.9976 52.1513 43.6955 52.0204 43.4728 51.7874C43.2501 51.5544 43.125 51.2384 43.125 50.9089ZM43.125 57.1209C43.125 56.7914 43.2501 56.4754 43.4728 56.2424C43.6955 56.0094 43.9976 55.8785 44.3125 55.8785H56.1875C56.5024 55.8785 56.8045 56.0094 57.0272 56.2424C57.2499 56.4754 57.375 56.7914 57.375 57.1209C57.375 57.4504 57.2499 57.7664 57.0272 57.9994C56.8045 58.2324 56.5024 58.3633 56.1875 58.3633H44.3125C43.9976 58.3633 43.6955 58.2324 43.4728 57.9994C43.2501 57.7664 43.125 57.4504 43.125 57.1209Z"
                                fill="white"/>
                            <defs>
                                <filter id="filter0_d" x="0" y="0" width="109" height="109"
                                        filterUnits="userSpaceOnUse"
                                        colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                                   values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                    <feOffset/>
                                    <feGaussianBlur stdDeviation="3.5"/>
                                    <feColorMatrix type="matrix"
                                                   values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow"
                                             result="shape"/>
                                </filter>
                            </defs>
                        </svg>
                    </div>
                    <span className="wave"></span>
                    <span className="wave"></span>
                    <span className="wave"></span>
                    <span className="wave"></span>
                </div>
            </div>
        </>

    )
}

export default BackCallModal
import React, {useState} from "react";
import {toast} from "react-toastify";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import "./backCall.css"
import AccessWithBack from "../../service/AccessWithBack";


const BackCall = () => {
    const [name, setName] = useState(null)
    const [phoneNumber, setPhoneNumber] = useState(null)
    const [showError, setShowError] = useState(false)


    function timeOver() {
        if(showError){
            setTimeout(() => {
                setShowError(false)
            }, 4000)
        }
    }

    const setCallBack = () => {
        if (name !== null && phoneNumber.length > 11) {
            let body = JSON.stringify(
                {
                    name: name,
                    phone: phoneNumber,
                }
            )
            new AccessWithBack().setData("/api/backcall/", body).then(() => {
                document.getElementById('nameInput').value = " "
                document.getElementById('nameInput').style.border = "1px solid #253B59"
                setPhoneNumber(null)
                setName(null)
                setShowError(false)
                toast.success("Ваша команда успешно выполнено!")
            })
        } else {
            toast.error("Проверьте в правильности")
            document.getElementById('nameInput').style.border = "1px solid red"
            setShowError(true)
            timeOver()
        }
    }

    return (
        <div className='page'>
            <div>
                <div className='backCall'
                     style={{
                         margin: "100px auto"
                     }}
                >
                    <div className="backCallBtn">
                        <button style={{
                            textAlign: "center",
                            paddingBottom: 66,
                        }}
                                onClick={() => setCallBack(name, phoneNumber)}
                        >
                            Заказать звонок
                        </button>
                    </div>
                    <div className="backCallInputs">
                        <div style={{
                            display: "flex",
                            flexDirection: "column",

                        }}>
                            <input type="text"
                                   style={{
                                       paddingLeft: 40,
                                       fontSize: 25
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
                            width: 450
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

            </div>
        </div>
    )
}

export default BackCall
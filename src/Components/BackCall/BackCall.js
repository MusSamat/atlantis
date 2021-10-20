import React, {useState} from "react";
import {toast} from "react-toastify";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import "./backCall.css"
import AccessWithBack from "../../service/AccessWithBack";


const BackCall = () => {
    const [name, setName] = useState()
    const [phoneNumber, setPhoneNumber] = useState()

    const setCallBack = () => {
        if( name !== null && phoneNumber.length > 11){
            let body = JSON.stringify(
                {
                    name: name,
                    phone: phoneNumber,
                }
            )
            new AccessWithBack().setData("/api/backcall/", body).then(() => {
                document.getElementById('nameInput').value=" "
                setPhoneNumber(null)
                toast.success("Ваша команда успешно выполнено!")
            })
        }else{
            toast.error("Проверьте в правильности")
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
                            textAlign:"center",
                            paddingBottom: 66,
                        }}
                            onClick={() => setCallBack(name, phoneNumber)}
                        >
                            Заказать звонок
                        </button>
                    </div>
                    <div className="backCallInputs">
                        <input type="text"
                               style={{
                                   paddingLeft: 40,
                                   fontSize: 25
                               }}
                               id="nameInput"
                               placeholder="Ваше Имя"
                               onChange={(e) =>setName(e.target.value)}

                        />
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
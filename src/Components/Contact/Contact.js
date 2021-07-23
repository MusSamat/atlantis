import React, {useEffect} from "react"
import "./Contact.css"
import Location from "./Location";
import BackCall from "../BackCall/BackCall";

const Contact = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <div className="container"
                 style={{
                     marginTop: 100,
                     marginBottom: 50,
                     padding: "15px 0"
                 }}
            >
                <div className="row">
                    <div className="col-8" style={{
                        padding: 0
                    }}>
                        <div className="contactS">
                            <div className="contactTitle">
                                Улица Фрунзе, 144а, Бишкек
                            </div>
                            <div className="contactPhone">
                                <div>
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10.8735 6.02L7.06764 1.62687C6.62889 1.12062 5.82451 1.12287 5.31489 1.63362L2.18514 4.769C1.25364 5.70162 0.987011 7.0865 1.52589 8.19687C4.74521 14.8625 10.1209 20.2457 16.782 23.4744C17.8913 24.0132 19.275 23.7466 20.2065 22.814L23.3655 19.6494C23.8774 19.1375 23.8785 18.3286 23.3678 17.8899L18.9578 14.1042C18.4965 13.7082 17.7799 13.76 17.3175 14.2235L15.783 15.7602C15.7045 15.8426 15.601 15.8969 15.4887 15.9147C15.3763 15.9326 15.2611 15.9131 15.1609 15.8592C12.6526 14.4149 10.572 12.3315 9.13089 9.82137C9.07692 9.72097 9.05737 9.60563 9.07526 9.49305C9.09314 9.38047 9.14746 9.27686 9.22989 9.19812L10.7599 7.667C11.2234 7.20125 11.274 6.48125 10.8735 6.01887V6.02Z"
                                            stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <div className="contactTels">
                                    <div>+996 709 999 915</div>
                                    <div>+996 990 330 019</div>
                                    <div>+996 778 330 019</div>
                                </div>
                            </div>
                            <div className="contactEmail">
                                atlantis@gmail.com
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <Location/>
                    </div>
                </div>
            </div>
            <BackCall/>
        </>

    )
}

export default Contact
import React from "react";
import "./footerSection.css"

const Footer = () => {
    return (
        <div className="footerSection">
            <div className="container">
                <div className="row" style={{
                    paddingTop: 30
                }}>
                    <div className="col-lg-4 col-md-4 col-sm-12 footerCol">
                        О Нас
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 footerCol">
                        Объекты
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 footerCol">
                        Контакты
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
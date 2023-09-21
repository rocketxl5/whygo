import React from 'react'
import Navbar from './Navbar'

const Header = () => {
    return (
        <div className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-12 topbar-font">
                        <div className="justify-content-center">
                            <div className="d-none d-xl-block topbar-max">
                                <i className="fas fa-map-marker-alt text-dark ml-3 mx-1"></i>
                                <a
                                    to="https://goo.gl/maps/Ntj4TUqjZZr"
                                    target="_blank"
                                    data-gtm-click-event="Header Address-link Click"
                                    className="text-dark topbar"
                                >台北市忠孝東路四段2號3樓(捷運忠孝復興站)</a>
                                <i className="fas fa-envelope text-dark ml-3 mx-1"></i>
                                <a
                                    to="mailto://info@ukus.tw"
                                    className="text-dark topbar"
                                    data-gtm-click-event="Header Email-link Click"
                                >info@ukus.tw</a>
                                <i className="fas fa-clock text-dark ml-5"></i>
                                <span className="text-dark topbar mx-1"
                                >Mon – Fri 10:00 – 22:00, Sat – Sun 10:00 – 21:30</span
                                >
                                <a
                                    to="/contact-us"
                                    className="text-dark topbar topbar-contactus ml-5"
                                    data-gtm-click-event="Header Contact-button Click"
                                >聯絡我們 Contact us</a>
                                <a
                                    to="https://zh-tw.facebook.com/www.ukus.tw/"
                                    target="_blank"
                                    rel="noreferrer noopenner"
                                    data-gtm-click-event="Header Facebook-link Click"
                                ><i className="fab fa-facebook mx-1" style={{ color: "blue" }}></i
                                ><span className="d-none">Facebook</span></a>
                                <a
                                    to="https://www.youtube.com/channel/UC37FQf27b8lZjiGTTknZNLA/featured"
                                    target="_blank"
                                    data-gtm-click-event="Header Youtube-link Click"
                                    rel="noreferrer noopenner"
                                    className="d-none"
                                >
                                    <i className="fab fa-youtube mx-1" style={{ color: "red" }}
                                    ><span className="d-none">Youtube</span></i
                                    ></a>
                                <a
                                    to="https://instagram.com/stevens_language_center?igshid=1jaxryux3fhok"
                                    target="_blank"
                                    data-gtm-click-event="Header Instagram-link Click"
                                    rel="noreferrer noopenner"
                                    className="d-none"
                                >
                                    <i className="fab fa-instagram-square mx-1" style={{ color: "rebeccapurple" }}></i
                                    ><span className="d-none">Instagram</span></a>
                                <a
                                    to="https://page.line.me/067mpmbm"
                                    target="_blank"
                                    data-gtm-click-event="Header LINE-link Click"
                                    rel="noreferrer noopenner"
                                >
                                    <i className="fab fa-line mx-1" style={{ color: "green" }}></i
                                    ><span className="d-none">LINE</span></a>
                            </div>
                        </div>
                    </div>
                    <Navbar />
                </div>
            </div>
        </div>
    )
}

export default Header


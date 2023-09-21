import React from 'react'
import logo from '../../images/steven-language-center.png'

const Navbar = () => {
    return (
        <div className="col-12 topbar-line">
            <div className="justify-content-around mt-2">
                <nav className="navbar navbar-expand-xl navbar-light">
                    <a className="navbar-brand" href="/"
                    ><img
                            src={logo}
                            width="200"
                            height="auto"
                            className="w-90 img-fluid"
                            alt="Steven's英語補習班|IELTS|TOEFL|TOEIC|SAT|商業英文"
                        /></a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse topbar-padding" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle textnone menufont hvr-underline-from-left"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    IELTS 雅思
                                </a>
                                <div className="dropdown-menu sub-nav" aria-labelledby="navbarDropdown">
                                    <a
                                        // itemprop="name"
                                        className="dropdown-item textnone submenufont"
                                        data-gtm-click-event="Header-menu IELTS-course-introduction Click"
                                        href="/ielts"
                                        title="IELTS雅思課程介紹"
                                    // itemprop="url"
                                    >課程介紹
                                    </a>
                                    <a
                                        // itemprop="name"
                                        className="dropdown-item textnone submenufont"
                                        href="/ielts/test-intro"
                                        data-gtm-click-event="Header-menu IELTS-exam-introduction Click"
                                        title="IELTS雅思課程介紹"
                                    // itemprop="url"
                                    >雅思考試介紹
                                    </a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle textnone menufont hvr-underline-from-left"
                                    href="#"
                                    id="navbarDropdown2"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    TOEFL 托福
                                </a>
                                <div className="dropdown-menu sub-nav" aria-labelledby="navbarDropdown2">
                                    <a
                                        // itemprop="name"
                                        className="dropdown-item textnone submenufont"
                                        data-gtm-click-event="Header-menu TOEFL-course-introduction Click"
                                        href="/toefl"
                                        title="TOEFL托福課程介紹"
                                    // itemprop="url"
                                    >課程介紹
                                    </a>
                                    <a
                                        // itemprop="name"
                                        className="dropdown-item textnone submenufont"
                                        href="/toefl/test-intro"
                                        data-gtm-click-event="Header-menu TOEFL-exam-introduction Click"
                                        title="TOEFL托福課程介紹"
                                    // itemprop="url"
                                    >托福考試介紹
                                    </a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a
                                    // itemprop="name"
                                    className="nav-link textnone menufont hvr-underline-from-left"
                                    data-gtm-click-event="Header-menu SAT-introduction Click"
                                    href="/sat"
                                    title="SAT"
                                // itemprop="url"
                                >SAT
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    // itemprop="name"
                                    className="nav-link textnone menufont hvr-underline-from-left"
                                    data-gtm-click-event="Header-menu Business-english-introduction Click"
                                    // itemprop="name"
                                    href="/business-english"
                                    title="商業英文"
                                // itemprop="url"
                                >商業英文
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle textnone menufont hvr-underline-from-left"
                                    href="#"
                                    id="navbarDropdown3"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    其他課程
                                </a>
                                <div className="dropdown-menu sub-nav" aria-labelledby="navbarDropdown3">
                                    <a
                                        data-gtm-click-event="Header-menu TOEIC-introduction Click"
                                        // itemprop="name"
                                        className="dropdown-item textnone submenufont"
                                        href="/toeic"
                                    >TOEIC 多益</a
                                    >
                                    <a
                                        data-gtm-click-event="Header-menu Grammar-class-introduction Click"
                                        // itemprop="name"
                                        className="dropdown-item textnone submenufont"
                                        href="/grammarclass"
                                        title="英文文法與字彙課"
                                    // itemprop="url"
                                    >英文文法與字彙課</a>
                                    <a
                                        data-gtm-click-event="Header-menu Academic-writing-introduction Click"
                                        // itemprop="name"
                                        className="dropdown-item textnone submenufont"
                                        href="/academic-writing"
                                        title="學術寫作課"
                                    // itemprop="url"
                                    >學術寫作課</a>
                                    <a
                                        data-gtm-click-event="Header-menu Conversation-introduction Click"
                                        // itemprop="name"
                                        className="dropdown-item textnone submenufont"
                                        href="/conversation"
                                        title="英文會話課"
                                    >英文會話課</a>
                                    <a
                                        data-gtm-click-event="Header-menu Pre-MA-introduction Click"
                                        // itemprop="name"
                                        className="dropdown-item textnone submenufont"
                                        href="/pre-ma"
                                        title="PreMA"
                                    // itemprop="url"
                                    >Pre MA</a
                                    >
                                    <a
                                        data-gtm-click-event="Header-menu Pre-MBA-introduction Click"
                                        // itemprop="name"
                                        className="dropdown-item textnone submenufont"
                                        href="/pre-mba"
                                        title="PreMBA"
                                    // itemprop="url"
                                    >Pre MBA</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a
                                    // itemprop="name"
                                    className="nav-link textnone menufont hvr-underline-from-left"
                                    data-gtm-click-event="Header-menu Agency-service-introduction Click"
                                    href="/agency-service"
                                    title="留遊學代辦"
                                // itemprop="url"
                                >留遊學代辦</a>
                            </li>
                            <li itemProp={"name"} className="nav-item">
                                <a
                                    className="nav-link textnone menufont hvr-underline-from-left"
                                    href="/testimonials"
                                    data-gtm-click-event="Header-menu Testimonial Click"
                                    title="學員見證"
                                // itemprop="url"
                                >學員見證</a>
                            </li>
                            <li className="nav-item">
                                <a
                                    // itemprop="name"
                                    className="nav-link textnone menufont hvr-underline-from-left"
                                    data-gtm-click-event="Header-menu About-steven's Click"
                                    href="/about-steven"
                                    title="關於Steven's英語"
                                // itemprop="url"
                                >關於Steven's英語
                                </a>
                            </li>

                            <hr />

                            <li className="nav-item">
                                <div className="nav-link textnone menufont">
                                    <i className="fas fa-phone-alt color-orange" style={{ width: "1.2em" }}></i>
                                    <a
                                        href="tel:0227710088"
                                        className="color-orange"
                                        data-gtm-click-event="Header-munu Phone Click"
                                    >(02)2771-0088</a>
                                </div>
                            </li>

                            <div className="d-flex flex-column d-xl-none text-left">
                                <div id="address" className="nav-link textnone menufont">
                                    <i
                                        className="fas fa-map-marker-alt text-secondary"
                                        style={{ width: "1.2em" }}
                                    ></i>
                                    <a
                                        href="https://goo.gl/maps/Ntj4TUqjZZr"
                                        target="_blank"
                                        data-gtm-click-event="Header Address-link Click"
                                        rel="noreferrer noopenner"
                                        className="text-secondary"
                                    >台北市忠孝東路四段2號3樓<span className="n_address"
                                    >(捷運忠孝復興站)</span
                                        ></a
                                    >
                                </div>
                                <div id="openhour" className="nav-link textnone menufont">
                                    <i className="fas fa-clock text-secondary" style={{ width: "1.2em" }}></i>
                                    <span className="text-secondary"
                                    >Mon – Fri 10:00 – 22:00,
                                        <span className="hour"> Sat – Sun 10:00 – 21:30 </span></span
                                    >
                                </div>
                                <div className="nav-link textnone menufont">
                                    <i className="fas fa-envelope text-secondary" style={{ width: "1.2em" }}></i>
                                    <a
                                        href="mailto://info@ukus.tw"
                                        className="text-secondary m1-2"
                                        data-gtm-click-event="Header Email-link Click"
                                    >info@ukus.tw</a
                                    >
                                </div>
                                <hr />
                                <div className="nav-link textnone menufont">
                                    <a
                                        href="/contact-us"
                                        className="text-secondary"
                                        data-gtm-click-event="Header Contact-button Click"
                                    >聯絡我們 Contact us</a
                                    >
                                    <a
                                        data-gtm-click-event="Header Facebook-link Click"
                                        href="https://zh-tw.facebook.com/www.ukus.tw/"
                                        target="_blank"
                                    ><i
                                        className="fab fa-facebook ml-2"
                                        style={{
                                            fontSize: "20px", color: "blue"
                                        }}
                                    ></i
                                        ><span className="d-none">Facebook</span></a
                                    >
                                    <a
                                        data-gtm-click-event="Header Youtube-link Click"
                                        href="https://www.youtube.com/channel/UC37FQf27b8lZjiGTTknZNLA/featured"
                                        target="_blank"
                                        className="d-none"
                                    >
                                        <i
                                            className="fab fa-youtube ml-2"
                                            style={{
                                                fontSize: "20px", color: "red"
                                            }}
                                        ></i
                                        ><span className="d-none">Youtube</span></a
                                    >
                                    <a
                                        data-gtm-click-event="Header Instagram-link Click"
                                        href="https://instagram.com/stevens_language_center?igshid=1jaxryux3fhok"
                                        target="_blank"
                                        className="d-none"
                                    >
                                        <i
                                            className="fab fa-instagram-square ml-2"
                                            style={{
                                                fontSize: "20px", color: "rebeccapurple"
                                            }}
                                        ></i
                                        ><span className="d-none">Instagram</span></a
                                    >
                                    <a
                                        href="https://page.line.me/067mpmbm"
                                        target="_blank"
                                        data-gtm-click-event="Header LINE-link Click"
                                        rel="noreferrer noopenner"
                                    >
                                        <i
                                            className="fab fa-line mx-1"
                                            style={{
                                                fontSize: "20px", color: "green"
                                            }}
                                        ></i
                                        ><span className="d-none">LINE</span></a
                                    >
                                </div>
                            </div>
                        </ul >
                    </div >
                </nav >
            </div >
        </div>
    )
}

export default Navbar

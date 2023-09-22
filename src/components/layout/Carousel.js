import React from 'react'
import banner from '../../images/landing_page_im_02.jpg'

const Carousel = () => {
    return (
        <div className="container-fluid">
            <div id="carouselBanners" className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide active position-relative">
                        <img
                            className="d-block img-fluid"
                            src={banner}
                            alt="Welcome - Steven's英語補習班"
                            title="Welcome - Steven's英語補習班"
                            loading="lazy"
                        />
                        <div className="bannar-1">
                            <p className="ind-banner1-caption uppercase">reach your goal</p>
                        </div>
                    </div>
                    {/* <div className="swiper-slide position-relative">
                        <img
                            className="d-block img-fluid"
                            src="/public/images/daydreaming.jpg"
                            alt="Grammar - Steven's英語補習班"
                            title="Grammar - Steven's英語補習班"
                            loading="lazy"
                        />
                        <div className="bannar-2">
                            <p className="ind-banner2-caption">還在使用中式英文?<br />時態、詞性還傻傻分不清楚?</p>
                            <p className="ind-banner2-subcaption">文法班一次釐清你的錯誤觀念</p>
                        </div>
                    </div>
                    <div className="swiper-slide position-relative">
                        <img
                            className="d-block img-fluid"
                            src="/public/images/agreement.jpg"
                            alt="English Skills - Steven's英語補習班"
                            title="English Skills - Steven's英語補習班"
                            loading="lazy"
                        />
                        <div className="bannar-3">
                            <p className="ind-banner3-caption text-shadow">
                                Steven's英語提供您<br />現學現用的的美語實用技巧，<br />
                                讓您輕鬆用英文從事商業行為。
                            </p>
                        </div>
                    </div>
                    <div className="swiper-slide position-relative">
                        <img
                            className="d-block img-fluid"
                            src="/public/images/adventure-casual-cheerful-541518.jpg"
                            alt="Studying Abroad - Steven's英語補習班"
                            title="Studying Abroad - Steven's英語補習班"
                            loading="lazy"
                        />
                        <div className="bannar-4">
                            <p className="ind-banner4-caption">想要出國留遊學?<br />我們的顧問會幫學生找到最好的學校。</p>
                        </div>
                    </div> */}
                </div>

                <div className="swiper-pagination"></div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </div>
        </div>
    )
}

export default Carousel

import style from './style.module.css'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper'
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

export default function Clients() {
    return (
        <div className={style.clients} id="testimoni">
            <div className={style.clients_section}>
                <div>
                    <h1>
                        Customer Say's <br />
                        About <u>Us</u>
                    </h1>
                    <p>Au et repellet qui alias asperiores llet qui alias as llet qui alias as llet qui alias as </p>
                </div>
                <div>
                    <Swiper className={style.MySwiper} spaceBetween={30} centeredSlides={true} loop={true} autoplay={{ delay: 2500, disableOnInteraction: false }} pagination={{ clickable: true }} navigation={false} modules={[Autoplay,Pagination,Navigation]} >
                        <SwiperSlide className={style.swiper_slide}>
                            <div className={style.client_says}>
                                <h1>“</h1>
                                <p>Au et repellet qui alias asperiores llet qui alias as llet qui alias as llet qui alias as u et repellet qui alia </p>
                            </div>
                            <div className={style.avatar}>
                                <div className={style.avatar_img}>
                                    <img src="/img/avatar.png" />
                                </div>
                                <p>Camilo - Founder</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={style.swiper_slide}>
                            <div className={style.client_says}>
                                <h1>“</h1>
                                <p>Au et repellet qui alias asperiores llet qui alias as llet qui alias as llet qui alias as u et repellet qui alia </p>
                            </div>
                            <div className={style.avatar}>
                                <div className={style.avatar_img}>
                                    <img src="/img/avatar2.png" />
                                </div>
                                <p>Zoe Edzka - Designer</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

            </div>

        </div>
    )
}

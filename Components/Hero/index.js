import Button from '../Button'
import style from './style.module.css'
import Image from 'next/image'

export default function Hero() {
    return (
        <div>
            <div className={style.hero} >
                <div className={style.col_1}>
                    <div>
                        <h1>
                            We Help You<br/>
                            Clean Your Air Ducts<br/>
                            <u>House</u>
                        </h1>
                        <Button text="Start Now"/>
                    </div>
                </div>
                <div className={style.col_2}>
                    <div>
                        <Image src="/img/img2.jpg" alt="Airduct Logo" width={280} height={170} />
                        <Image src="/img/img3.jpg" alt="Airduct Logo" width={280} height={170} />
                    </div>
                        <Image src="/img/img1.jpg" alt="Airduct Logo" width={590} height={237} />
                </div>
            </div>
        </div>
    )
}
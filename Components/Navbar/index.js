import style from './style.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { AppBar } from '@material-ui/core';

export default function Navbar() {

    const [offCanvas, setOffCanvas] = useState(false)
    const [show, setShow] = useState(false); 

    const hideHeader = () => {
        if (window.scrollY > 66) {
            setShow(true);
        } else {
            setShow(false);
        }
    }
 
    useEffect(() => { 
        window.addEventListener("scroll",hideHeader);
        return () => {
            window.removeEventListener("scroll",hideHeader);
        }
    }, [])

    return (
        <>
            <AppBar className={`${style.navbar} ${show ? style.show : ""}`}>
            <nav elevation={0} className={style.nav}>
                {/* <a href="">Air Duct Cleaning</a> */}
                <Image src="/img/logo.png" alt="Airduct Logo" width={100} height={100}/>                            
                <div id="icon-menu">
                    <i style={{ cursor: "pointer", color: "black" }} onClick={() => setOffCanvas(!offCanvas)} className={`${style.icon} ${offCanvas ? style.active : ""}`}><i class="fa-solid fa-bars"></i></i>
                </div>
            </nav>
            </AppBar>
            <div className={`${style.canvas_menu} ${offCanvas ? style.active : ""}`}>
{/*                 <div className={style.close_icon}>
                    <i onClick={() => setOffCanvas(false)} className="fa-solid fa-xmark"></i>
                </div> */}
                <div className={style.canvas_content}>
                    <div className={style.social}>
                        <h4>Social</h4>
                        <div>
                            <p><i onClick={() => setOffCanvas(!offCanvas)}  class="fa-brands fa-instagram"></i><span onClick={() => setOffCanvas(!offCanvas)} >&nbsp; Instagram</span></p>
                            <p><i onClick={() => setOffCanvas(!offCanvas)} class="fa-brands fa-twitter-square"></i><span onClick={() => setOffCanvas(!offCanvas)}>&nbsp; Twitter</span></p>
                            <p><i onClick={() => setOffCanvas(!offCanvas)} class="fa-brands fa-youtube"></i><span onClick={() => setOffCanvas(!offCanvas)}>&nbsp; Youtube</span></p>
                            <p><i onClick={() => setOffCanvas(!offCanvas)} class="fa-brands fa-facebook-f"></i><span onClick={() => setOffCanvas(!offCanvas)}>&nbsp; Facebook</span></p>
                            <p><i onClick={() => setOffCanvas(!offCanvas)} class="fa-brands fa-linkedin"></i><span onClick={() => setOffCanvas(!offCanvas)}>&nbsp; Linkedin</span></p>
                            <p><i onClick={() => setOffCanvas(!offCanvas)} class="fa-brands fa-dribbble"></i><span onClick={() => setOffCanvas(!offCanvas)}>&nbsp; Dribble</span></p>
                        </div>
                    </div>
                    <div className={style.menu}>
                        <h4>Menu</h4>
                        <p style={{marginTop: 0}}><a onClick={() => setOffCanvas(!offCanvas)} href="#home">Home</a></p>
                        <p><a onClick={() => setOffCanvas(!offCanvas)} href="#featured">Featured</a></p>
                        <p><a onClick={() => setOffCanvas(!offCanvas)} href="#projects">Projects</a></p>
                        <p><a onClick={() => setOffCanvas(!offCanvas)} href="#contact us">Contact Us</a></p>
                    </div>
                </div>
                <div className={style.email}>
                    <p>Get in touch</p>
                    <h2><u>info@airductscleaning.com</u></h2>
                </div>
            </div>
        </>
    )
}

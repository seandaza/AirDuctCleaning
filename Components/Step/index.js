import style from './style.module.css'
import Image from 'next/image'
import { useState } from 'react'
import Button from '../Button'

export default function Step() {

    const [appState, changeState] = useState({
        activeObject: null,
        objects: [
            {
                id: 1,
                image: <i class="fa-solid fa-pen-to-square"></i>,
                image_active: "edit_active.svg",
                text: "Agenda una Visita",
            },
            {
                id: 2,
                image: <i class="fa-solid fa-hand-fist"></i>,
                image_active: "edit_active.svg",
                text: "Clean your Air Duct",
            },
            {
                id: 3,
                image: <i class="fa-solid fa-hand-sparkles"></i>,
                image_active: "edit_active.svg",
                text: "Ready and Clean",
            },
        ]
    })

    function toggleActive(key) {
        changeState({
            ...appState,
            activeObject: appState.objects[key]
        }) 
    }

    const [firstItemActive, setFirstItemActive] = useState(true)

    return (
        <div className={style.step}>
            <div>
                <Image src="/img/step-1.png" alt="Step 1" width={575} height={710} />
            </div>
            <div>
                <h1 style={{margin:0}}>
                    Simple <u>Step, </u><br/>
                    Big <u>Move</u>
                </h1>
                <p>
                    AutenticoLorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim 
                    veniam, quis nostrud exercita.
                </p>
                <div className={style.box_steps}>
                    {appState.objects.map((item, key) => (
                        <div className={` ${style.box} ${appState.objects[key]==appState.activeObject ? style.active : "" } ${(key==0 ? `${firstItemActive ? style.active: ""  }`: "" )} `} onMouseOver={()=>{toggleActive(key); setFirstItemActive(false)}} key={key}>
                        {item.image}
                        <p>{item.text}</p>
                        </div>
                    )
                    )}
   
                </div>
                <Button text="Contact US" />
            </div>
        </div>
    )
}
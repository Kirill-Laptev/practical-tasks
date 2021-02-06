import React from 'react'
import s from './Message.module.css'

type PropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

const Message: React.FC<PropsType> = (props) => {
    return (
        <div className={s.message__wrapper}>
          <div className={s.message__inner}>
            <div className={s.message__img}><img src={props.avatar} alt='' /></div>
            <div className={s.message__body}>
                <div className={s.message__username}>{props.name}</div>
                <div className={s.message__content}>
                    <div className={s.message__text}>{props.message}</div>
                    <div className={s.message__time}>{props.time}</div>
                </div>
            </div>
        </div>  
        </div>
    )
}

export default Message

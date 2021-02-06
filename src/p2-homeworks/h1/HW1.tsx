import React from 'react'
import Message from './Message'

const messageData = {
    avatar: 'https://i.ibb.co/9G91VtG/dev.jpg',
    name: 'Artem',
    message: 'Yarn run start',
    time: '22:00',
}

const HW1 = () => {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
               avatar={messageData.avatar}
               name={messageData.name}
               message={messageData.message}
               time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1

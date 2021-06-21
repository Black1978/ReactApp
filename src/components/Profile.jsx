import React from 'react'
import london from '../img/london-panorama.jpg'
import './Profile.css'


const Profile = () => {
    return (
        <div className='content'>
        <img src={london}>

        </img>
        <div>
            Ava + description
    </div>
        <div>
            Мои сообщения
    </div>
        <div>
            Новые сообщения
    </div>
        <div>
            <div>Сообщение 1</div>
            <div>Сообщение 2</div>
            <div>Сообщение 3</div>
            <div>Сообщение 4</div>
            <div>Сообщение 5</div>
        </div>
    </div>
    )
}
export default Profile
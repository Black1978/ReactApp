import React from 'react'
import './Nav.css'

const Nav = () => {
    return (
        <nav className='nav'>
            <div>
                <a>Профайл</a>
            </div>
            <div>
                <a>Сообщения</a>
            </div>
            <div>
                <a>Новости</a>
            </div>
            <div>
                <a>Настройки</a>
            </div>
        </nav>
    )
}

export default Nav

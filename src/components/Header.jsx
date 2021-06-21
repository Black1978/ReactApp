import react from 'react'
import english from '../img/english.svg'
import './Header.css'

const Header = () => {
    return (
        <header className='header'>
            <div className='logo'>
                <img src={english}></img>
            </div>
        </header>
    )
}

export default Header
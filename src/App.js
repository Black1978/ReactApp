import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Nav from './components/Nav.jsx'
import Profile from './components/Profile.jsx'

function App() {
    return (
        <div className='app-wrapper'>
            <Header />
            <Nav />
            <Profile />
            <Footer />
        </div>
    )
}

export default App

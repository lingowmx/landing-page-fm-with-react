import logo from '../assets/images/logo.svg'
import { Navbar } from './Navbar.jsx'

export const Header = () => {
  return (
    <header className='absolute w-full px-6 pt-8 flex place-content-between font-Barlow'>
        <img src={logo} alt="logo" />
        <Navbar />
    </header>
  )
}

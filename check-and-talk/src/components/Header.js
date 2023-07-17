import Logo from '../assets/CaT_Logo.svg';
import TextLogo from '../assets/CaT_TextLogo.svg';
import Logout from '../assets/Logout.svg';
import './Header.css'

function Header() {
    
    return (
        <div className='Header'>
            <div className='Header-logo'>
                <div className='Logo'><img src={Logo} alt='logo'></img></div>
                <div className='TextLogo'><img src={TextLogo} alt='text-logo'></img></div>
            </div>
            <div className='Sellect-tab'>
                <div className='Check'>
                    Check
                </div>
                <div className='Talk'>
                    Talk
                </div>
            </div>
            <div className='Logout'>
                <div className='Logout-img'>
                    <img src={Logout} alt='logout'></img>
                </div>
                <div className='Logout-text'>
                    로그아웃
                </div>
            </div>
        </div>
    )
}

export default Header;
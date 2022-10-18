import { Link, NavLink } from 'react-router-dom'
import './Sidebar.scss'
import ProIcon from '../assets/images/reshot-icon-professional-employee.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faSkype } from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => (
    <div className='nav-bar'>
        <Link className="logo" to="/">
            <img src={ProIcon} alt="logo" />
            {/* <img className="sub-logo" src={LogoSubtitle} alt="slobodan" /> */}
        </Link>
        <nav>
            <NavLink exact="true" activecclassname="active" className='home-link' to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            {/* <NavLink className={({ isActive }) =>
                isActive ? 'active' : undefined
            } to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink> */}
            <NavLink exact="true" activecclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activecclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/simon-haughom-458a371a5/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d44" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/mohguah'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d44" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='skype:live:slimosimo'>
                    <FontAwesomeIcon icon={faSkype} color="#4d4d44" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar
import './SkillCard.scss';
// import { IoAccessibilityOutline } from 'react-icons/io5';
import { HiTerminal } from 'react-icons/hi';
import { FaCircle } from 'react-icons/fa';

const SkillCard = () => {
    return (
        <div className='card-container'>
            <span className='fa-stack fa-2x'>
                <FaCircle className='fa fa-stack-2x' color='#FFD700' />
                <HiTerminal className='fa fa-stack-1x' color='#1975A7' />
                {/* <HiTerminal className='fa fa-stack-1x' color='#5BE9B9' /> */}
            </span>
            <h1>
                Fullstack developer
            </h1>
            <p className='p-title'>Languages I speak:</p>
            <p>R, Python, JavaScript, HTML, CSS, Shell Script, Java/SpringBoot, SQL</p>
            <p className='p-title'>Dev tools:</p>
            <div className='list-dual'>
            <ul>
                <li>React</li>
                <li>Spring</li>
                <li>Visual Studio Code</li>
                <li>R Studio</li>
                <li>IntelliJ</li>
                <li>Docker</li>
                <li>Conda</li>
            </ul>
            <ul>
                <li>Git Bash / Github</li>
                <li>Terminal</li>
                <li>Stripe</li>
                <li>Sass</li>
                <li>mySQL</li>
                <li>Postman</li>
                <li>Curl</li>
            </ul>
            </div>
        </div>
    )
}

export default SkillCard
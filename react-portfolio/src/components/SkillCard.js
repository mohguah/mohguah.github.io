import './SkillCard.scss';
import { IoAccessibilityOutline } from 'react-icons/io5';
import { HiTerminal } from 'react-icons/hi';

const SkillCard = () => {
    return (
        <div className='card-container'>
            <span>
                <HiTerminal color='#FFD700' />
                {/* <HiTerminal color='#5BE9B9' /> */}
            </span>
            <h1>
                Fullstack developer
            </h1>
            <p className='p-title'>Languages I speak:</p>
            <p>R, Python, JavaScript, HTML, CSS, Shell script</p>
            <p className='p-title'>Dev tools:</p>
            <ul>
                <li>Terminal</li>
                <li>Visual Studio Code</li>
                <li>IntelliJ</li>
                <li>R Studio</li>
                <li>Docker</li>
                <li>Conda</li>
                <li>Git / Github</li>
                <li>Stripe</li>
            </ul>
        </div>
    )
}

export default SkillCard
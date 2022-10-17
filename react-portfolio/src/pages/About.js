import { FaGitAlt, FaHtml5, FaJsSquare, FaPython, FaReact } from "react-icons/fa"
import { SiRstudio, SiSpring } from "react-icons/si";
import { useState } from 'react';
import AnimatedLetters from '../components/AnimatedLetters';
import './About.scss';
import Loader from 'react-loaders'



const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')


    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15} />
                    </h1>
                    <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis 
                    </p>
                    <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis 
                    </p>
                    <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis 
                    </p>
                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FaReact color='#5ED4F4' />
                        </div>
                        <div className='face2'>
                            <FaPython color='#FFD43B' />
                        </div>
                        <div className='face3'>
                            <SiRstudio color='#276DC2' />
                        </div>
                        <div className='face4'>
                            <SiSpring color='#8BC34A' />
                        </div>
                        <div className='face5'>
                            <FaGitAlt color='#EC4D28' />
                        </div>
                        <div className='face6'>
                            <FaHtml5 color='#F06529' />
                        </div>
                    </div>
                </div>
            </div>
            {/* <Loader type="ball-triangle-path" /> */}
        </>
    )
}

export default About
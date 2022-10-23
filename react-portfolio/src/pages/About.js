import { FaGitAlt, FaHtml5, FaJsSquare, FaPython, FaReact } from "react-icons/fa"
import { SiRstudio, SiSpring } from "react-icons/si";
import { useState } from 'react';
import AnimatedLetters from '../components/AnimatedLetters';
import './About.scss';
import Loader from 'react-loaders'
import CubeSpinner from "../components/CubeSpinner";



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
                        I'm an ambitious full stack developer looking for an opportunity to
                        grow in an established IT company. Although my study provided a fair
                        bit of coding experience, most of my coding skill are self-taught.
                    </p>
                    <p>
                        I am naturally curious, proactive, and perpetually working on 
                        improving my code one problem at a time. 
                    </p>
                    <p>
                        If I should define myself in one sentence that would be a football 
                        enthusiast, enjoyer of golf, man of nature, music lover, 
                        and tech-obsessed!
                    </p>
                </div>

                <CubeSpinner /> 


            </div>
            {/* <Loader type="ball-triangle-path" /> */}
        </>
    )
}

export default About
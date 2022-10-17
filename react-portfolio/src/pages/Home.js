import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useState } from 'react';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import LogoTitle from '../assets/images/logo-s.png'
import AnimatedLetters from '../components/AnimatedLetters';
import './Home.scss';
import Portfolio from '../components/Portfolio';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = "imon".split("")
    const jobArray = "Developer".split("")

    // useEffect(() => {
    //     return setTimeout(() => {
    //         setLetterClass('text-animate-hover')
    //     }, 4000)
    // }, [])

    return (
        <>
            <Parallax pages={2}>
                <ParallaxLayer offset={0} speed={2.5}>
                    <div className="container home-page">
                        <div className="text-zone">
                            <h1>
                                <span className={letterClass}>H</span>
                                <span className={`${letterClass} _12`}>i,</span>
                                <br />
                                <span className={`${letterClass} _13`}>I</span>
                                <span className={`${letterClass} _14`}>'m</span>

                                {/* <br /> I'm */}
                                <img src={LogoTitle} alt="developer" />
                                <AnimatedLetters letterClass={letterClass}
                                    strArray={nameArray} idx={15} />
                                <br />
                                <AnimatedLetters letterClass={letterClass}
                                    strArray={jobArray} idx={22} />
                            </h1>
                            <h2>JavaScript / Python / R / Bioinformatics</h2>
                            <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                        </div>
                        {/* <Logo /> */}
                    </div>
                    {/* <Loader type="ball-triangle-path" /> */}
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={0.5}>
                    <Portfolio />
                </ParallaxLayer>
            </Parallax>
        </>
    );
}



export default Home
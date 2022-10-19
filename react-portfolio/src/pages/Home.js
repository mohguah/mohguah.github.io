import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useState } from 'react';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import LogoTitle from '../assets/images/logo-s.png'
import AnimatedLetters from '../components/AnimatedLetters';
import './Home.scss';
import Portfolio from '../components/Portfolio';
import SkillCard from '../components/SkillCard';
// import Leaf from '../assets/images/fall-leaf-rmbg.png';
import bigleaf from '../assets/images/big-leaf.jpg';
import fern from '../assets/images/fern.jpg';
import { FaAngellist, FaAnglesDown, FaChevronDown } from 'react-icons/fa';
import { BsChevronDoubleDown } from 'react-icons/bs';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = "Simon".split("")
    const jobArray = "Biologist and developer".split("")

    // useEffect(() => {
    //     return setTimeout(() => {
    //         setLetterClass('text-animate-hover')
    //     }, 4000)
    // }, [])

    return (
        <>
            <Parallax pages={1.7} className='parallax'>
                <ParallaxLayer
                    offset={0} speed={0.5}
                    factor={2} style={{
                        backgroundImage: `url(${fern})`,
                        backgroundSize: 'cover',
                    }}>
                </ParallaxLayer>
                <ParallaxLayer offset={0} factor={1} speed={3}>
                    <div className="container home-page">
                        <div className="text-zone">
                            <h1>
                                <span className={letterClass}>H</span>
                                <span className={`${letterClass} _12`}>i!</span>
                                <span className={`${letterClass} _13`}></span>
                                <span className={`${letterClass} _14`}>I</span>
                                <span className={`${letterClass} _15`}>'m</span>
                                <span className={`${letterClass} _16`}></span>

                                {/* <br /> I'm */}
                                {/* <img src={LogoTitle} alt="developer" /> */}
                                <AnimatedLetters letterClass={letterClass}
                                    strArray={nameArray} idx={17} />
                                <br />
                                <AnimatedLetters letterClass={letterClass}
                                    strArray={jobArray} idx={13} />
                            </h1>
                            <h2> R / Spring / Python / JavaScript / Flask</h2>
                            {/* <br /> */}
                            <h2>Bioinformatics / Kelp biology / Ecotoxicology</h2>
                            <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                        </div>
                        <SkillCard />
                        <div className='scroll-message'>
                            <p>
                                Take a look at my portfolio
                            </p>
                            <span>
                            <BsChevronDoubleDown color='#FFD700'/>
                            </span>
                        </div>
                    </div>
                    {/* <Loader type="ball-triangle-path" /> */}
                </ParallaxLayer>
                <ParallaxLayer offset={0.9} speed={1}>
                    <Portfolio />
                </ParallaxLayer>
            </Parallax>
        </>
    );
}



export default Home
import { useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')


    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={'Contact me'.split("")}
                            idx={15} />
                    </h1>
                    <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis
                    </p>
                    <div className='contact-form'>
                        <form>
                            <ul>
                                <li className='half'>
                                    <input
                                        type='text'
                                        name='name'
                                        placeholder='Name'
                                        required />
                                </li>
                                <li className='half'>
                                    <input
                                        type='email'
                                        name='email'
                                        placeholder='Email'
                                        required />
                                </li>
                                <li>
                                    <input
                                        type='text'
                                        name='subject'
                                        placeholder='Subject'
                                        required />
                                </li>
                                <li>
                                    <textarea
                                        name='message'
                                        placeholder='Message' 
                                    ></textarea>
                                </li>
                                <li>
                                    <input
                                        type='submit' className='flat-button' value='SEND' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            {/* <Loader type='ball-triangle-path' /> */}
        </>
    )
}

export default Contact
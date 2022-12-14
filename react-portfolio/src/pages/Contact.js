import { useRef, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../components/AnimatedLetters';
import './Contact.scss';
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            e.target,
            process.env.REACT_APP_EMAILJS_USER_ID)
            .then((result) => {
                alert('Message successfully sent')
                e.target.reset()
            }, (error) => {
                alert('Failed to send the messge, please try again')
                console.log(error)
            });
        // e.target.reset()
    }

    return (

        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={'Contact me'.split("")}
                        idx={15} />
                </h1>
                <p>
                    I'm looking for a full time position as a junior developer,
                    or to work with kelp biology. However, if you have a proposal
                    for a freelance opportunity, or any other questions,
                    don't hesitate to contact me at simon.haughom@gmail.com or
                    using the form below.
                </p>
                <div className='contact-form'>
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input
                                    type='text'
                                    name='name'
                                    id='name'
                                    placeholder='Name'
                                    required />
                            </li>
                            <li className='half'>
                                <input
                                    type='email'
                                    name='email'
                                    id='email'
                                    placeholder='Email'
                                    required />
                            </li>
                            <li>
                                <input
                                    type='text'
                                    name='subject'
                                    id='subject'
                                    placeholder='Subject'
                                    required />
                            </li>
                            <li>
                                <textarea
                                    name='message'
                                    id='message'
                                    placeholder='Message'
                                    required />
                            </li>
                            <li>
                                <input
                                    type='submit' id='button' className='flat-button' value='SEND' />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            {/* <div className='info-map'>
                    Simon Haughom
                    <br />
                    Norway,
                    <br />
                    John Colletts All?? 55
                    <br />
                    Oslo <br />
                    <span>simon.haughom@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[59.945779, 10.757734]} zoom={13}>
                        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                        <Marker position={[59.945779, 10.757734]}>
                            <Popup>Simon lives here!</Popup>
                        </Marker>
                    </MapContainer>
                </div> */}
        </div>
    )
}

export default Contact
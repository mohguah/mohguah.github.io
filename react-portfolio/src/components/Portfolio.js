import './Portfolio.scss';
import Heatmap from '../assets/images/chosen_maxvalues.png'
import Kelp from '../assets/images/kelp-media.jpg'
import Postfilter from '../assets/images/postfilter.png'
import { GiAlgae } from 'react-icons/gi'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaCircle, FaGithub, FaHamburger } from 'react-icons/fa';
import maxvalues from '../assets/images/chosen_maxvalues.png'
import { Link } from 'react-router-dom';
// import Paper from "@material-ui/core/Paper";
// import Grid from "@material-ui/core/grid";


const Portfolio = () => {
    return (
        <div className='grid-container'>
            <div className='grid-item port-item-1'>
                {/* <span className='fa-stack fa-2x'>
                    <FaCircle className='fa fa-stack-2x' color='#FFD700' />
                    <GiAlgae className='fa fa-stack-1x' color='#1975A7' />
                </span> */}
                <p className='title-span'>
                    Differential expression analysis in light stressed sugar kelp
                </p>
                <ul className='bread-span'>
                    <li>Quality control - fastQC/MultiQC</li>
                    <li>De novo assembly - Trinity</li>
                    <li>Completeness - BUSCO</li>
                    <li>Blast - Kraken2</li>
                    <li>Alignment - RSEM/Bowtie2</li>
                    <li>Reduce redundancy - Corset</li>
                </ul>
                {/* <img className='bread-span' src={maxvalues} alt='maxvalues' /> */}
                {/* <a target="_blank" rel='noreferrer' href='https://github.com/mohguah/kelp-differential-expression'>
                    <FontAwesomeIcon icon={FaGithub} color="#4d4d44" />
                </a> */}
                <a 
                target='_blank' 
                rel='noreferrer' 
                href="https://github.com/mohguah/kelp-differential-expression" 
                className='bread-span'>See in github</a>
            </div>
            <div className='grid-item port-item-2'>
                {/* <span className='fa-stack fa-2x'>
                    <FaCircle className='fa fa-stack-2x' color='#FFD700' />
                    <FaHamburger className='fa fa-stack-1x' color='#1975A7' />
                </span> */}
                <p className='title-span'>
                    Burgermile: burger reviews all-inclusive - ongoing
                </p>
                <ul className='bread-span'>
                    <li>bread</li>
                    <li>bread</li>
                    <li>bread</li>
                    <li>bread</li>
                    <li>bread</li>
                </ul>
                <a 
                target='_blank' 
                rel='noreferrer' 
                href="https://github.com/mohguah/kelp-differential-expression" 
                className='bread-span'>See in github</a>
            </div>
            <div className='grid-item port-item-3'>
            </div>
            <div className='grid-item port-item-4'>
                {/* <img src={Kelp} className='portfolio-image' alt='heatmap' /> */}
            </div>
        </div >
    )
}

export default Portfolio
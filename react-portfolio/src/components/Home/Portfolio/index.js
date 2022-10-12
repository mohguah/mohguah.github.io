import './index.scss';
import Heatmap from '../../../assets/images/chosen_maxvalues.png'
import Kelp from '../../../assets/images/kelp-media.jpg'
import Postfilter from '../../../assets/images/postfilter.png'
import { GiAlgae } from 'react-icons/gi'
// import Paper from "@material-ui/core/Paper";
// import Grid from "@material-ui/core/grid";


const Portfolio = () => {
    return (
        <div className='grid-container'>
            <div className='image-container'>
                {/* <img src={Kelp} className='portfolio-image' alt='heatmap' /> */}
                <GiAlgae color='#5C4F25' /> 
            </div>
            <div className='image-container'>
                <img src={Kelp} className='portfolio-image' alt='heatmap' />
            </div>
            <div className='image-container'>
                <img src={Kelp} className='portfolio-image' alt='heatmap' />
            </div>
            <div className='image-container'>
                <img src={Kelp} className='portfolio-image' alt='heatmap' />
            </div>
        </div>
    )
}

export default Portfolio
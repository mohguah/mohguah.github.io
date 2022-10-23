
import '../pages/About.scss';
import { FaGitAlt, FaHtml5, FaJsSquare, FaPython, FaReact } from "react-icons/fa"
import { SiRstudio, SiSpring } from "react-icons/si";


const CubeSpinner = () => {
    return (
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
    )
}

export default CubeSpinner

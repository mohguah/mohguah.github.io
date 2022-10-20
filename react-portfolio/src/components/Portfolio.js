import './Portfolio.scss';

const Portfolio = () => {
    return (
        <div className='grid-container'>
            <div className='grid-item grid-item-1'>
                <p className='title-span'>
                    Differential expression analysis in light stressed sugar kelp
                </p>
                <ul className='bread-span'>
                    <li>Quality control - Trimmomatic/fastQC/MultiQC</li>
                    <li>De novo assembly - Trinity</li>
                    <li>Completeness - BUSCO</li>
                    <li>Blast - Kraken2</li>
                    <li>Alignment - RSEM/Bowtie2</li>
                    <li>Reduce redundancy - Corset</li>
                    <br />
                    <li>Identify differentially expressed genes</li>
                    <li>Annotate proteins - Diamond Blastx</li>
                    <li>Annotate GO terms</li>
                    <li>Heatmaps and figures</li>
                </ul>
                <a 
                target='_blank' 
                rel='noreferrer' 
                href="https://github.com/mohguah/kelp-differential-expression" 
                className='bread-span button1'>Visit Github repo</a>
            </div>
            <div className='grid-item grid-item-2'>
                <p className='title-span'>
                    Coming soon! Burgermile - reviews, merch, and catering
                </p>
                <ul className='bread-span'>
                    <li>bread</li>
                    <li>tomato</li>
                    <li>pickles</li>
                    <li>burger</li>
                    <li>bread</li>
                </ul>
                <a 
                target='_blank' 
                rel='noreferrer' 
                // href="" 
                className='bread-span'>Coming soon</a>
            </div>
            <div className='grid-item grid-item-3'>
            <p className='title-span'>
                    Fullstack app using Spring, SQL, and React
                </p>
                <ul className='bread-span'>
                    <li>Connect to mySQL with Spring</li>
                    <li>Expose an API containing the data</li>
                    <li>Consume the API frontend in React</li>
                </ul>
                <a 
                target='_blank' 
                rel='noreferrer' 
                href="https://github.com/mohguah/singlepage-app" 
                className='bread-span button1'>Visit Github repo</a>
            </div>
            <div className='grid-item grid-item-4'>
            <p className='title-span'>
                    Simple web scraper using Python
                </p>
                <ul className='bread-span'>
                    <li>Make a soup item using Beautiful Soup</li>
                    <li>Scrape new job offers from Finn.no</li>
                    <li>Find title, description, company name, location, and link</li>
                </ul>
                {/* <img className='bread-span' src={maxvalues} alt='maxvalues' /> */}
                {/* <a target="_blank" rel='noreferrer' href='https://github.com/mohguah/kelp-differential-expression'>
                    <FontAwesomeIcon icon={FaGithub} color="#4d4d44" />
                </a> */}
                <a 
                target='_blank' 
                rel='noreferrer' 
                href="https://github.com/mohguah/job-finder" 
                className='bread-span button1'>Visit Github repo</a>
            </div>
        </div >
    )
}

export default Portfolio
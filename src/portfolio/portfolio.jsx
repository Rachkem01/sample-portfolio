import { getImageurl } from './image'

function Portfolio(){
 return(
    <section>
        <h1 className="Akube">AKUBE</h1>
        <div>
            <h4 className="React">React Front-End Developer</h4>
            <p className="Rachael"> I am Rachael Babatunde</p>
            <p>
                <button className="more">MORE ABOUT ME</button>
                <button className="hire">HIRE ME</button>
            </p>
            <img src={getImageurl("portofolio.jpg")} alt="portfolio" className='portfolio'/>
        </div>

        <div>
        <p>&copy;{new Date().getFullYear()}This template is made by me</p>
            
        </div>
    </section>
 )
}
export default Portfolio
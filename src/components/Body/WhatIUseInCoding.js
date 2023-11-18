import ScrollTriggeredSection from '../Body/ScrollSection';
import {useDarkMode } from '../Body/DarkModeContext.js';




const WhatIUseInCoding = () => {
  const isDarkMode = useDarkMode();
   

    return (
        <ScrollTriggeredSection sectionId={'second-section'}>
       <section className={` materials-I-use ${isDarkMode ? "" : "light-text"}`}>
        <h1 className='material-I-use-title'>What I use in coding</h1>
        <p className='materials-I-use-des mt-4'>
            JavaScript<img src='/portfolio/javascript.png' className='image' style={{"marginTop": "-6px"}} width={"2%"} alt='javascript'/>
        </p>
        <p className='materials-I-use-des'>
            Html<img src='/portfolio/html.png' className='image' style={{"marginTop": "-6px"}} width={"2%"} alt='javascript'/>
            </p>
            <p className='materials-I-use-des'>
            Css<img src='/portfolio/css.png' className='image' style={{"marginTop": "-6px"}} width={"2%"} alt='javascript'/>
            </p>
            <p className='materials-I-use-des'>
            Bootstrap <img src='/portfolio/bootstrap.png' className='image' style={{"marginTop": "-6px"}} width={"2%"} alt='javascript'/>
            </p>
            <p className='materials-I-use-des'>
            Node.js <img src='/portfolio/node-js.png' className='image' style={{"marginTop": "-6px"}} width={"2%"} alt='javascript'/>
            </p>
            <p className='materials-I-use-des'>
            Express.js
            </p>
            <p className='materials-I-use-des'>
            MongoDB <img src='/portfolio/mongodb.png' className='image' style={{"marginTop": "-6px"}} width={"2%"} alt='javascript'/>
            </p>
    </section>
    </ScrollTriggeredSection>
      
    );
}

export default WhatIUseInCoding;


import {Image, Row, Col, Button} from 'react-bootstrap';
import ScrollTriggeredSection from '../Body/ScrollSection';
import {useDarkMode } from '../Body/DarkModeContext.js';


const Works = (prop) => {
  const isDarkMode = useDarkMode();

    return(
      <ScrollTriggeredSection sectionId={'third-section'}>
        <div>
            <h1 className={`works-title ${isDarkMode ? "" : "light-text"}`}>Works</h1>
    <Row>
         
      <Col lg={6}>
        <Image width={"90%"} src='/1-work.png' className='web-image' alt='download' layout="responsive" loading='lazy' />
        <a href='https://samer132344.github.io/YouTube-Downloader' rel="noreferrer" target='_blank' className='btn d-block m-auto mt-4 visit-btn'>Visit</a>
      </Col>

      <Col lg={6} >
        <Image width={"90%"} src='/2-work.png' className='web-image' alt='coffee' layout="responsive" loading='lazy' />
        <a href='https://samer132344.github.io/Coffee-Website' rel="noreferrer" target='_blank' className='btn d-block m-auto mt-4 visit-btn'>Visit</a>
      </Col>
      <Col lg={6} >
        <Image width={"90%"} src='/3-work.png' className='web-image mt-5 third-image' alt='PDPL-image'  loading='lazy' layout="responsive" />
        <Button disabled className='btn d-block m-auto mt-4 publish-soon'>Publish Soon..</Button>
      </Col>
      <Col lg={6} >
        <Image width={"90%"} src='/learningcorner.png' className='web-image mt-5 third-image' alt='learning-corner' loading='lazy' layout="responsive" />
        <a href='https://learningcorner.net' rel="noreferrer" target='_blank' className='btn d-block m-auto mt-4 visit-btn'>Visit</a>
      </Col>
    </Row>
    </div>
    </ScrollTriggeredSection>
    );
    
}

export default Works;
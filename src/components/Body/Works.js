import {Image, Row, Col,} from 'react-bootstrap';
import ScrollTriggeredSection from '../Body/ScrollSection';


const Works = (prop) => {
    return(
      <ScrollTriggeredSection sectionId={'third-section'}>
        <div>
            <h1 className="works-title">Works</h1>
    <Row>
         
      <Col lg={6}>
        <Image width={"65%"} src='/portfolio/7ml-with-us.png' className='web-image' alt='download' layout="responsive" />
      </Col>

      <Col lg={6} >
        <Image width={"65%"} src='/portfolio/coffee-h.png' className='web-image' alt='coffee' layout="responsive" />
      </Col>
    </Row>
    </div>
    </ScrollTriggeredSection>
    );
    
}

export default Works;
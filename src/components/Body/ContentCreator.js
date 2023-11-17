import React, { useState, useRef, useEffect } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import ScrollTriggeredSection from '../Body/ScrollSection';

const ContentCreator = (prop) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [allowSlideChange, setAllowSlideChange] = useState(true);

  const handleSelect = (selectedIndex) => {
    if (allowSlideChange) {
      setActiveIndex(selectedIndex);
    }
  };

  const videoRefs = [useRef(null), useRef(null), useRef(null)];



  const handleVideoPlay = (index) => {
    
    if (videoRefs[index].current) {
      const video = videoRefs[index].current;
      const playIcon = video.parentElement.querySelector('.play-icon');
      video.volume = 0.30;
      playIcon.style.display = 'none';
      video.style.filter = "none"
      setAllowSlideChange(false);
      video.requestFullscreen(); // Enter fullscreen mode on play
    }
  };

  useEffect(() => {
    document.onfullscreenchange = exitHandler;
    document.onwebkitfullscreenchange = exitHandler;

    return () => {
      document.onfullscreenchange = null;
      document.onwebkitfullscreenchange = null;
    };
  }, []);

  const exitHandler = () => {
      setAllowSlideChange(true); // Enable slide change when exiting fullscreen and video is playing
    
  };

  return (
    <ScrollTriggeredSection sectionId={'fourth-section'}>
      <Row>
        <section className='content-creator' style={{ marginBottom: '50px', marginTop: '100px' }}>
          <h1 className='content-creator-title'>Content creator</h1>
        </section>

        <Col lg={6} style={{ margin: 'auto' }}>
          <h1 className='tik-tok-header'>
            <span className={`tik ${prop.isDarkMode ? '' : 'tik-light-mode'}`}>Tik</span>
            <span className={`tok ${prop.isDarkMode ? '' : 'tok-light-mode'}`}>Tok</span>
          </h1>
          <p className='tik-tok-des'>
            As I mentioned earlier I'm a Content creator on TikTok.
            You can visit my account by clicking{' '}
            <Button href='https://www.tiktok.com/@samerpro_' rel='noreferrer' target='_blank' className='tiktok-button'>
              here..
            </Button>
          </p>
        </Col>

        <Col lg={6}>
          <Carousel activeIndex={activeIndex} onSelect={handleSelect}>
            {videoRefs.map((videoRef, index) => (
              <Carousel.Item key={index}>
                <div style={{ position: 'relative' }}>
                  <video
                    ref={videoRef}
                    onClick={() => handleVideoPlay(index)}
                    style={{ position: 'relative' }}
                    className='video'
                    preload='metadata'
                  >
                    <source src={`/portfolio/v-${index + 1}.mp4`} type='video/mp4' />
                  </video>
                  <AiOutlinePlayCircle onClick={() => handleVideoPlay(index)} className='play-icon' />
                </div>
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </ScrollTriggeredSection>
  );
};

export default ContentCreator;

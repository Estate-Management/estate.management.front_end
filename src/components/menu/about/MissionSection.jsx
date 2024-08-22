import React from 'react';
import './missionSection.scss';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';

const MissionSection = () => {
  return (
    <section>
      <Container className="mission-section">
        <Row className="align-items-center">
          <Col xs={12} lg={6} className="mission-image">
            <Image 
              src="/images/about/missionSection.jpg" 
              alt="Cozy home setup" 
              width={600} 
              height={600} 
              className="img-fluid"
            />
          </Col>
          <Col xs={12} lg={6} className="mission-text">
            <h2 className="mission-title">
              We're on a Mission to Change <br /> the View of Real Estate Field.
            </h2>
            <p className="mission-description">
              At the heart of our vision lies a resolute commitment to transform the landscape of the real estate industry.
              We’re not just a company; we’re on a mission to change the very essence of how real estate is perceived and experienced.
              Our journey is defined by innovation, transparency, and a relentless pursuit of excellence. With a bold and forward-thinking
              approach, we seek to revolutionize the traditional norms of the real estate field, making it more accessible, efficient, and
              customer-centric. 
            </p>
            <div className="mission-options">
              <div className="option">
                <span className="option-circle"></span>
                <span className="option-text">Modern Architect</span>
              </div>
              <div className="option">
                <span className="option-circle"></span>
                <span className="option-text">Green Building</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MissionSection;

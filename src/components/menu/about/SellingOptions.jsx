import React from 'react';
import './SellingOptions.scss';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import { MdOutlineDiscount } from "react-icons/md";
import { FaRecycle, FaShapes } from "react-icons/fa6";

const SellingOptions = () => {
  return (
    <section>
      <Container className="selling-options-section">
        <Row className="align-items-center">
          <Col xs={12} lg={6} className="selling-text">
            <h2 className="selling-title">
              Let’s Find The Right <br /> Selling Option For You
            </h2>
            <div className="selling-points">
              <div className="selling-point">
                <div className="icon">
                  <MdOutlineDiscount className="fs-1 text-primary" />
                </div>
                <div className="text">
                  <h3>Tech-Driven Marketing</h3>
                  <p>
                    Real estate is embracing technology with virtual tours, 3D models, and blockchain transactions.
                  </p>
                </div>
              </div>
              <div className="selling-point">
                <div className="icon">
                  <FaRecycle className="fs-1 text-primary" />
                </div>
                <div className="text">
                  <h3>Sustainability Matters</h3>
                  <p>
                    Green building practices and eco-friendly features are gaining popularity for environmentally conscious buyers.
                  </p>
                </div>
              </div>
              <div className="selling-point">
                <div className="icon">
                  <FaShapes className="fs-1 text-primary" />
                </div>
                <div className="text">
                  <h3>Remote Work Impact</h3>
                  <p>
                    Changing work patterns are reshaping housing preferences, favoring suburban and urban mixed-use developments.
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} lg={6} className="selling-image">
            <Image 
              src="/images/about/sellingOptions.jpg" 
              alt="selling options" 
              width={600} 
              height={600} 
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SellingOptions;

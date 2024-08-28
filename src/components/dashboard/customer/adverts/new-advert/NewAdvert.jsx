"use client";

import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./newAdvert.scss";
import CustomButton from "@/components/common/custom-button/CustomButton";
import { useState } from "react";
import { cities } from "@/helpers/cities";

const NewAdvertForm = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [districts, setDistricts] = useState([]);

  const handleCityChange = (e) => {
    const cityName = e.target.value;
    setSelectedCity(cityName);
    const selectedCityData = cities.find((city) => city.name === cityName);
    setDistricts(selectedCityData?.districts || []);
  };

  return (
    <Container className="property-form">
      {/* Common Information */}
      <h5>Common Information</h5>
      <Form>
        <Form.Group controlId="title" className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter title" />
        </Form.Group>

        <Form.Group controlId="description" className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter description"
          />
        </Form.Group>

        <Row >
          <Col md={6}>
            <Form.Group controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" placeholder="Enter price" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="advertType">
              <Form.Label>Advert Type</Form.Label>
              <Form.Control as="select">
                <option>For Sale</option>
                <option>For Rent</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        {/* Address Information */}
        <h5>Address Information</h5>
        <Row className="mb-3">
          <Col md={4}>
            <Form.Group controlId="country">
              <Form.Label>Country</Form.Label>
              <Form.Control as="select" value="Türkiye" required>
                <option value="Türkiye">Türkiye</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control
                as="select"
                value={selectedCity}
                onChange={handleCityChange}
                required
              >
                <option value="">Select a city</option>
                {cities.map((city, index) => (
                  <option key={index} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="district">
              <Form.Label>District</Form.Label>
              <Form.Control
                as="select"
                disabled={!districts.length}
                required
              >
                <option value="">Select a district</option>
                {districts.map((district, index) => (
                  <option key={index} value={district}>
                    {district}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="location">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" placeholder="Enter location" />
        </Form.Group>

        {/* Property Information */}
        <h5>Properties</h5>
        <Row>
          <Col md={6}>
            <Form.Group controlId="category" className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Control as="select" required>
                <option value="">Select Category</option>
                <option value="Villa">Villa</option>
                <option value="Apartment">Apartment</option>
                <option value="Office">Office</option>
                <option value="Bungalow">Bungalow</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group controlId="floor">
              <Form.Label>Floor</Form.Label>
              <Form.Control type="text" placeholder="Enter floor" />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group controlId="bedroom">
              <Form.Label>Bedroom</Form.Label>
              <Form.Control type="number" placeholder="Number of bedrooms" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <Form.Group controlId="bathroom">
              <Form.Label>Bathroom</Form.Label>
              <Form.Control type="number" placeholder="Number of bathrooms" />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group controlId="garage">
              <Form.Label>Garage</Form.Label>
              <Form.Control as="select" required>
                <option value="">Select an option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group controlId="yearOfBuilt">
              <Form.Label>Year of Built</Form.Label>
              <Form.Control type="number" placeholder="Enter year" />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group controlId="size">
              <Form.Label>Size</Form.Label>
              <Form.Control type="text" placeholder="Enter size (m2)" />
            </Form.Group>
          </Col>
        </Row>

        {/* Images */}
        <h5>Images</h5>
        <div className="image-upload-section">
          {/* Add your image upload logic here */}
          <Button variant="primary">Add Image</Button>
        </div>

        <CustomButton type="submit" className="w-25">
          Create
        </CustomButton>
      </Form>
    </Container>
  );
};

export default NewAdvertForm;

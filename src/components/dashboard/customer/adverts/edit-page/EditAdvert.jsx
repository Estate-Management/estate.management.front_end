"use client";

import {
  Container,
  Form,
  Row,
  Col,
  Table,
  Badge,
  Button,
} from "react-bootstrap";
import "./editAdvert.scss";
import { useState } from "react";
import { cities } from "@/helpers/cities";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import Image from "next/image";
import CustomButton from "@/components/common/custom-button/CustomButton";

const EditAdvert = () => {
  const [isActive, setIsActive] = useState(true);
  const [selectedCity, setSelectedCity] = useState("");
  const [districts, setDistricts] = useState([]);

  const handleCityChange = (e) => {
    const cityName = e.target.value;
    setSelectedCity(cityName);
    const selectedCityData = cities.find((city) => city.name === cityName);
    setDistricts(selectedCityData?.districts || []);
  };

  const tourRequests = [
    {
      id: 1,
      guest: "John Doe",
      status: "Activated",
      date: "10/10/2024",
      time: "10:30 PM",
    },
    {
      id: 2,
      guest: "John Doe",
      status: "Pending",
      date: "10/10/2024",
      time: "10:30 PM",
    },
    {
      id: 3,
      guest: "John Doe",
      status: "Rejected",
      date: "10/10/2024",
      time: "10:30 PM",
    },
  ];

  return (
    <Container>
      <Form className="property-form">
        {/* Common Information Section */}
        <section className="common-info">
          <h5>Common Information</h5>
          <Row>
            <Col md={12}>
              <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Title" />
              </Form.Group>
            </Col>
            <Col md={12}>
              <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Description"
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="price">
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" placeholder="Price" />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="advertType">
                <Form.Label>Advert Type</Form.Label>
                <Form.Select aria-label="Advert Type select">
                  <option>For Sale</option>
                  <option>For Rent</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={4} className="d-flex align-items-center">
              <Form.Group controlId="active">
                <Form.Label className="me-2">Active</Form.Label>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label={isActive ? "On" : "Off"}
                  checked={isActive}
                  onChange={(e) => setIsActive(e.target.checked)}
                />
              </Form.Group>
            </Col>
          </Row>
        </section>

        {/* Address Information Section */}
        <section className="address-info mt-4">
          <h5>Address Information</h5>
          <Row>
            <Col md={4}>
              <Form.Group controlId="country">
                <Form.Label>Country</Form.Label>
                <Form.Select aria-label="Country select" disabled>
                  <option value="1">Türkiye</option>
                </Form.Select>
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
                <Form.Control as="select" disabled={!districts.length} required>
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
            <Form.Control type="text" placeholder="Location" />
          </Form.Group>
        </section>

        {/* Properties Section */}
        <section className="properties-info mt-4">
          <h5>Properties</h5>
          <Row>
            <Col md={6}>
              <Form.Group controlId="category">
                <Form.Label>Category</Form.Label>
                <Form.Select aria-label="Category select">
                  <option>Select a category</option>
                  <option value="1">House</option>
                  <option value="2">Apartment</option>
                  <option value="3">Villa</option>
                  <option value="4">Bungalow</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col md={4}>
              <Form.Group controlId="floor">
                <Form.Label>Floor</Form.Label>
                <Form.Control type="text" placeholder="Floor" />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="bedroom">
                <Form.Label>Bedroom</Form.Label>
                <Form.Control type="text" placeholder="Bedroom" />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="bathroom">
                <Form.Label>Bathroom</Form.Label>
                <Form.Control type="text" placeholder="Bathroom" />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col md={4}>
              <Form.Group controlId="garage">
                <Form.Label>Garage</Form.Label>
                <Form.Control type="text" placeholder="Garage" />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="yearBuilt">
                <Form.Label>Year of Built</Form.Label>
                <Form.Control type="text" placeholder="Year of Built" />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="size">
                <Form.Label>Size</Form.Label>
                <Form.Control type="text" placeholder="Size" />
              </Form.Group>
            </Col>
          </Row>
        </section>

        {/* Image Upload Section */}
        <section className="images-info mt-4">
          <h5>Images</h5>
          <div className="image-upload-area">
            <div className="upload-placeholder">
              <div className="upload-icon">+</div>
              <p>Choose and update new images</p>
              <Button variant="primary">Upload</Button>
            </div>
          </div>
          <div className="image-gallery mt-4">
            <Row>
              <Col md={4}>
                <div className="image-item">
                  <Image
                    src="/images/dream-house.jpg"
                    alt="Property 1"
                    width={500}
                    height={350}
                  />
                  <Button variant="link">Set as Featured</Button>
                  {/* <CustomButton variant="link">Set as Featured</CustomButton> */}
                  {/* <Button variant="danger">Delete</Button> */}
                  <CustomButton>Delete</CustomButton>
                </div>
              </Col>
            </Row>
          </div>
        </section>

        {/* Update Button */}
        <div className="update-button mt-4">
          {/* <Button variant="danger" type="submit">
            Update
          </Button> */}
          <CustomButton type="submit" className="w-25">
            Update
          </CustomButton>
        </div>

        {/* Tour Requests Table */}
        <div className="tour-requests-container">
          <h3>Tour Requests</h3>
          <Table responsive bordered className="tour-requests-table">
            <thead>
              <tr>
                <th>Guest</th>
                <th>Status</th>
                <th>Tour Request Date</th>
                <th>Tour Request Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tourRequests.map((request) => (
                <tr key={request.id}>
                  <td>{request.guest}</td>
                  <td>
                    <Badge
                      bg={
                        request.status.toLowerCase() === "activated"
                          ? "success"
                          : request.status.toLowerCase() === "rejected"
                          ? "danger"
                          : "warning"
                      }
                      className="status-badge"
                    >
                      {request.status}
                    </Badge>
                  </td>
                  <td>{request.date}</td>
                  <td>{request.time}</td>
                  <td className="action-buttons">
                    <Button
                      variant="outline-success"
                      size="sm"
                      className="me-2"
                    >
                      <FaCheckCircle />
                    </Button>
                    <Button variant="outline-danger" size="sm">
                      <FaTimesCircle />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Form>
    </Container>
  );
};

export default EditAdvert;

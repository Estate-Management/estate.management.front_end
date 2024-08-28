"use client";
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Form,
} from "react-bootstrap";
import "./propertySearch.scss";
import { GoSearch } from "react-icons/go";
import Link from "next/link";
import cities from "@/helpers/city.json";
const PropertySearch = () => {
  const [searchType, setSearchType] = useState("Rent");
  const [propertyType, setPropertyType] = useState([]);
  const [city, setCity] = useState("");

  const handleSearch = () => {
    // Placeholder for the API call
    console.log("Search triggered:", { searchType, propertyType });
  };

  const handleCheckboxChange = (type, isChecked) => {
    if (isChecked) {
      setPropertyType([...propertyType, type]);
    } else {
      setPropertyType(propertyType.filter((t) => t !== type));
    }
  };

  return (
    <Container className="property-search">
      <Row className="align-items-center">
        <Col lg={6} md={8} sm={10} xs={12} className="mx-auto">
          <h2 className="search-title">Easy Way to Find a Perfect Property</h2>
          <ToggleButtonGroup
            type="radio"
            name="searchType"
            defaultValue={searchType}
            className="search-toggle-group"
            onChange={(val) => setSearchType(val)}
          >
            <ToggleButton variant="light" value={"Rent"}>
              Rent
            </ToggleButton>
            <ToggleButton variant="light" value={"Sale"}>
              Sale
            </ToggleButton>
          </ToggleButtonGroup>

          <div className="search-bar">
            <Form.Select
              className="form-control"
              onChange={(e) => setCity(e.target.value)}
            >
              <option value="" className="option">
                Search by location
              </option>
              {cities.map((city) => (
                <option key={city.id} value={city.id}>
                  {city.name}
                </option>
              ))}
            </Form.Select>
            <Button
              variant="primary"
              className="search-button"
              onClick={handleSearch}
              as={Link}
              href="/properties"
            >
              <GoSearch />
            </Button>
          </div>

          <div className="property-options">
            <Form.Check
              inline
              label="House"
              name="propertyType"
              type="radio"
              id="property-house"
              value="House"
              onChange={(e) => handleCheckboxChange("House", e.target.checked)}
            />
            <Form.Check
              inline
              label="Apartment"
              name="propertyType"
              type="radio"
              id="property-apartment"
              value="Apartment"
              onChange={(e) =>
                handleCheckboxChange("Apartment", e.target.checked)
              }
            />
            <Form.Check
              inline
              label="Villa"
              name="propertyType"
              type="radio"
              id="property-villa"
              value="Villa"
              onChange={(e) => handleCheckboxChange("Villa", e.target.checked)}
            />
            <Form.Check
              inline
              label="Office"
              name="propertyType"
              type="radio"
              id="property-office"
              value="Office"
              onChange={(e) => handleCheckboxChange("Office", e.target.checked)}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PropertySearch;

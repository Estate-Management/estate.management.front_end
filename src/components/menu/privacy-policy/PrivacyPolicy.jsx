"use client";
import { Container, Row, Col, Card } from 'react-bootstrap';
import './privacyPolicy.scss';

const PrivacyPolicy = () => {
  return (
    <Container fluid className="privacy-policy-page">
      <Row>
        <Col>
          <Card className="policy-card">
          <Card.Body>
              <Card.Title>Introduction</Card.Title>
              <Card.Text>
                At Luvenda, we are committed to protecting your personal information and ensuring your privacy. This policy explains what information we collect, how we use it, and the measures we take to safeguard your data.
              </Card.Text>

              <Card.Title>Information We Collect</Card.Title>
              <Card.Text>
                We collect personal information when you use our services, including when you browse our website, contact us, or engage in real estate transactions through Luvenda. This may include your name, contact details, property preferences, and other relevant data.
              </Card.Text>

              <Card.Title>How We Use Your Information</Card.Title>
              <Card.Text>
                Your information helps us provide and enhance our services, tailor property recommendations, and communicate effectively with you. We may also use your data for marketing purposes, with your consent.
              </Card.Text>

              <Card.Title>Sharing Your Information</Card.Title>
              <Card.Text>
                We do not share your personal data with third parties except as necessary to fulfill our services, comply with legal obligations, or with your explicit consent.
              </Card.Text>

              <Card.Title>Your Rights</Card.Title>
              <Card.Text>
                You have the right to access, correct, or request the deletion of your personal information. You can also opt out of marketing communications at any time.
              </Card.Text>

              <Card.Title>Changes to This Policy</Card.Title>
              <Card.Text>
                We may update this Privacy Policy periodically to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any significant changes by updating the policy on our website.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PrivacyPolicy;

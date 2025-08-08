import React from 'react';
import './css/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MiniHearts from '../components/MiniHearts';

const Home = () => {
  return (
    <div className="love-home">
      <MiniHearts />
      {/* Main Content */}
      <Container className="main-content pt-4 pt-md-5">
        <h2 className="text-center mb-4 text-white fw-bold">Welcome To Love Streak</h2>

        <Row className="g-3 justify-content-center">
          <Col xs={6} sm={6} md={4} lg={3}>
           <Link to="/lovenote" className="text-decoration-none">
            <Card className="card-love text-center p-3 home-cards">
              <img src="./assets/notes.gif" alt="Love Note" className="love-gif mb-2" />
              <Card.Title>Love Note</Card.Title>
            </Card>
          </Link>
          </Col>
          <Col xs={6} sm={6} md={4} lg={3}>
            <Link to="/contest" className="text-decoration-none">
            <Card className="card-love text-center p-3 home-cards">
              <img src="./assets/win.gif" alt="Contest" className="love-gif mb-2" />
              <Card.Title>Contest</Card.Title>
            </Card>
          </Link>
          </Col>
        </Row>

        <Row className="g-3 justify-content-center mt-3">
          <Col xs={6} sm={6} md={4} lg={3}>
           <Link to="/lovegame" className="text-decoration-none">
            <Card className="card-love text-center p-3 home-cards">
              <img src="./assets/kissing.gif" alt="Love Game" className="love-gif mb-2" />
              <Card.Title>Love Game</Card.Title>
            </Card>
          </Link>
          </Col>
          <Col xs={6} sm={6} md={4} lg={3}>
            <Link to="/singlescard" className="text-decoration-none">
              <Card className="card-love text-center p-3 home-cards">
                <img src="./assets/singles.gif" alt="Singles" className="love-gif mb-2" />
                <Card.Title>Singles</Card.Title>
              </Card>
            </Link>
          </Col>
        </Row>

        {/* Ads Section */}
        <div className="ads-section mt-5 text-center">
          <h5 className="text-muted">Sponsored ❤️</h5>
          <div className="p-3 bg-light rounded border">Ad space (Image or Banner)</div>
        </div>
      </Container>
    </div>
  );
};

export default Home;

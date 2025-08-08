import React from 'react';
import './css/Home.css';
import './css/Streak.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaHeart, FaTrophy } from 'react-icons/fa';
import MiniHearts from '../components/MiniHearts';

const Streaks = () => {
  const topCouples = [
    { id: 1, name1: 'Avi', name2: 'Riya', streak: 34584 },
    { id: 2, name1: 'Sam', name2: 'Tina', streak: 72857 },
    { id: 3, name1: 'Rohan', name2: 'Diya', streak: 43461 },
    { id: 4, name1: 'Jay', name2: 'Meena', streak: 584354 },
    { id: 5, name1: 'Avi', name2: 'Riya', streak: 84544 },
    { id: 6, name1: 'Sam', name2: 'Tina', streak: 72453 },
    { id: 7, name1: 'Rohan', name2: 'Diya', streak: 45361 },
    { id: 8, name1: 'Jay', name2: 'Meena', streak: 45358 },
  ];

  return (
    <div className="love-home">
        <MiniHearts />
      <Container className="main-content pt-4 pt-md-5">
        <h2 className="text-center mb-4 text-danger fw-bold">Your Love Streaks</h2>

        <Row className="g-3 justify-content-center">
          {/* Profile Streak Card */}
          <Col xs={12} md={6} lg={4}>
            <Card className="card-love text-center p-4 h-100">
              <img
                src="https://i.pravatar.cc/100?img=12"
                alt="profile"
                className="rounded-circle border border-4 border-danger mb-3"
                style={{ width: '80px', height: '80px', objectFit: 'cover' }}
              />
              <h5 className="fw-bold text-dark">Chakri 💘</h5>
              <button className="btn btn-danger mt-2 d-flex align-items-center justify-content-center gap-2">
                <FaHeart /> Streak Now
              </button>

               <Row className="justify-content-around mt-2 align-items-center">
           
            <Col className='aling-items-left' xs={4} md={3}>
              <img
                src="https://i.pravatar.cc/80?img=23"
                alt="winner"
                className="rounded-circle border border-4 border-success"
                style={{ width: '80px', height: '80px', objectFit: 'cover' }}
              />
              <span>❤️ 844</span>
              <p className="mt-2 text-success fw-bold">WIN</p>
            </Col>

            {/* Heart Icon */}
            <Col xs={4} md={2}>
              <FaHeart className="text-danger fs-1 animate__animated animate__pulse animate__infinite" />
            </Col>

            {/* Loser */}
            <Col xs={4} md={3}>
              <img
                src="https://i.pravatar.cc/80?img=28"
                alt="loser"
                className="rounded-circle border border-4 border-danger "
                style={{ width: '80px', height: '80px', objectFit: 'cover' }}
              />
               <span>❤️ 8448</span>
              <p className="mt-2 text-danger fw-bold">LOSE</p>
            </Col>
          </Row>
            </Card>

            
         
          </Col>

          {/* Top Couples Leaderboard */}
          <Col xs={12} md={6} lg={4}>
            <Card className="card-love p-4 h-100">
              <div className="d-flex align-items-center gap-2 mb-3">
                <FaTrophy className="text-warning fs-4" />
                <h5 className="mb-0 text-dark fw-semibold">Top Love Streak Couples</h5>
              </div>
              {topCouples.map(couple => (
                <div
                  key={couple.id}
                  className="d-flex justify-content-between align-items-center p-2 px-3 mb-2  w-100 top-cards"
                >
                  <span className="text-dark fw-medium">
                     {couple.name1} ❤️ {couple.name2}
                  </span>
                  <span className="text-danger fw-bold">{couple.streak} </span>
                </div>
              ))}
            </Card>
          </Col>
        </Row>

       
        <div className="ads-section text-center mt-5">
          <h5 className="text-muted">❤️ ADVERTISEMENT ❤️</h5>
          <div className="p-3 bg-light rounded border">Ad space (Image or Banner)</div>
        </div>
      </Container>
    </div>
  );
};

export default Streaks;

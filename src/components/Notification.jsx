import React from 'react';
import './css/notification.css';
import { Container, Row, Col } from 'react-bootstrap';

function Notification() {
    return (
        <div className="notification-page mt-4">
            <Container>
                <Row className="g-3 justify-content-center ">
                    <Col md={6} lg={6} className="notify-mini">
                        <Row className="mb-3">
                            <Col>
                                <h5 className="notification-title">Notifications</h5>
                                <p className="follow-requests">Follow requests <span className="dot">•</span> 1 new</p>
                            </Col>
                        </Row>

                        <div className="scrollable-content">
                            <Row className="section-label">
                                <Col><p>This Week</p></Col>
                            </Row>

                            <Row className="notification-item">
                                <Col xs={2}>
                                    <img src="/images/user1.jpg" className="notify-profile-pic" alt="user" />
                                </Col>
                                <Col xs={7}>
                                    <span><strong>user123</strong> followed you. 5h</span>
                                </Col>
                                <Col xs={3} className="text-end">
                                    <button className="btn btn-sm btn-primary">Follow</button>
                                </Col>
                            </Row>

                            <Row className="section-label mt-4">
                                <Col><p>This Month</p></Col>
                            </Row>

                            {/** Static List Below to Exceed Height Limit */}
                            {[...Array(6)].map((_, i) => (
                                <Row className="notification-item" key={i}>
                                    <Col xs={2}>
                                        <img src={`/images/user${i + 2}.jpg`} className="notify-profile-pic" alt="user" />
                                    </Col>
                                    <Col xs={6}>
                                        <span><strong>user_{i + 2}</strong> requested to follow you.</span>
                                    </Col>
                                    <Col xs={4} className="d-flex justify-content-end">
                                        <button className="btn btn-sm btn-outline-primary me-1">Confirm</button>
                                        <button className="btn btn-sm btn-outline-danger">Delete</button>
                                    </Col>
                                </Row>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Notification;

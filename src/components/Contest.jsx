import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import './css/Contest.css';
import { Heart } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Contest = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Your pair photo is submitted!');
    };

    // Set contest dates (adjust as needed)
    const startDate = new Date('2025-08-10T00:00:00+05:30'); // Start: August 10, 2025, 00:00 IST
    const endDate = new Date('2025-08-20T23:59:59+05:30');   // End: August 20, 2025, 23:59 IST
    const currentDate = new Date('2025-08-08T16:39:00+05:30'); // Current: August 08, 2025, 04:39 PM IST

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    function calculateTimeLeft() {
        const now = new Date();
        const difference = endDate - now;

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((difference % (1000 * 60)) / 1000),
        };
    }

    const formatTime = ({ days, hours, minutes, seconds }) => {
        return `${days}d ${hours}h ${minutes}m ${seconds}s`;
    };

    const winners = [
        { name: 'Port Rachel & Parr George', image: '/assets/couple1.jpg', votes: 19230 },
        { name: 'Root Master & Poor Libtone', image: '/assets/couple2.jpg', votes: 18420 },
        { name: 'Pair Nouvred & Per Prnes', image: '/assets/couple3.jpg', votes: 17200 },
        { name: 'Jina Kross & Muno Greg', image: '/assets/couple4.jpg', votes: 16500 },
          { name: 'Pair Nouvred & Per Prnes', image: '/assets/couple5.jpg', votes: 17200 },
        { name: 'Jina Kross & Muno Greg', image: '/assets/couple6.jpg', votes: 16500 },
    ];

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <Container className="contest-container ">
            <Row className="g-4 justify-content-center">
                <Col xs={12} sm={10} md={8} lg={4}>
                    <Card className="upload-card ">
                        <div className="p-3">
                            <h3 className="card-title-box">Upload your <br />best pair picture</h3>
                            <p className="upload-label">To contest, upload your picture</p>
                        </div>

                        <div className="white-box">
                            <Row className="g-4 justify-content-center">
                                <Col xs={6} sm={6} md={6} lg={6} className='text-center'>
                                    <p className="card-desc">
                                        Contest Start:
                                    </p>
                                    <p>August 10, 2025</p>
                                </Col>

                                <Col xs={6} sm={6} md={6} lg={6} className='text-center'>
                                    <p className="card-desc">
                                        Contest End:
                                    </p>
                                    <p> August 20, 2025</p>
                                </Col>
                            </Row>


                            <form onSubmit={handleSubmit}>

                                <div className="date-picker">
                                    <div className="countdown-section">

                                        <div className="countdown-timer-grid">
                                            <div className="timer-box">
                                                <span className="timer-value">{timeLeft.days}</span>
                                                <span className="timer-label">Days</span>
                                            </div>
                                            <div className="timer-box">
                                                <span className="timer-value">{timeLeft.hours}</span>
                                                <span className="timer-label">Hours</span>
                                            </div>
                                            <div className="timer-box">
                                                <span className="timer-value">{timeLeft.minutes}</span>
                                                <span className="timer-label">Minutes</span>
                                            </div>
                                            <div className="timer-box">
                                                <span className="timer-value">{timeLeft.seconds}</span>
                                                <span className="timer-label">Seconds</span>
                                            </div>
                                        </div>

                                    </div>
                                    <button className="submit-btn">Submit entry</button>
                                </div>
                            </form>
                        </div>

                    </Card>
                </Col>
            </Row>

            <Row className="g-4 justify-content-center ">
                <Col xs={12} sm={10} md={8} lg={4}>
                    <div className="past-winners-section">
                        <h3 className="text-white text-left">Past Challenge Winners</h3>
                        <Slider {...sliderSettings}>
                            {winners.map((winner, index) => (
                                <div className="winner-slide" key={index}>
                                    <Card className="winner-card">
                                        <img src={winner.image} alt={winner.name} className="winner-img" />
                                        <p className="winner-name">{winner.name}</p>
                                        <div className="vote-info">
                                            <Heart size={14} className="heart-icon-pink" />
                                            <span>{winner.votes.toLocaleString()} Votes</span>
                                        </div>
                                    </Card>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Contest;
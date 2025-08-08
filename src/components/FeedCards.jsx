import React from "react";
import "./css/FeedCards.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Heart, MessageCircle } from "lucide-react";
import { Link } from 'react-router-dom';



// Static user profiles
const users = [
  {
    name: "Aarohi Singh",
    age: 26,
    bio: "Painter and Dreamer",
    img: "https://i.imgur.com/3GvwNBf.jpg"
  },
  {
    name: "Meera Nair",
    age: 29,
    bio: "Fitness Coach & Traveler",
    img: "https://i.imgur.com/WC6kLcw.jpg"
  },
  {
    name: "Priya Desai",
    age: 24,
    bio: "Fashion Designer",
    img: "https://i.imgur.com/nmnWlIg.jpg"
  },
  {
    name: "Rhea Kapoor",
    age: 28,
    bio: "Cat Mom & Bookworm",
    img: "https://i.imgur.com/8Km9tLL.png"
  },
  {
    name: "Sanya Malhotra",
    age: 27,
    bio: "Photographer & Writer",
    img: "https://i.imgur.com/VyzbTdt.jpg"
  },
  {
    name: "Ishita Reddy",
    age: 25,
    bio: "Dancer and Foodie",
    img: "https://i.imgur.com/eN2aZQp.jpg"
  }
];

const FeedCards = () => {
  return (
    <Container className="pt-4 pt-md-5">
      <Row className="g-4 justify-content-center">
        {users.map((user, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={4}>
            <Card className="feedcard p-3 text-center">
              <div className="feedcard-top d-flex justify-content-between">
                <div className="profile-icon">👤</div>
              </div>

              <div className="profile-pic-wrapper my-3">
                <div className="profile-pic mx-auto">
                  <img src={user.img} alt={user.name} />
                </div>

                <div className="action-buttons mt-2 d-flex justify-content-center gap-3">
                  <div className="icon heart-icon">
                    <Heart size={20} color="#f54ea2" />
                  </div>
                  <div className="icon chat-icon">
                    <MessageCircle size={20} color="#f54ea2" />
                  </div>
                </div>
              </div>

              <div className="profile-info mt-2">
                <h5>{user.name}, {user.age} years old</h5>
                <p className="mb-2 text-muted">{user.bio}</p>
              </div>

              <Link to="/partnermatch" className="text-decoration-none">
                <button className="date-button mt-2">Streak Me</button>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FeedCards;

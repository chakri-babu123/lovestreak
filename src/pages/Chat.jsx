import React, { useState } from 'react';
import { Container, Row, Col, Tab, Nav, Form, Button } from 'react-bootstrap';
import './css/Chat.css';

const users = {
  collections: [
    { id: 1, name: 'Aarav 💖', message: 'Hey! Long time...', time: '07:40', avatar: 'https://i.pravatar.cc/80?img=11' },
    { id: 2, name: 'Kiara 💕', message: 'How are you?', time: 'Thu', avatar: 'https://i.pravatar.cc/80?img=12' },
    { id: 3, name: 'Aarav 💖', message: 'Hey! Long time...', time: '07:40', avatar: 'https://i.pravatar.cc/80?img=11' },
    { id: 4, name: 'Kiara 💕', message: 'How are you?', time: 'Thu', avatar: 'https://i.pravatar.cc/80?img=12' },
     { id: 1, name: 'Aarav 💖', message: 'Hey! Long time...', time: '07:40', avatar: 'https://i.pravatar.cc/80?img=11' },
    { id: 2, name: 'Kiara 💕', message: 'How are you?', time: 'Thu', avatar: 'https://i.pravatar.cc/80?img=12' },
    { id: 3, name: 'Aarav 💖', message: 'Hey! Long time...', time: '07:40', avatar: 'https://i.pravatar.cc/80?img=11' },
    { id: 4, name: 'Kiara 💕', message: 'How are you?', time: 'Thu', avatar: 'https://i.pravatar.cc/80?img=12' },
  ],
  requests: [
    { id: 3, name: 'Vivaan 💓', mutual: '3 mutual friends', avatar: 'https://i.pravatar.cc/80?img=13' },
    { id: 4, name: 'Anaya 💘', mutual: '1 common event', avatar: 'https://i.pravatar.cc/80?img=14' },
     { id: 3, name: 'Vivaan 💓', mutual: '3 mutual friends', avatar: 'https://i.pravatar.cc/80?img=13' },
    { id: 4, name: 'Anaya 💘', mutual: '1 common event', avatar: 'https://i.pravatar.cc/80?img=14' },
     { id: 3, name: 'Vivaan 💓', mutual: '3 mutual friends', avatar: 'https://i.pravatar.cc/80?img=13' },
    { id: 4, name: 'Anaya 💘', mutual: '1 common event', avatar: 'https://i.pravatar.cc/80?img=14' },
  ],
};

const Chat = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [activeTab, setActiveTab] = useState('collections');
  const [messages, setMessages] = useState([]);
  const [newMsg, setNewMsg] = useState('');

  const handleSend = () => {
    if (newMsg.trim()) {
      setMessages([...messages, { fromMe: true, text: newMsg }]);
      setNewMsg('');
    }
  };

  return (
    <Container className="chat-container mt-4 py-3">
      <Row className="g-3 justify-content-center">
        <Col md={6} lg={6} className="chart-mini p-4 ">
          {!selectedUser ? (
            <>
              <Row className="mb-3">
                <Col>
                  <Form.Control type="text" placeholder="Search" className="search-input" />
                </Col>
              </Row>

              <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
                <Row className="mb-3">
                  <Col>
                    <Nav variant="tabs" className="chat-tabs">
                      <Nav.Item>
                        <Nav.Link eventKey="collections">Connections</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="requests">Request</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Tab.Content>
                     <Tab.Pane eventKey="collections">
  <div className="user-scroll-container">
    {users.collections.map((user) => (
      <Row
        key={user.id}
        className="chat-item align-items-center"
        onClick={() => setSelectedUser(user)}
      >
        <Col xs="auto">
          <img src={user.avatar} alt={user.name} className="chat-avatar" />
        </Col>
        <Col>
          <div className="chat-top d-flex justify-content-between">
            <span className="chat-name">{user.name}</span>
            <span className="chat-time">{user.time}</span>
          </div>
          <div className="chat-msg">{user.message}</div>
        </Col>
      </Row>
    ))}
  </div>
</Tab.Pane>

<Tab.Pane eventKey="requests">
  <div className="user-scroll-container">
    {users.requests.map((user) => (
      <Row key={user.id} className="chat-item align-items-center">
        <Col xs="auto">
          <img src={user.avatar} alt={user.name} className="chat-avatar" />
        </Col>
        <Col>
          <span className="chat-name">{user.name}</span>
          <div className="text-muted small">{user.mutual}</div>
        </Col>
        <Col xs="auto" className="d-flex gap-2">
          <Button variant="danger" size="sm">Accept</Button>
          <Button variant="light" size="sm">Delete</Button>
        </Col>
      </Row>
    ))}
  </div>
</Tab.Pane>

                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </>
          ) : (
            <Row>
              <Col>
                <div className="chat-box">
                  <div className="chat-header d-flex align-items-center gap-2 mb-2">
                    <Button variant="light" onClick={() => setSelectedUser(null)}>⬅</Button>
                    <strong>{selectedUser.name}</strong>
                  </div>
                  <div className="chat-messages">
                    {messages.map((msg, idx) => (
                      <div key={idx} className={`chat-bubble ${msg.fromMe ? 'from-me' : 'from-them'}`}>
                        {msg.text}
                      </div>
                    ))}
                  </div>
                  <Form className="chat-input d-flex">
                    <Form.Control
                      type="text"
                      placeholder="Type a message..."
                      value={newMsg}
                      onChange={(e) => setNewMsg(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    />
                    <Button variant="danger" onClick={handleSend}>❤️</Button>
                  </Form>
                </div>
              </Col>
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Chat;

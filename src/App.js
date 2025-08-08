import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomNavbar from './components/Navbar';
import Home from './pages/Home';
import Streaks from './pages/Streaks';
import Feeds from './pages/Feeds';
import Chat from './pages/Chat';
import Profile from './pages/Profile';

import './App.css'; // <-- This includes .page-content styles
import UserProfileView from './components/UserProfileView';
import UserSettings from './components/UserSettings';
import FeedCards from './components/FeedCards';
import Notification from './components/Notification';
import LoveNote from './components/LoveNote';
import SinglesCard from './components/SinglesCard';
import PartnerMatch from './components/PartnerMatch';
import LoveGame from './components/LoveGame';
import Contest from './components/Contest';

function App() {
  return (
    <Router>
      <CustomNavbar />
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/streaks" element={<Streaks />} />
          <Route path="/feeds" element={<Feeds />} />
          <Route path="/notifications" element={<Notification />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/userprofileview" element={<UserProfileView />} />
          <Route path="/usersettings" element={<UserSettings />} />
          <Route path="/feedcards" element={<FeedCards />} />
          <Route path="/lovenote" element={<LoveNote />} />
          <Route path="/singlescard" element={<SinglesCard />} />
          <Route path="/partnermatch" element={<PartnerMatch />} />
          <Route path="/lovegame" element={<LoveGame />} />
          <Route path="/contest" element={<Contest />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

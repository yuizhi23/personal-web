import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageLayout from './components/layout/PageLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ExperiencePage from './pages/ExperiencePage';
import EducationPage from './pages/EducationPage';
import SkillsPage from './pages/SkillsPage';
import VoiceOverPage from './pages/VoiceOverPage';
import DesignPage from './pages/DesignPage';
import AchievementsPage from './pages/AchievementsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="experience" element={<ExperiencePage />} />
          <Route path="education" element={<EducationPage />} />
          <Route path="skills" element={<SkillsPage />} />
          <Route path="voice-over" element={<VoiceOverPage />} />
          <Route path="design" element={<DesignPage />} />
          <Route path="achievements" element={<AchievementsPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
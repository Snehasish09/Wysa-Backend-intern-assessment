import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import NicknamePage from './components/NicknamePage';
import SleepChangesPage from './components/SleepChangesPage';
import StruggleDurationPage from './components/StruggleDurationPage';
import BedtimePage from './components/BedtimePage';
import WakeUpTimePage from './components/WakeupTimePage';
import SleepHoursPage from './components/SleepHoursPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/nickname" element={<NicknamePage />} />
        <Route path="/sleep-changes" element={<SleepChangesPage />} />
        <Route path="/struggle-duration" element={<StruggleDurationPage />} />
        <Route path="/bedtime" element={<BedtimePage />} />
        <Route path="/wakeup-time" element={<WakeUpTimePage />} />
        <Route path="/sleep-hours" element={<SleepHoursPage />} />
      </Routes>
    </Router>
  );
}

export default App;

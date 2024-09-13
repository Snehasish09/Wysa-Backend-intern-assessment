import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './WakeupTimePage.css';

function WakeUpTimePage() {
    const [wakeupTime, setWakeupTime] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const isValidTime = (time) => {
        const timeRegex = /^([0-9]{1,2}):([0-9]{2})\s?(AM|PM)$/i;
        return timeRegex.test(time);
    };

    const handleNext = async () => {
        if (!isValidTime(wakeupTime)) {
            setError('Please enter a valid time in the format HH:MM AM/PM.');
            return;
        }

        try {

            navigate('/sleep-hours');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="wakeuptime-page">
            <h3>What time do you get out of bed to start your day?</h3>
            <input
                type="text"
                value={wakeupTime}
                onChange={(e) => setWakeupTime(e.target.value)}
                placeholder="HH:MM AM/PM"
            />
            {error && <p className="error">{error}</p>}
            <button className="next-btn" onClick={handleNext}>Next</button>
        </div>
    );
}

export default WakeUpTimePage;

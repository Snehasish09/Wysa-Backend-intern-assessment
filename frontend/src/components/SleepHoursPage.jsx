import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SleepHoursPage.css';

function SleepHoursPage() {
    const [sleepHours, setSleepHours] = useState(7);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleNext = async () => {
        if (sleepHours < 1 || sleepHours > 12) {
            setError('Please select a valid number of sleep hours between 1 and 12.');
            return;
        }

        try {
            await axios.post('http://localhost:3000/user/addsleephours', { sleepHours });

        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="sleep-hours-page">
            <h3>How many hours sleep do you get in a typical night?</h3>
            <input
                type="number"
                min="1"
                max="12"
                value={sleepHours}
                onChange={(e) => setSleepHours(e.target.value)}
            />
            {error && <p className="error">{error}</p>}
            <button className="next-btn" onClick={handleNext}>Submit</button>
        </div>
    );
}

export default SleepHoursPage;

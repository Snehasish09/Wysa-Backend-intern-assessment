import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './BedtimePage.css';

function BedtimePage() {
    const [bedtime, setBedtime] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const isValidTime = (time) => {
        const timeRegex = /^([0-9]{1,2}):([0-9]{2})\s?(AM|PM)$/i;
        return timeRegex.test(time);
    };

    const handleNext = async () => {
        if (!isValidTime(bedtime)) {
            setError('Please enter a valid time in the format HH:MM AM/PM.');
            return;
        }

        try {

            navigate('/wakeup-time');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="bedtime-page">
            <h3>What time do you go to bed?</h3>
            <input
                type="text"
                value={bedtime}
                onChange={(e) => setBedtime(e.target.value)}
                placeholder="HH:MM AM/PM"
            />
            {error && <p className="error">{error}</p>}
            <button className="next-btn" onClick={handleNext}>Next</button>
        </div>
    );
}

export default BedtimePage;

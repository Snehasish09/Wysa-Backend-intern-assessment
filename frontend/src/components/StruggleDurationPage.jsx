import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './StruggleDuration.css';

function StruggleDurationPage() {
    const [struggleDuration, setStruggleDuration] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleNext = async () => {
        if (!struggleDuration) {
            setError('Please select how long you have been struggling with your sleep.');
            return;
        }

        try {

            navigate('/bedtime');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="struggle-duration-page">
            <h3>How long have you been struggling with your sleep?</h3>
            <label>
                <input type="radio" name="struggle" value="Less than 2 weeks" onChange={() => setStruggleDuration('Less than 2 weeks')} />
                Less than 2 weeks
            </label>
            <label>
                <input type="radio" name="struggle" value="2 to 8 weeks" onChange={() => setStruggleDuration('2 to 8 weeks')} />
                2 to 8 weeks
            </label>
            <label>
                <input type="radio" name="struggle" value="More than 8 weeks" onChange={() => setStruggleDuration('More than 8 weeks')} />
                More than 8 weeks
            </label>
            {error && <p className="error">{error}</p>}
            <button className="next-btn" onClick={handleNext}>Next</button>
        </div>
    );
}

export default StruggleDurationPage;

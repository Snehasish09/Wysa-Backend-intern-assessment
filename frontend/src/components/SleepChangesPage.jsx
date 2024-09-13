import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SleepChangesPage.css';

function SleepChangesPage() {
    const [changes, setChanges] = useState([]);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSelect = (change) => {
        setChanges(prev => {
            if (prev.includes(change)) {
                return prev.filter(c => c !== change);
            } else {
                return [...prev, change];
            }
        });
    };

    const handleNext = async () => {
        if (changes.length === 0) {
            setError('Please select at least one change.');
            return;
        }

        try {
            navigate('/struggle-duration');
        } catch (err) {
            setError('Failed to submit changes. Please try again.');
            console.error(err);
        }
    };

    return (
        <div className="sleep-changes-page">
            <h3>Select all the changes you would like to see</h3>
            <label>
                <input type="checkbox" value="goToSleepEasily" onChange={() => handleSelect('goToSleepEasily')} />
                I would go to sleep easily
            </label>
            <label>
                <input type="checkbox" value="sleepThroughNight" onChange={() => handleSelect('sleepThroughNight')} />
                I would sleep through the night
            </label>
            <label>
                <input type="checkbox" value="wakeUpRefreshed" onChange={() => handleSelect('wakeUpRefreshed')} />
                I'd wake up on time, refreshed
            </label>
            {error && <p className="error">{error}</p>}
            <button className="next-btn" onClick={handleNext}>Next</button>
        </div>
    );
}

export default SleepChangesPage;

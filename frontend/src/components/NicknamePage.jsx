import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './NicknamePage.css';

function NicknamePage() {
    const [nickname, setNickname] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleNext = async () => {
        if (!nickname) {
            setError('Please enter a nickname.');
            return;
        }

        try {

            const registerResponse = await axios.post('http://localhost:3000/user/register', {
                nickname,
                password: 'defaultPassword'
            });

            if (registerResponse.data.success) {

                const loginResponse = await axios.post('http://localhost:3000/user/login', {
                    nickname,
                    password: 'defaultPassword'
                });

                const token = loginResponse.data.token;
                localStorage.setItem('token', token);

                navigate('/sleep-changes');
            } else {
                setError('Registration failed.');
            }
        } catch (err) {
            setError('Nickname already exists.');
        }
    };

    return (
        <div className="nickname-page">
            <h2 className="nickname-title">Choose a nickname and let's go</h2>
            <input
                className="nickname-input"
                type="text"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                placeholder="Enter Nickname"
            />
            {error && <p className="error">{error}</p>}
            <button className="next-btn" onClick={handleNext}>Next</button>
        </div>
    );
}

export default NicknamePage;

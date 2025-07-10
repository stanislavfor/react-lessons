// src/components/TemperatureConverter.js

import React, { useState } from 'react';
import { TextField, Box, Typography } from '@mui/material';

const TemperatureConverter = () => {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');

    const handleCelsiusChange = (e) => {
        const value = e.target.value;
        setCelsius(value);
        if (!isNaN(value)) {
            setFahrenheit(((parseFloat(value) * 9) / 5 + 32).toFixed(2));
        }
    };

    const handleFahrenheitChange = (e) => {
        const value = e.target.value;
        setFahrenheit(value);
        if (!isNaN(value)) {
            setCelsius((((parseFloat(value) - 32) * 5) / 9).toFixed(2));
        }
    };

    return (
        <Box sx={{ padding: 4 }}>
            <Typography variant="h5" gutterBottom>
                Температурный конвертер
            </Typography>
            <TextField
                label="Цельсий"
                variant="outlined"
                value={celsius}
                onChange={handleCelsiusChange}
                margin="normal"
                fullWidth
            />
            <TextField
                label="Фаренгейт"
                variant="outlined"
                value={fahrenheit}
                onChange={handleFahrenheitChange}
                margin="normal"
                fullWidth
            />
        </Box>
    );
};

export default TemperatureConverter;
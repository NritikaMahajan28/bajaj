import React, { useState } from 'react';
import axios from 'axios';
import FilterDropdown from './FilterDropdown';
import ResponseDisplay from './ResponseDisplay';

const InputForm = () => {
    const [inputData, setInputData] = useState('');
    const [response, setResponse] = useState(null);
    const [filters, setFilters] = useState([]);
    const [error, setError] = useState('');

    const handleSubmit = async () => {
        setError('');
        try {
            const parsedData = JSON.parse(inputData);
            const res = await axios.post('https://<your-heroku-app>.herokuapp.com/bfhl', parsedData);
            setResponse(res.data);
        } catch (err) {
            setError('Invalid JSON input');
        }
    };

    return (
        <div>
            <textarea
                value={inputData}
                onChange={(e) => setInputData(e.target.value)}
                placeholder="Enter JSON data"
            />
            <button onClick={handleSubmit}>Submit</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {response && (
                <>
                    <FilterDropdown filters={filters} setFilters={setFilters} />
                    <ResponseDisplay response={response} filters={filters} />
                </>
            )}
        </div>
    );
};

export default InputForm;
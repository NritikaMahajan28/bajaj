import React from 'react';

const ResponseDisplay = ({ response, filters }) => {
    const filteredResponse = () => {
        const { numbers, alphabets, highest_alphabet } = response;
        let filtered = {};
        if (filters.includes('numbers')) filtered.numbers = numbers;
        if (filters.includes('alphabets')) filtered.alphabets = alphabets;
        if (filters.includes('highest_alphabet')) filtered.highest_alphabet = highest_alphabet;
        return filtered;
    };

    return (
        <pre>{JSON.stringify(filteredResponse(), null, 2)}</pre>
    );
};

export default ResponseDisplay;
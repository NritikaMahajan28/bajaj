import React from 'react';

const FilterDropdown = ({ filters, setFilters }) => {
    const handleFilterChange = (e) => {
        const value = e.target.value;
        setFilters(prevFilters =>
            prevFilters.includes(value)
                ? prevFilters.filter(f => f !== value)
                : [...prevFilters, value]
        );
    };

    return (
        <select multiple onChange={handleFilterChange}>
            <option value="numbers">Numbers</option>
            <option value="alphabets">Alphabets</option>
            <option value="highest_alphabet">Highest Alphabet</option>
        </select>
    );
};

export default FilterDropdown;
import React, { useState } from 'react';
import '../styles/App.css';

const data = {
  '2018': [
    'Avengers 1',
    'Now you see me',
    'Fast and Furious 7'
  ],
  '2019': [
    'Avengers 2',
    'Now you see me 2',
    'Fast and Furious 8'
  ],
  '2020': [
    'Final Avengers Movie(Iron man dies)',
    'Now you finally used Lenskart',
    'Covid Came'
  ],
  '2021': [
    'Covid Returns',
  ],
  '2022': [
    'Adventures of Saiman',
    'Adventures of Shaktiman'
  ]
}

const App = () => {
  const [selectedYear, setSelectedYear] = useState(null);

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  }

  const movieList = selectedYear ? (
    <ul>
      {data[selectedYear].map(movie => <li key={movie}>{movie}</li>)}
    </ul>
  ) : null;

  return (
    <div id="main">
      <select onChange={handleYearChange}>
        <option value={null}>No year selected</option>
        {Object.keys(data).map(year => <option key={year} value={year}>{year}</option>)}
      </select>
      <div id="selected-year">{selectedYear ? `Selected year-${selectedYear}` : 'No year selected'}</div>
      {movieList}
    </div>
  );
}

export default App;


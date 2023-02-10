import React, { useState } from "react";

function App() {
  const [selectedYear, setSelectedYear] = useState(null);
  const data = {
    2020: ["Movie 1", "Movie 2", "Movie 3"],
    2021: ["Movie 4", "Movie 5", "Movie 6"],
    2022: ["Movie 7", "Movie 8", "Movie 9"]
  };

  const handleChange = (event) => {
    setSelectedYear(event.target.value);
  };

  return (
    <div>
      <select onChange={handleChange} value={selectedYear}>
        <option value={null}></option>
        {Object.keys(data).map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
      <div id="selected-year">
        {selectedYear ? `Selected year: ${selectedYear}` : "No year selected"}
        {selectedYear ? (
          <ul>
            {data[selectedYear].map((movie) => (
              <li key={movie}>{movie}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";

export default function SearchEngine() {
  let [city, setCity] = useState("");
  let [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(`It is currently 4°C in ${city}`);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="SearchEngine">
      <form onSubmit={handleSubmit}>
        <input
          onChange={updateCity}
          type="text"
          placeholder="Enter a city"
          autoComplete="off"
          className="text-input"
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-outline-secondary mb-1"
        />
      </form>
      <h2>{message}</h2>
    </div>
  );
}

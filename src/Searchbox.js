import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'


function Searchbox({ setSearchfood }) {
  return (
    <div className="search">
      <div>
        {/* Searchbar for the filter function */}
        <input
          type="text"
          placeholder="Search your fav food recipe"
          onChange={(event) => setSearchfood(event.target.value)}
        ></input>
      </div>
    </div>
  );
}

export { Searchbox };

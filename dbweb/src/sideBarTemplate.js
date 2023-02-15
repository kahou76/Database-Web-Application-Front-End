import React from 'react';

const App = () => {
  return (
    <div className="w3-sidebar w3-bar-block w3-light-grey" style={{ width: '50%' }}>
      <div className="w3-container w3-dark-grey">
        <h4>Menu</h4>
      </div>

      <a href="#" className="w3-bar-item w3-button">Home</a>
      <a href="#" className="w3-bar-item w3-button">Projects</a>
      <a href="#" className="w3-bar-item w3-button">About</a>
      <a href="#" className="w3-bar-item w3-button">Contact</a>
    </div>
  );
}

export default App;

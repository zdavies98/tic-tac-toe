import React from 'react';

function RefreshButton() {
  // Function to handle button click and refresh the page
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div>
      <button className="button" onClick={refreshPage}>New Game</button>
    </div>
  );
}

export default RefreshButton;

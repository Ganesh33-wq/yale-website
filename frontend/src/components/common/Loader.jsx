import React from 'react';

const Loader = ({ size = 'large' }) => {
  return (
    <div className={`loader-container ${size}`}>
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;

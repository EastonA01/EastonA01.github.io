import React from 'react';
import '../App.css'; // Save the CSS in this file

const ButtonCircle = () => {
  return (
    <div className="page-scroll text-center">
      <a href="#about" className="btn btn-circle">
        <i className="fa fa-angle-down fa-2x animated"></i>
      </a>
    </div>
  );
};

export default ButtonCircle;

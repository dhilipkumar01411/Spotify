import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Toggg.css'; // Import your CSS file
import manipaya from './audio/manipaya.mp3'

const Togg = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="app">
        <Link onClick={toggleModal}>Open Modal</Link>
      {/* <button onClick={toggleModal}>Open Modal</button> */}
      {isOpen && <Modal onClose={toggleModal} />}
    </div>
  );
};

const Modal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        
        <button><audio src={manipaya} controls>
Your browser does not support the audio element.
</audio></button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Togg;

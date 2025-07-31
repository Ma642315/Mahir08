import React from "react";

const BookingModal = ({ isOpen, onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for booking! We will contact you soon.");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Book a Table</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" required /><br /><br />
          <label>Phone:</label>
          <input type="tel" required /><br /><br />
          <label>Date:</label>
<input type="date" required /><br /><br />
          <label>Time:</label>
          <input type="time" required /><br /><br />
          <button className="btn-orange" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
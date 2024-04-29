import React from 'react';

const AlertModal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
        <button onClick={onClose}>Close Modal</button>
      </div>
    </div>
  );
};

export default AlertModal;

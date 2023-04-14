import React, { useRef } from 'react';
import './Modal.css'

export default function Modal({ show, onClose, title, children }) {
    const modalRef = useRef(null);

    const handleOutsideClick = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            onClose();
        }
    };

    const modalStyle = {
        display: show ? 'block' : 'none',
    };

    return (
        <div className="modal" style={modalStyle} onClick={handleOutsideClick}>
            <div className="modal-content" ref={modalRef}>
                <div className='title-wrapper'>
                    <h2 className='title'>{title}</h2>
                    <span className="close-button" onClick={onClose}>
                        &times;
                    </span>
                </div>
                {children}
            </div>
        </div>
    );
}
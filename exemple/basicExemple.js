// OPTION 1: useModal hook
import React from 'react';
import useModal from './useModal';

export default function Button() {
    const { show, openModal, closeModal, Modal } = useModal();

    return (
        <div className="button">
            <button onClick={openModal}>Ouvrir la modal</button>
            <Modal show={show} onClose={closeModal} title="Titre">
                <p>Ceci est le contenu de ma modal lorem ipsum</p>
            </Modal>
        </div>
    );
}

// OPTION 2: Modal component
import React, { useState } from 'react';
import Modal from './Modal';

export default function Button() {
    const [showModal, setShowModal] = useState(false);

    const handleButtonClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="button">
            <button onClick={handleButtonClick}>Ouvrir la modal</button>
            <Modal show={showModal} onClose={handleCloseModal} title="Titre">
                <p>Ceci est le contenu de ma modal lorem ipsum</p>
            </Modal>
        </div>
    );
}
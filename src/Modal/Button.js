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

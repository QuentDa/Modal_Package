import { useState } from 'react';
import Modal from './Modal';

export default function useModal() {
    const [show, setShow] = useState(false);

    const openModal = () => {
        setShow(true);
    };

    const closeModal = () => {
        setShow(false);
    };

    return {
        show,
        openModal,
        closeModal,
        Modal,
    };
}

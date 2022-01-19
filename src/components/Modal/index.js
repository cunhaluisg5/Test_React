import React from "react";
import Modal from 'react-modal';

const ModalScreen = ({modalIsOpen, closeModal, title}) => {
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            ariaHideApp={false}
        >
            <h2>{title}</h2>
            <button onClick={closeModal}>Fechar</button>
        </Modal>
    );
};

export default ModalScreen;
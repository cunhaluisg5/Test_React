import React from "react";
import Modal from 'react-modal';

import { Container } from "../Modal/style";

const ModalScreen = ({ modalIsOpen, closeModal, title, contents }) => {
    const customStyles = {
        content: {
            textAlign: "center"
        },
    };

    return (
        <Container>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                ariaHideApp={false}
                style={customStyles}
            >
                <h2>{title}</h2>
                {contents}
                <button onClick={closeModal}>Fechar</button>
            </Modal>
        </Container>
    );
};

export default ModalScreen;
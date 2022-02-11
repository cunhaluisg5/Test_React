import React from "react";
import Modal from "react-modal";

import { Container, Buttons, Area, Salvar, Enviar, Fechar } from "../Modal/style";

const ModalScreen = ({ modalIsOpen, closeModal, title, contents, saveState, save, lodCommentary, commentary, setCommentary }) => {
    const customStyles = {
        content: {
            textAlign: "center"
        },
    };

    const handleChange = (event) => {
        setCommentary(event.target.value);
    }

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
                {lodCommentary && <Area
                    value={commentary}
                    onChange={handleChange}
                    placeholder="Deixe um comentário..."
                />}
                <Buttons>
                    {saveState && <Salvar onClick={saveState}>Salvar</Salvar>}
                    {save && <Enviar onClick={save}>Enviar</Enviar>}
                    {<Fechar onClick={closeModal}>Fechar</Fechar>}
                </Buttons>
            </Modal>
        </Container>
    );
};

export default ModalScreen;
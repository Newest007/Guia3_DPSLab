import React from "react";
import Modal from "react-modal";

const DetalleLibroModal = ({ product, isOpen, onRequestClose }) => {
    
    if (!product) {
        return null; 
    }
    
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Detalle del Libro"
      >
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <button onClick={onRequestClose}>Cerrar</button>
      </Modal>
    );

    /*
    return (
      <Modal show={isOpen} onHide={onRequestClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Detalle del Libro: {product.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{product.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onRequestClose}>
            Cerrar
        </Button>
        </Modal.Footer>
      </Modal>
    );*/
  };
  
  export default DetalleLibroModal;
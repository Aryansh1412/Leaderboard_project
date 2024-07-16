import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Bind modal to your app element (root div)

interface ImagePopupProps {
  isOpen: boolean;
  onRequestClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

const ImagePopup: React.FC<ImagePopupProps> = ({ isOpen, onRequestClose, imageSrc, imageAlt }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Popup"
      className="modal"
      overlayClassName="overlay"
    >
      <div className="modal-content">
        <img src={imageSrc} alt={imageAlt} className="popup-image" />
        <button onClick={onRequestClose} className="close-button">Close</button>
      </div>
    </Modal>
  );
};

export default ImagePopup;

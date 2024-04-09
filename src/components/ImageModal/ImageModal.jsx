import css from '../ImageModal/ImageModal.module.css'
import Modal from 'react-modal'


const ImageModal = ({ isOpen, onClose, selectedImage }) => {
  if (!selectedImage) return null

  const handleCloseModal = () => {
    onClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={(handleCloseModal, onClose)}
      overlayClassName={css.modalOverlay}
      className={css.modal}
      ariaHideApp={true}
      shouldCloseOnOverlayClick={true}
    >
      <button className={css.modalCloseButton} onClick={handleCloseModal}>
        {/* <img className={css.modalCloseButtonIcon} src={} alt="Close" /> */}
      </button>
      <div className={css.modalContent}>
        <div className={css.modalImage}>
          <img
            className={css.modalImageImg}
            src={selectedImage.urls.regular}
            alt={selectedImage.alt_description}
          />
        </div>
        <div className={css.modalInfo}>
          <h2 className={css.alt_description}>
            {' '}
            {selectedImage.alt_description}
          </h2>
          <br />
          <h4 className={css.imageCardLikes}>Likes: {selectedImage.likes}</h4>
        </div>
      </div>
    </Modal>
  )
}

export default ImageModal
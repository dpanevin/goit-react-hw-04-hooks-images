import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export function Modal({ closeModal, data }) {
  const [url] = useState(data.url);
  const [tags] = useState(data.tags);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.code === 'Escape') {
        closeModal();
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [closeModal]);

  function OverlayClick(e) {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }

  return createPortal(
    <div className="Overlay" onClick={OverlayClick}>
      <div className="Modal">
        <img src={url} alt={tags} />
      </div>
    </div>,
    modalRoot,
  );
}

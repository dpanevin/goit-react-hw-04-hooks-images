import { useState } from 'react';
import Loader from 'react-loader-spinner';
import { ImageGallery } from './ImageGallery/ImageGallery';
import ImagesApi from 'utils/ImagesApi';
import { Searchbar } from './Searchbar/Searchbar';
import { Modal } from './Modal/Modal';

const imagesApi = new ImagesApi();

export function ImageFinder() {
  const [images, setImages] = useState([]);
  const [status, setStatus] = useState('idle');
  const [modalData, setModalData] = useState(null);

  async function fetchImagesApi() {
    setStatus('pending');

    const response = await imagesApi.fetchImages();
    setStatus('resloved');
    return response.hits;
  }

  async function onSubmit(query) {
    imagesApi.resetPage();
    imagesApi.query = query;

    const images = await fetchImagesApi();
    setImages(images);
  }

  async function onMoreBtnClick() {
    imagesApi.incrementPage();

    const images = await fetchImagesApi();
    setImages(prevState => [...prevState, ...images]);

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  function openModal(url, tags) {
    setModalData({ url, tags });
  }

  function closeModal() {
    setModalData(null);
  }

  return (
    <>
      <Searchbar onSubmit={onSubmit} />
      <ImageGallery
        images={images}
        onMoreBtnClick={onMoreBtnClick}
        openModal={openModal}
      />
      {status === 'pending' && (
        <Loader
          className="Loader"
          type="Oval"
          color="rgb(0, 224, 217)"
          height={100}
          width={100}
        />
      )}

      {modalData && <Modal data={modalData} closeModal={closeModal} />}
    </>
  );
}

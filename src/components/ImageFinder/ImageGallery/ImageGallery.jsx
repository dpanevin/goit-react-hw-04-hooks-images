import { LoadMoreButton } from '../LoadMoreButton/LoadMoreButton';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

export function ImageGallery({ images, onMoreBtnClick, openModal }) {
  return (
    <>
      <ul className="ImageGallery">
        {images.map(({ id, webformatURL, largeImageURL, tags }) => {
          return (
            <ImageGalleryItem
              key={id}
              image={webformatURL}
              largeImage={largeImageURL}
              tagsList={tags}
              openModal={openModal}
            />
          );
        })}
      </ul>
      {images.length !== 0 && <LoadMoreButton onClick={onMoreBtnClick} />}
    </>
  );
}

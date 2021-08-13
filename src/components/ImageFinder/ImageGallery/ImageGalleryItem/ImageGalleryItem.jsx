import { useState, useEffect } from 'react';

export function ImageGalleryItem({ image, largeImage, tagsList, openModal }) {
  const [imageUrl, setImageUrl] = useState('');
  const [largeImageUrl, setLargeImageUrl] = useState('');
  const [tags, setTags] = useState('');

  useEffect(() => {
    setImageUrl(image);
    setLargeImageUrl(largeImage);
    setTags(tagsList);
  }, [image, largeImage, tagsList]);

  function onClick() {
    openModal(largeImageUrl, tags);
  }

  return (
    <li className="ImageGalleryItem">
      <img
        onClick={onClick}
        src={imageUrl}
        alt={tags}
        className="ImageGalleryItem-image"
      />
    </li>
  );
}

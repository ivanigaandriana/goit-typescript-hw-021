import React from 'react'
import css from './ImageGallery.module.css'
import { ImageGalleryProps } from './ImageGallery.types'
import ImageCard from '../ImageCard/ImageCard'

const ImageGallery: React.FC<ImageGalleryProps>=({ images, openModal })=>{
  return (
    <ul className={css.imageGallery}>
      {Array.isArray(images) && images.length > 0 ? (
        images.map((image) => {
          return (
            <ImageCard
              key={image.id}
              small={image.urls.small}
              alt_description={image.alt_description}
              description={image.description}
              likes={image.likes}
              onClick={() => openModal(image)}
            />
          )
        })
      ) : (
        <p>No images to display</p>
      )}
    </ul>
  )
}

export default ImageGallery
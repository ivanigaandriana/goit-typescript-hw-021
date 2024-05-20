import css from './ImageCard.module.css';
import { ImageCardProps } from './ImageCard.types';
import React from 'react';

const ImageCard: React.FC<ImageCardProps> = ({ small, alt_description, description, likes, onClick }) =>{
  return (
    <li className={css.imageCard}>
      <img className={css.imageCardImg} src={small} alt={alt_description}  onClick={onClick} />
      <br />
      <h2 className={css.imageCardTitle}>Title: {alt_description}</h2>
      <br />
      <h3 className={css.imageCardDescription}>Description: {description}</h3>
      <br />
      <h4 className={css.imageCardLikes}>Likes: {likes}</h4>
    </li>
  )
}

export default ImageCard
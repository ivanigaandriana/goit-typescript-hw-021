import {IUnsplashImage} from "../services/api";
export interface ImageGalleryProps {
    images: IUnsplashImage[];
    openModal: (image: IUnsplashImage) => void;
  }
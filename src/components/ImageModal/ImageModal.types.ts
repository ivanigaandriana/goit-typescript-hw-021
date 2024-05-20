import {IUnsplashImage } from "../services/api";
export interface ImageModalProps {
    isOpen: boolean;
    onClose: () => void;
    selectedImage: IUnsplashImage | null;
}
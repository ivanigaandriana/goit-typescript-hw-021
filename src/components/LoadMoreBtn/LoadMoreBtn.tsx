import css from '../LoadMoreBtn/LoadMoreBtn.module.css'
import React from 'react';
import { LoadMoreBtnProps } from './LoadMoreBtn.types';
const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onSetPage, disable }) => {
  return (
    <button className={css.LoadMoreBtn} onClick={onSetPage} disabled={disable}>
      Load more
    </button>
  )
}

export default LoadMoreBtn
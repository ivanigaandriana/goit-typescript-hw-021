import css from '../LoadMoreBtn/LoadMoreBtn.module.css'

const LoadMoreBtn = ({ onSetPage, disable }) => {
  return (
    <button className={css.LoadMoreBtn} onClick={onSetPage} disabled={disable}>
      Load more
    </button>
  )
}

export default LoadMoreBtn
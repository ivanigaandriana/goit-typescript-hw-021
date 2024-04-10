// import css from './App.module.css'
import  { useState, useEffect } from 'react';
import { requestImagesByQuery } from './components/services/api';
import Searchbar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
// import Modal from 'react-modal'


function App() {
  const [pictures, setPictures] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [hasMoreImages, setHasMoreImages] = useState(true)
  const [selectedImage, setSelectedImage] = useState(null)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  useEffect(() => {
    if (query.length === 0) return

    async function fetchImagesByQuery() {
      setIsLoading(true)
      try {
        const data = await requestImagesByQuery(query, page)
        if (data.length < 10) {
          setHasMoreImages(false)
        }
        setPictures((prevPictures) => [...prevPictures, ...data])
      } catch (error) {
        setTimeout(() => {
          setIsError(true)
        }, 2000)
      } finally {
        setIsLoading(false)
      }
    }

    fetchImagesByQuery()
  }, [query, page])

  const onSetPage = () => {
    if (!hasMoreImages) return
    setPage(page + 1)
  }

  const onSetSearchQuery = (searchTerm) => {
    if (searchTerm === query) return
    setQuery(searchTerm)
    setPage(1)
    setHasMoreImages(true)
    setPictures([])
  }

  const openModal = (image) => {
    setSelectedImage(image)
    setModalIsOpen(true)
  }

  return (
    <div >
      <h1></h1>
      <Searchbar onSetSearchQuery={onSetSearchQuery} />
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      <ImageGallery images={pictures} openModal={openModal} />
      {hasMoreImages && pictures.length > 0 && (
        <LoadMoreBtn onSetPage={onSetPage} />
      )}
      {pictures.length === 0 && query !== '' && <h1>No images found</h1>}
      <ImageModal
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        selectedImage={selectedImage}
      />
    </div>
  )
}

export default App
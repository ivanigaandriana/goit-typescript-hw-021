import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import css from './SearchBar.module.css'
import { SearchBarProps, SearchBarValue } from './SearchBar.types'

const searchFormSchema = Yup.object().shape({
  searchTerm: Yup.string().required('Please enter a search term'),
})

const initialFormValue: SearchBarValue = {
  searchTerm: '',
}

const SearchBar: React.FC<SearchBarProps> = ({ onSetSearchQuery }) => {
  const handleSubmit = (value: SearchBarValue) => {
    onSetSearchQuery(value.searchTerm)
  }
  return (
    <Formik
      initialValues={initialFormValue}
      validationSchema={searchFormSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.searchForm}>
        <label>
          <Field
            className={css.searchFormImput}
            type="text"
            name="searchTerm"
            placeholder="Search for an image"
          />
          <ErrorMessage name="searchTerm" />
        </label>
        <button className={css.searchFormButton} type="submit">
          Search
        </button>
      </Form>
    </Formik>
  )
}

export default SearchBar;



import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import css from '../SearcBar/SearcBar.module.css'

const searchFormSchema = Yup.object().shape({
  searchTerm: Yup.string().required('Please enter a search term'),
})

const initialFormValue = {
  searchTerm: '',
}

const SearchBar = ({ onSetSearchQuery }) => {
  const handleSubmit = (value) => {
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

export default SearchBar


import React from 'react';
 import css from './ErrorMessage.module.css';
 import { ErrorMessageProps } from './ErrorMessage.types';

 const ErrorMessage:React.FC<ErrorMessageProps> = ({ message = `Oh something went wrong`})=> {
    return (
        <p className={css.errorMessage}>{message}</p>
    )
 }
 export default ErrorMessage;
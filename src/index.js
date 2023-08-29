import React from 'react'
import styles from './styles.module.css'



export const Button = (props, type) => {
     return <button className={`${styles.btn} ${styles[type]}}`}  {...props}>{props.text}</button>
}

export const Text = (props) => {
  return <p>{props.text}</p>
}
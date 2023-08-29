import React from 'react'
import styles from './styles.module.css'



export const Button = ({type, text}) => {
     return <button className={`${styles.btn} ${styles[type]}`}>{text}</button>
}

export const Text = (props) => {
  return <p>{props.text}</p>
}

export const Title = ({text}) => {
  return <h1 className={`${styles.title}`}>{text}</h1>
}
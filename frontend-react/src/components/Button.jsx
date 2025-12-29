import React from 'react'

const button = (props) => {
  return (
    <>
      <a className={`btn ${props.class}`} href="#">{props.text}</a>
    </>
  )
}

export default button

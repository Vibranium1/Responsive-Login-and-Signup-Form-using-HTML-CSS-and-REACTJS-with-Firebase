import React from 'react'
import "./formInput.scss"
const formInput = (props) => {
  return (
    <div className="formInput">
      <input placeholder={props.placeholder} />
    </div>
  )
}

export default formInput

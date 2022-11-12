import React from "react"

const Item = ({ text, remove, update }) => {
  return (
    <div className='item'>
      <div className='text'>{text}</div>
      <div className='icons'>
        <i className='ri-quill-pen-line' onClick={update}></i>
        <i className='ri-close-line' onClick={remove}></i>
      </div>
    </div>
  )
}

export default Item

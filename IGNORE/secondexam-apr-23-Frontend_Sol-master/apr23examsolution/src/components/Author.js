import React from 'react'

const Author = (props) => {
  return (
    <div style={{ width:400 }} className='Review'>
    {" * " + props.name}
    </div>
  )
}

export default Author
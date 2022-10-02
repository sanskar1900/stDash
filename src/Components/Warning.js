import React from 'react'

function Warning(props) {
  return (
    <div style={{borderRadius:'20px', margin:'20px'}}  className="text-center alert alert-danger" role="alert">
      {props.message}
    </div>
  )
}

export default Warning

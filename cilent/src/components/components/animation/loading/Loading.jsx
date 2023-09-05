import React from 'react'

const Loading = ({width}) => {
  return (
    <div>
        <img className={` rounded-full ${width}`} src="https://netflix-clone-react-jsc.netlify.app/static/media/loading.948201348313a3185f33.gif" alt="" />
    </div>
  )
}

export default Loading
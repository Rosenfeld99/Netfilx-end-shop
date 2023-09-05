import React from 'react'
import './skeletons.css'

const SkeletonElement = ({ type }) => {
    const classes = `skeletons ${type}`
  return (
    <div className={classes}>
    </div>
  )
}

export default SkeletonElement
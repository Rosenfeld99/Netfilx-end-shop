import React from 'react'
import Shimmer from './Shimmer'
import SkeletonElement from './SkeletonElement'

const SkeletonProfile = ({ theme }) => {
    const colorTheme = theme || 'light'

  return (
    <div className={`sekeleton-wrapper ${colorTheme}`}>
      <div className='skeleton-profire'>
        <div>
          <SkeletonElement type='avatar'/>
        </div>
        <div>
          <SkeletonElement type='title'/>
          <SkeletonElement type='text'/>
          <SkeletonElement type='text'/>
        </div>
      </div>
      <Shimmer/>
    </div>
  )
}

export default SkeletonProfile
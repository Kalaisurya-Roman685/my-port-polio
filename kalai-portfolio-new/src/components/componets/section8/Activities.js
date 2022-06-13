import React from 'react'
import ActiveData from './components/ActiveData';
import RightActiveData from './components/RightActiveData';
import './styles/Activities.scss';
function Activities() {
  return (
    <div className='main-activities'>

      <div className='inside-activities'>
        <div className='top-navbars'>
          <h1 className='mys'>My Activities</h1>
        </div>
        <div className='box-split'>
          <div className='left-activities'>
            <ActiveData />
          </div>
          <div className='right-activities'>
            <RightActiveData />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activities
import React from 'react'
import './Pfilter.css'

const Pfilter = () => {
  return (
    <div class="post-filter container">
        <span class="filter-item active-filter" data-filter="all">All</span>
        <span class="filter-item" data-filter="Tech">Tech</span>
        <span class="filter-item" data-filter="Space">Space</span>
        <span class="filter-item" data-filter="Entertainment">Entertainment</span>
      </div>
  )
}

export default Pfilter

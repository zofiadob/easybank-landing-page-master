import React from 'react'
import Article from './Article'
import './css/ArticleSection.css'

export default function ArticleSection() {
  return (
    <div className='article-section'>
        <h2>Latest Articles</h2>
        <div className='arti-box'>
        <Article />
        </div>
        </div>
  )
}

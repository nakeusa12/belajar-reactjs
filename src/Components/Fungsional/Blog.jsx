import React from 'react'
import "./css/blog.css"

const Blog = ({tanggal, judul, summary}) => {
    return (
        <div className="blog-wrap">
            <img src="https://placeimg.com/640/480/tech" alt=""/>
            <p>{tanggal}</p>
            <h2><b>{judul}</b></h2>
            <p>{summary}</p>
        </div>
    )
}

export default Blog

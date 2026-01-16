import React from 'react'
import "./Inner.css"

export default function Inner(){
    return(
        <div className='innertext'>
            <span className='learning'><b>Learning</b></span>
            <p>Published 21 Dec 2023</p>
            <h3>HTML & CSS foundations</h3>
            <p className="para">  These languages are the backbone of every website, defining structure, content, and presentation.</p>
            <div class="author">
                <img src="image-avatar.webp" alt="" />
                <span>Greg Hooper</span>
            </div>
        </div>
    )
}